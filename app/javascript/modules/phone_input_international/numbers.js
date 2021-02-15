/*jslint
 browser
*/

import Metadata from "/javascripts/libphonenumber-js/metadata";

let metadata;
let country;

function lengthOK(number) {
    // console.log("F");
    // console.log(country);
    let validLengths = country[3];
    let lengthFound = false;
    // console.log(validLengths);
    validLengths.forEach(function (length) {
        // console.log("G")
        // console.log(`checking ${length}`)
        if (length === number.length) {
            lengthFound = true;
        }
    });
    return (lengthFound);
}

function patternMatch(number) {
    let result = new RegExp(country[2]);
    // console.log(result);
    let r2 = result.test(number);
    // console.log(r2);
    // return new RegExp(metadata.countries["US"][2])).test(number);
    return r2;
}

function validateNumber(number) {
    if (typeof number !== "string") {
        return false;
    }
    if (!lengthOK(number)) {
        return false;
    }
    // console.log("I")

    return patternMatch(number);
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

/* Load up the metadata just once */

// console.log("A");
if (typeof metadata !== "object") {
    // console.log("B");

    fetch("/metadata.min.json").then(
        function (response) {
            // console.log("C");
            // console.log(response);
            return response.json();
        }
    ).then(
        function (data) {
            // console.log("D");
            // console.log(data);
            metadata = new Metadata(data);
            // console.log("E");
            // console.log(metadata)
            country = metadata.getCountryMetadata("US");
        }
    );
}

export {normalizeNumber, validateNumber};
