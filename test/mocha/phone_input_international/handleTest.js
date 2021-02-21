import {attach}
    from "/javascripts/phone_input_international/attach.js";
import {makeHandle}
    from "/javascripts/phone_input_international/handle.js";

describe('makeHandle', function () {
    it('create a handle for a provided element', function () {
        const input = document.getElementById("input2");
        const handle = makeHandle(input);
        chai.expect(handle.element).to.equal(input);
    });
});

describe('countryCode', function () {
    it('create a handle for a provided element', function () {
        const input = document.getElementById("input2");
        const handle = makeHandle(input);
        chai.expect(handle.countryCode()).to.equal("US");
    });
});

describe('normalized', function () {
    it('return a normalized version of number', function () {
        const input = document.getElementById("input2");
        const handle = makeHandle(input);
        chai.expect(handle.normalized()).to.equal("5552738535");
    });
});

describe('isValid', function () {
    it('check validity of number', function () {
        let handle;
        const options = {
            afterInitialize() {
                chai.expect(handle.isValid()).to.equal(false);
            }
        }
        handle = attach("#input2", options)[0];
    });
});

describe('onChange', function () {
    it('callback with handle and event', function () {
        let h1;
        const options = {
            afterInitialize() {
                h1.onChange(function (event, h2) {
                    chai.expect(h2.element).to.equal(h1.element);
                    chai.expect(event.type).to.equal("change");
                });
            }
        }
        h1 = attach("#input2", options)[0];
    });
});
