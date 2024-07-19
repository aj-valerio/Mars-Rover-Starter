const Command = require('./command.js');

class Message {
   constructor(messageName, commands) {
      this.messageName = messageName;
      if (!messageName) {
         throw Error("Message name required.");
      }
      this.commands = commands;
   }
}

module.exports = Message;

// message.js test code:
// let command1 = new Command("Command01", ["Action1", "Action2"]);
// let command2 = new Command("Command02", ["Action3", "Action4"]);
// let testMessage3 = new Message("TestMessage3", [command1.value[0], command2.value[0]]);
// console.log(testMessage3.messageName);