class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      this.message = message;
      return (message[messageName]);
   }
}

module.exports = Rover;