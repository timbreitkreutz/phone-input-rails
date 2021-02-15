/*jslint
 browser
*/

import Metadata from "/javascripts/libphonenumber-js/metadata";

let metadata;

function validateNumber(number) {
    if (typeof number !== "string") {
        return false;
    }

    // console.log(metadata.countries);
    // mm = new Metadata(metadata)
    // console.log(mm);
    return false;
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

/* Load up the metadata just once */

if (typeof metadata !== "object") {
    fetch("/metadata.min.json").then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {
            metadata = new Metadata(data).metadata;
        }
    );
}

export {normalizeNumber, validateNumber};
