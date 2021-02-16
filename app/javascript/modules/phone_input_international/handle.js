/*jslint
 browser
*/
import {normalizeNumber, validateNumber}
    from "./numbers.js";

function Handle(element) {
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

    handle = {
        isValid,
        normalized,
        onChange
    };

    return handle;
}

export {Handle};
