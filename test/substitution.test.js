const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution error handling", () =>{
    it("should return false if the substitution alphabet is less than 26 characters", () =>{
        const actual = substitution("message", "fjsueyr@");
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is less than 26 characters", () =>{
        const actual = substitution("message", "!@#$%^&*()qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.be.false;
    });
    it("should return false if there are non-unique characters in the substitution alphabet", () =>{
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnn");
        expect(actual).to.be.false;
    });
    /* temp checker - will fail once rest of function is written
    it("should return true if all characters are unique in the substitution alphabet", () =>{
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
        expect(actual).to.be.true;
    });
    it("should return the correct alphabet cipher object", () => {
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
        const expected = {a:"q", b:"w", c:"e", d:"r", e:"t", f:"y", g:"u", h:"i", i:"o", j:"p", k:"a", l:"s", m:"d", n:"f", o:"g", p:"h", q:"j", r:"k", s:"l", t:"z", u:"x", v:"c", w:"v", x:"b", y:"n", z:"m"};
        expect(actual).to.eql(expected);
    });*/
});

describe("Substitution encoding a message", () => {
    it("should correctly encode a single word", () =>{
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "dtllqut";
        expect(actual).to.equal(expected);
    });
    it("should correctly handle spaces", () => {
        const actual = substitution("a message", "qwertyuiopasdfghjklzxcvbnm");
        const expected = "q dtllqut";
        expect(actual).to.equal(expected);
    });
});

/* Did not include self-made Substitution decoding tests, as the function is essentially the same as the encode function 
with key and value flip-flopped. Once the encoding function was complete, copying and making this change in the decode
should make all Thinkful tests pass */