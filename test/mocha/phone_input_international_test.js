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
            it("should receive correct change callback params", function () {
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