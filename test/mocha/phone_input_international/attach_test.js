/*jslint browser:true*/
/*global
   chai
   describe
   expect
   it
 */

import {attach, version} from "/javascripts/phone_input_international/attach.js";

// console.log("ATTACH TEST");

// import("/javascripts/phone_input_international/attach.js").then(
//     // function (pii) {
//         console.log("ATTACH TEST B")
//         // console.log(pii)
//         describe("version", function () {
//             it("should be 0.0.1", function () {
//                 console.log("in test")
//                 console.log(attach);
//                 // expect(attach.version).to.equal("0.0.1");
//                 expect(1).to_equal(1.1);
//             });
//         });
//     // }
// );


describe('version', function () {
    it('should correct version', function () {
        chai.expect(version).to.equal("0.0.1");
    });
});


describe('attach', function () {
    it('create a single handle', function () {
        const input = document.getElementById("#input2");
        let handles1 = attach("#input2", {});
        chai.expect(handles1.length).to.equal(1);
        let handles2 = attach("#input2", {});
        chai.expect(handles2.length).to.equal(1);
        chai.expect(handles1[0].element).to.equal(handles2[0].element);
    });
});
