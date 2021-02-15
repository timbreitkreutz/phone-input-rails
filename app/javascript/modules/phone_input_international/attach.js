/*jslint
 browser
*/
import {normalizeNumber, validateNumber}
    from "./numbers.js";

function attach(tag, options = {}) {
    const scope = options.scope || document;
    let handles = [];

    // Collect specified elements on the page for later use
    // Set up normalization events if specified
    scope.querySelectorAll(tag).forEach(function (element) {
        element.placeholder = `(rrr) nnn-nnnn`;

        handles.push({
            element,
            onChange: function (listener) {
                element.addEventListener(
                    "change",
                    function (event) {
                        const valid = validateNumber(element.value);
                        const normalized = normalizeNumber(element.value);
                        listener(event, element, valid, normalized);
                    }
                );
            }
        });

        if (options.normalizeOnChange === "squash") {
            element.addEventListener(
                "change",
                function () {
                    element.value = normalizeNumber(element.value);
                }
            );
        }
    });
    return handles;
}

const version = "0.0.1";

export {attach, version};
