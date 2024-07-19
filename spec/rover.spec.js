const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let testRover1 = new Rover(3);
    expect(testRover1["position"]).toBe(3);
    expect(testRover1["mode"]).toBe("NORMAL");
    expect(testRover1["generatorWatts"]).toBe(110);
  });

  it("response returned by receiveMessage contains the name of the message", function() {
    let testRover2 = new Rover(4)
    let testCommand1 = new Command("MOVE", 567);
    let testCommand2 = new Command("MODE_CHANGE", "LOW_POWER");
    let sampleMessage = new Message("Testing123", [testCommand1, testCommand2]);
    expect(testRover2.receiveMessage(sampleMessage).message).toBe("Testing123");
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let testRover3 = new Rover(5)
    let testCommand3 = new Command("MOVE", 567);
    let testCommand4 = new Command("STATUS_CHECK");
    let sampleMessage2 = new Message("Testing123", [testCommand3, testCommand4]);
    expect(testRover3.receiveMessage(sampleMessage2).results.length).toBe(2);
  });

  it("responds correctly to the status check command", function() {
    let testRover4 = new Rover(6)
    let testCommand3 = new Command("STATUS_CHECK");
    let sampleMessage2 = new Message("Testing Status Check", [testCommand3]);
    expect(testRover4.receiveMessage(sampleMessage2).results).toStrictEqual([{completed: true, roverStatus: { mode: 'NORMAL', generatorWatts: 110, position: 6 }}]);
  });

  it("responds correctly to the mode change command", function() {
    let testRover5 = new Rover(7)
    let testCommand5 = new Command("MODE_CHANGE", 'LOW_POWER');
    let sampleMessage2 = new Message("Testing Mode Change", [testCommand5]);
    expect(testRover5.receiveMessage(sampleMessage2).results[0]).toStrictEqual({ completed:true });
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let testRover6 = new Rover(8);
    let testCommand5 = new Command("MODE_CHANGE", 'LOW_POWER');
    let testCommand6 = new Command("MOVE", 456);
    let sampleMessage2 = new Message("Testing Move Command In Low Power Mode", [testCommand6, testCommand5]);
    expect(testRover6.receiveMessage(sampleMessage2).results).toStrictEqual([{ completed: true }, { completed: false }]);
  });

  it("responds with the position for the move command", function() {
    let testRover7 = new Rover(9);
    let testCommand7 = new Command("MOVE", 678);
    let sampleMessage2 = new Message("Testing Move Command In Normal Mode", [testCommand7]);
    testRover7.receiveMessage(sampleMessage2);
    expect(testRover7.position).toBe(678);
  });

});
