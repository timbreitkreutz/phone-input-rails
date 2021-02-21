

import {attach, version}
    from "/javascripts/phone_input_international/attach.js";

describe('version', function () {
    it('should correct version', function () {
        chai.expect(version).to.equal("0.0.1");
    });
});

describe('attach', function () {
    it('create a single handle', function () {
    const input = document.getElementById("input2");
        let handles1 = attach("#input2", {});
        chai.expect(handles1.length).to.equal(1);
        let handles2 = attach("#input2", {});
        chai.expect(handles2.length).to.equal(1);
        chai.expect(handles1[0].element).to.equal(handles2[0].element);
        chai.expect(input).to.equal(handles1[0].element);
    });
});
