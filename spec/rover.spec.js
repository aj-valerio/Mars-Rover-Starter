const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let roverPosition;
    const newRoverObject = new Rover(constructor(roverPosition));
    expect(newRoverObject["this.position"]).toBe(roverPosition);
    expect(newRoverObject["mode"]).toBe("NORMAL");
    expect(newRoverObject["generatorWatts"]).toBe(110);
  });

  it("response returned by receiveMessage contains the name of the message", function() {
    let sampleMessage = {messageName:"sampleName"};
    // const sampleRoverObject = new Rover(receiveMessage(sampleMessage));
    // expect(sampleRoverObject(receiveMessage(sampleMessage))).toContain(sampleMessage.messageName);
    // expect( function() { new Rover(receiveMessage(sampleMessage));}).toContain(sampleMessage.messageName);
    expect(Rover(receiveMessage(sampleMessage))).toContain("sampleName");
  });

  // 7 tests here!

});
