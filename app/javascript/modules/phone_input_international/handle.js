/*jslint
 browser
*/
import {normalizeNumber, validateNumber}
    from "./data.js";

function makeHandle(element) {
    let handle;

    function onChange(listener) {
        element.addEventListener(
            "change",
            function (event) {
                listener(event, handle);
            }
        );
    }

    function isValid() {
        return validateNumber(element.value);
    }

    function normalized() {
        return normalizeNumber(element.value);
    }

    function countryCode() {
        return "US";
    }

    handle = {
        countryCode,
        element,
        isValid,
        normalized,
        onChange
    };

    return handle;
}

export {makeHandle};
