/*jslint
 browser
*/

import Metadata from "/javascripts/libphonenumber-js/metadata";

let metadata;
let numberingPlan;
let thePlaceholder;

function lengthOK(number) {
    let lengthFound = false;
    numberingPlan.possibleLengths().forEach(function (length) {
        if (!lengthFound && length === number.length) {
            lengthFound = true;
        }
    });
    return lengthFound;
}

function patternMatch(number) {
    let patternFound = false;
    numberingPlan.formats().forEach(function (format) {
        if (!patternFound && new RegExp(format.pattern()).test(number)) {
            patternFound = true;
        }
    });
    return patternFound;
}

function validateNumber(number) {
    if (typeof number !== "string") {
        return false;
    }
    if (!lengthOK(number)) {
        return false;
    }

    return patternMatch(number);
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

function placeholder() {
    return thePlaceholder;
}

function example(ff) {
    return ff.replace("$1", "rrr").replace("$2", "nnn").replace("$3", "nnnn");
}

/* Load up the metadata just once */

if (typeof metadata !== "object") {
    fetch("/metadata.min.json").then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {
            metadata = new Metadata(data);
            numberingPlan = metadata.selectNumberingPlan(1, "US");
            numberingPlan.formats().forEach(function (format) {
                if (typeof thePlaceholder !== "object") {
                    thePlaceholder = example(format.format());
                }
            });
        }
    );
}

export {normalizeNumber, validateNumber, placeholder};
