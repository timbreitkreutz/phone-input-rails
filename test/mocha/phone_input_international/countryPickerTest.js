import {attach}
    from "/javascripts/phone_input_international/attach.js";

describe('countryPicker', function () {
    it('create a flag span', function () {
        const input = document.createElement("input");
        input.id = "normalizer_test_input";
        input.value = "404 505 4044";
        document.body.appendChild(input);

        const options = {
            countryPicker: "normalizer_test_input_flag",
            afterInitialize() {
                const flag = input.parentNode.querySelector(".normalizer_test_input_flag");
                chai.expect(flag.className).to.equal("normalizer_test_input_flag")
                chai.expect(flag.childNodes[0].value).to.equal("AF");
                chai.expect(flag.childNodes.length).to.equal(250);
            }
        }
        attach("#normalizer_test_input", options);
    });
});
