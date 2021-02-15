/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

const expect = chai.expect;

import("/javascripts/phone_input_international/numbers.js").then(
    function (pin) {
        describe("normalizeNumber", function () {
            it("should remove spaces", function () {
                expect(pin.normalizeNumber("1 2 3")).to.equal("123");
            });
            it("should remove leading +", function () {
                const expected = "14037143558";
                const result = pin.normalizeNumber("+1 403 714 3558");
                expect(result).to.equal(expected);
            });
            it("should remove extraneous things", function () {
                const expected = "14037143558555";
                const result = pin.normalizeNumber("+1 403 714 3558 ext 555");
                expect(result).to.equal(expected);
            });
        });
        describe("validateNumber", function () {
            it("should succeed on normal US number", function () {
                expect(pin.validateNumber("+18009371234")).to.equal(true);
                expect(pin.validateNumber("8009371234")).to.equal(true);
            });
            it("should fail with wrong number of digits", function () {
                expect(pin.validateNumber("1333")).to.equal(false);
                expect(pin.validateNumber("800123234")).to.equal(false);
                expect(pin.validateNumber("800123111234")).to.equal(false);
            });
            it("should fail with random garbage", function () {
                expect(pin.validateNumber(null)).to.equal(false);
                expect(pin.validateNumber(12.3)).to.equal(false);
                expect(pin.validateNumber([1, 3])).to.equal(false);
                expect(pin.validateNumber({a: 5})).to.equal(false);
            });
        });
    }
);
