import {attach}
    from "/javascripts/phone_input_international/attach.js";

describe('placeholder', function () {
    it('populate', function () {
        const input = document.createElement("input");
        input.id = "placehoder_test_input";
        document.body.appendChild(input);

        const options = {
            placeholder: true,
            afterInitialize() {
                chai.expect(input.placeholder).to.equal("(rrr) nnn-nnnn")
            }
        }
        attach("#placehoder_test_input", options);
    });
});
