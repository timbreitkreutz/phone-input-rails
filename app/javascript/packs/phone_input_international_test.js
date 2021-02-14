/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

const expect = chai.expect;

import("/javascripts/phone_input_international.js").then(
    function (pii) {
        describe("version", function () {
            it("should be 0.0.1", function () {
                expect(pii.version).to.equal("0.0.1");
            });
        });
        describe("onChange", function () {
            it("recieve correct information on a callback", function () {
                let fired = false;

                pii.attach("phone-input");
                let input = document.getElementById("person_home_phone_input");

                const callback = function (ev, id, el, vl, nl) {
                    expect(vl).to.equal(true);
                    expect(ev.type).to.equal("change");
                    expect(id).to.equal("home-phone2");
                    expect(el).to.equal(input);
                    expect(nl).to.equal("5552738535");
                    fired = true;
                };
                pii.onChange(callback);

                expect(fired).to.equal(false);

                input.dispatchEvent(new Event("change"));

                expect(fired).to.equal(true);
            });
        });
    }
);

import("/javascripts/phone_input_utilities.js").then(
    function (pu) {
        describe("camelCase", function () {
            it("change strings to camelcase", function () {
                expect(pu.toCamelCase("ab-cd")).to.equal("abCd");
                expect(pu.toCamelCase("abCd")).to.equal("abCd");
                expect(pu.toCamelCase("")).to.equal("");
                expect(pu.toCamelCase(undefined)).to.equal(undefined);
                expect(pu.toCamelCase(1.5)).to.equal(undefined);
                expect(pu.toCamelCase([1, 3])).to.equal(undefined);
                expect(pu.toCamelCase({a: 5})).to.equal(undefined);
            });
        });
    }
);

import("/javascripts/phone_input_international_numbers.js").then(
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
            it("succeed on normal US number", function () {
                expect(pin.validateNumber("8001231234")).to.equal(true);
                expect(pin.validateNumber(8001231234)).to.equal(true);
            });
            it("fail with wrong number of digits", function () {
                expect(pin.validateNumber("1")).to.equal(false);
                expect(pin.validateNumber("800123234")).to.equal(false);
                expect(pin.validateNumber("800123111234")).to.equal(false);
            });
            it("fail with random garbage", function () {
                expect(pin.validateNumber(null)).to.equal(false);
                expect(pin.validateNumber(12.3)).to.equal(false);
                expect(pin.validateNumber([1, 3])).to.equal(false);
                expect(pin.validateNumber({a: 5})).to.equal(false);
            });
        });
    }
);
