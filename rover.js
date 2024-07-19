const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      this.message = message;
      let results = [];
      for (let i = 0; i < message.commands.length; i++){
         if (message.commands[i].commandType === "MODE_CHANGE"){
            this.mode = message.commands[i].value;
            let modeChangeComplete = {"completed":true};
            results.push(modeChangeComplete);
         }
      }
      for (let k = 0; k < message.commands.length; k++){
         if (message.commands[k].commandType === "MOVE"){
            let moveCommandComplete;
            if (this.mode === "NORMAL"){
               this.position = message.commands[k].value;
               moveCommandComplete = {"completed":true};
            } else {
               moveCommandComplete = {"completed":false};
            }
            results.push(moveCommandComplete);
         }
      }

      for (let j = 0; j < message.commands.length; j++){
         if (message.commands[j].commandType === "STATUS_CHECK"){
            let roverStatusComplete = {"completed":true, "roverStatus":{"mode":this.mode, "generatorWatts":this.generatorWatts, "position":this.position}};
            results.push(roverStatusComplete);
         }
      }
    
      let response = {
         "message": message.messageName,
         "results": results
            // message.commands
         };
      
     
      
      return response;

      //returns an OBJECT containing at least two properties: message, the messageName of the original message, and:
      //results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands
   }
}

module.exports = Rover;

// rover.js test code:
// let command1 = new Command("MOVE", 1010);
// // let command3 = new Command("MODE_CHANGE", "LOW_POWER")
// let command4 = new Command("STATUS_CHECK");
// let testRover = new Rover(1);
// let testMessage4 = new Message("TestMessage4", [command1, command4])

// console.log(testRover.receiveMessage(testMessage4).results);


let testRover4 = new Rover(6)
let testCommand3 = new Command("STATUS_CHECK");
let sampleMessage2 = new Message("Testing Status Check", [testCommand3]);
console.log(testRover4.receiveMessage(sampleMessage2).results);