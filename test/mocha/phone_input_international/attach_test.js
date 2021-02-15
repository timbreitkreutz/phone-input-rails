/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

import("/javascripts/phone_input_international/attach.js").then(
    function (pii) {
        describe("version", function () {
            it("should be 0.0.1", function () {
                expect(pii.version).to.equal("0.0.1");
            });
        });
        describe("onChange", function () {
            it("should receive correct change callback params", function () {
                const options = {
                    scope: document,
                    normalizeOnChange: "squash"
                };

                let fired = false;
                const handle = pii.attach("#input2", options)[0];
                const input = document.getElementById("input2");

                const callback = function (ev, el, vl, nl) {
                    expect(vl).to.equal(false);
                    expect(ev.type).to.equal("change");
                    expect(el).to.equal(input);
                    expect(nl).to.equal("5552738535");
                    fired = true;
                };
                handle.onChange(callback);

                expect(fired).to.equal(false);

                input.dispatchEvent(new Event("change"));

                expect(fired).to.equal(true);
            });
        });
    }
);