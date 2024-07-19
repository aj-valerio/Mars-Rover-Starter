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
    let testRover2 = new Rover(8)
    let testCommand1 = new Command("type1", 567);
    let testCommand2 = new Command("type2", 123);
    let sampleMessage = new Message("Testing123", [testCommand1, testCommand2]);
    expect(testRover2.receiveMessage(sampleMessage).message).toBe("Testing123");
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let testRover3 = new Rover(9)
    let testCommand3 = new Command("type1", 567);
    let testCommand4 = new Command("type2", 123);
    let sampleMessage2 = new Message("Testing123", [testCommand3, testCommand4]);
    // left off on line 32, fixing brackets etc.
    expect(testRover3.receiveMessage(sampleMessage2.commands)[testCommand3.value[0],testCommand4.value[0]]).toBe([567, 123]);
  })
  // 7 tests here!

});
