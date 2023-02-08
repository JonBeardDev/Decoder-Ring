const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar error handling", () => {
  it("should return false when no shift value is present", () => {
    const actual = caesar("string");
    expect(actual).to.be.false;
  });
  it("should return false when a shift value of 0 is given", () =>{
    const actual = caesar("string", 0);
    expect(actual).to.be.false;
  });
  it("should return false when a shift value less than -25 is given", () =>{
    const actual = caesar("string", -26);
    expect(actual).to.be.false;
  });
  it("should return false when a shift value greater than 25 is given", () =>{
    const actual = caesar("string", 26);
    expect(actual).to.be.false;
  });
});

describe("Caesar encoding a message", () =>{
    it("should return the correct encoded message for a positive shift (no punctuation/spaces)", () =>{
        const actual = caesar("string", 1);
        const expected = "tusjoh";
        expect(actual).to.equal(expected);
    });
    it("should return the correct encoded message for a negative shift (no punctuation/spaces)", () =>{
        const actual = caesar("string", -1);
        const expected = "rsqhmf";
        expect(actual).to.equal(expected);
    });
    it("should correctly handle letters at the end of the alphabet (positive)", () =>{
        const actual = caesar("wxyz", 5);
        const expected = "bcde";
        expect(actual).to.equal(expected);
    });
    it("should correctly handle letters at the end of the alphabet (negative)", () =>{
        const actual = caesar("bcde", -5);
        const expected = "wxyz";
        expect(actual).to.equal(expected);
    });
    it("should handle non-alphabetic characters correctly", () =>{
        const actual = caesar("This is a hyphenated-string!", 1);
        const expected = "uijt jt b izqifobufe-tusjoh!";
        expect(actual).to.equal(expected);
    });
});

describe("Caesar decoding a message", () =>{
    it("should decode the message correctly", () =>{
        const actual = caesar("Uijt jt b izqifobufe-tusjoh!", 1, false);
        const expected = "this is a hyphenated-string!";
        expect(actual).to.equal(expected);
    });
});
