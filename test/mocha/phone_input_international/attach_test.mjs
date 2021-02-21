/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

import {attach} from "./attach.js";

console.log("ATTACH TEST");

// import("/javascripts/phone_input_international/attach.js").then(
    // function (pii) {
        console.log("ATTACH TEST B")
        console.log(pii)
        describe("version", function () {
            it("should be 0.0.1", function () {
                expect(attach.version).to.equal("0.0.1");
            });
        });
    // }
// );