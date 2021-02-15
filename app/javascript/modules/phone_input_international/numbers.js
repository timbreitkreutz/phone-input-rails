/*jslint
 browser
*/

import Metadata from "/javascripts/libphonenumber-js/metadata";

let metadata;
let numberingPlan;

function lengthOK(number) {
    let lengthFound = false;
    numberingPlan.possibleLengths().forEach(function (length) {
        // console.log("G")
        // console.log(`checking ${length}`)
        if (length === number.length) {
            lengthFound = true;
        }
    });
    return (lengthFound);
}

function patternMatch(number) {
    // console.log("HH")
    let patternFound = false;
    numberingPlan.formats().forEach(function (format) {
        // console.log("II");
        // console.log(`checking ${format.pattern()}`)
        if (new RegExp(format.pattern()).test(number)) {
            patternFound = true;
        }
    });
    return (patternFound);
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
            numberingPlan = metadata.selectNumberingPlan(1, "US");
            // console.log("G");
            // console.log(numberingPlan);
        }
    );
}

export {normalizeNumber, validateNumber};
