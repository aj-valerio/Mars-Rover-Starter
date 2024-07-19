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
            let modeChangeComplete = { completed: true };
            results.push(modeChangeComplete);
         } else if (message.commands[i].commandType === "MOVE"){
            let moveCommandComplete;
            if (this.mode === "NORMAL"){
               this.position = message.commands[i].value;
               moveCommandComplete = { completed: true };
            } else {
               moveCommandComplete = { completed: false };
            }
            results.push(moveCommandComplete);
         } else if (message.commands[i].commandType === "STATUS_CHECK"){
            let roverStatusComplete = { completed: true, roverStatus: { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}};
            results.push(roverStatusComplete);
         }
      }
    
      let response = {
         message: message.messageName,
         results: results
         };

      return response;

   }
}

module.exports = Rover;