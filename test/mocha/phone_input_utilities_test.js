/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

import("/javascripts/phone_input_international/utilities.js").then(
    function (pu) {
        describe("camelCase", function () {
            it("should change strings to camelcase", function () {
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
