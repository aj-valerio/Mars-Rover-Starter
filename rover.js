const Message = require('./message.js');
const Command = require('./command.js');

class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      this.message = message
      let response = {
         "message": message.messageName,
         "results": [1, 2]

      };
      return response;
      //returns an OBJECT containing at least two properties: message, the messageName of the original message, and:
      //results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands
   }
}

module.exports = Rover;

// rover.js test code:
let command1 = new Command("Command01", ["Action1", "Action2"]);
let command2 = new Command("Command02", ["Action3", "Action4"]);
let testRover = new Rover(1);
let testMessage4 = new Message("TestMessage4", [command1.value[0], command2.value[0]])
console.log(testRover.receiveMessage(testMessage4));