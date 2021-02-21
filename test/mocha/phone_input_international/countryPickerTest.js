import {attach}
    from "/javascripts/phone_input_international/attach.js";

describe('countryPicker', function () {
    it('create a selector with name only', function () {
        const input = document.createElement("input");
        input.id = "normalizer_test_input_name_only";
        input.value = "404 505 4044";
        document.body.appendChild(input);

        const options = {
            countryPicker: "normalizer_test_input_flag",
            afterInitialize() {
                const flag = input.parentNode.querySelector(".normalizer_test_input_flag");
                chai.expect(flag.className).to.equal("normalizer_test_input_flag")
                chai.expect(flag.childNodes[0].value).to.equal("AF");
                chai.expect(flag.childNodes[0].textContent).to.equal("🇦🇫 – Afghanistan");
                chai.expect(flag.childNodes.length).to.equal(250);
            }
        }
        attach("#normalizer_test_input_name_only", options);
    });

    it('create a selector with flag only', function () {
        const input = document.createElement("input");
        input.id = "normalizer_test_input_flag_only";
        input.value = "404 505 4044";
        document.body.appendChild(input);

        const options = {
            countryPicker: "normalizer_test_input_flag2",
            countrySelectors: "emoji",
            afterInitialize() {
                const flag = input.parentNode.querySelector(".normalizer_test_input_flag2");
                chai.expect(flag.className).to.equal("normalizer_test_input_flag2")
                chai.expect(flag.childNodes[0].value).to.equal("AF");
                chai.expect(flag.childNodes[0].textContent).to.equal("🇦🇫");
                chai.expect(flag.childNodes.length).to.equal(250);
            }
        }
        attach("#normalizer_test_input_flag_only", options);
    });
});
