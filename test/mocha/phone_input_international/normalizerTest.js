import {attach}
    from "/javascripts/phone_input_international/attach.js";

describe('normalizer', function () {
    it('check validity of number', function () {
        const input3 = document.createElement("input");
        input3.id = "input3";
        input3.value = "404 404 4044";
        document.body.appendChild(input3);

        const options = {
            normalizer: "squash",
            afterInitialize() {
                let event = new Event('change');
                input3.dispatchEvent(event);
                chai.expect(input3.value).to.equal("4044044044");
            }
        }
        attach("#input3", options);
    });
});
