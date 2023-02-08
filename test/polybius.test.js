const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius encoding a message", () => {
  it("should encode a single word correctly", () => {
    const actual = polybius("message");
    const expected = "23513434112251";
    expect(actual).to.equal(expected);
  });
  it("should handle spaces correctly", () => {
    const actual = polybius("a message");
    const expected = "11 23513434112251";
    expect(actual).to.equal(expected);
  });
  it("should return both i and j as 42", () => {
    const actual = polybius("i j");
    const expected = "42 42";
    expect(actual).to.equal(expected);
  });
});

describe("Polybius decoding a message", () => {
  it("should decode a single word correctly", () => {
    const actual = polybius("23513434112251", false);
    const expected = "message";
    expect(actual).to.equal(expected);
  });
  it("should handle non-numeric characters correctly", () => {
    const actual = polybius("11 23513434112251", false);
    const expected = "a message";
    expect(actual).to.equal(expected);
  });
  it("should return 42 as (i/j)", () => {
    const actual = polybius("224233", false);
    const expected = "g(i/j)n";
    expect(actual).to.equal(expected);
  });
  it("should return false for a string with an odd number of characters (minus spaces)", () =>{
    const actual = polybius("11 235134341122511", false);
    expect(actual).to.be.false;
  });
});
