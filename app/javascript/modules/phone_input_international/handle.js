/*jslint
 browser
*/
import {normalizeNumber, validateNumber}
    from "./numbers.js";

function Handle(element) {
    function onChange(listener) {
        element.addEventListener(
            "change",
            function (event) {
                const valid = validateNumber(element.value);
                const normalized = normalizeNumber(element.value);
                listener(event, element, valid, normalized);
            }
        );
    }

    return {
        element,
        onChange
    };
}

export {Handle};
