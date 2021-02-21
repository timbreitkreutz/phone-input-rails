import {afterLoad, countryData, phoneData}
    from "/javascripts/phone_input_international/data.js";

describe('afterLoad', function () {
    it('should wait until data are loaded before running', function () {
        afterLoad(function() {
            chai.expect(countryData.US.continent).to.equal("NA");
            chai.expect(phoneData.metadata.countries.US[0]).to.equal("1");
        });
    });
});
