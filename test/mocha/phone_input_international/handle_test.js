import("/javascripts/phone_input_international/handle.js").then(
    function (handle) {
        describe("countryCode", function () {
            it("return US", function () {
                const input = document.getElementById("input2");
                let h2 = handle.makeHandle(input);
                chai.expect(h2.countryCode()).to.equal("US");
            });
        });
    }
);
