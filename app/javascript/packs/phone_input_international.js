/*jslint
 browser
*/
import {toCamelCase} from "./phone_input_international/utilities.js";
import {normalizeNumber, validateNumber}
    from "./phone_input_international/numbers.js";

function attach(tag, scope = document) {
    const camelCaseTag = toCamelCase(tag);
    let handles = [];

    // Collect specified elements on the page for later use
    // Set up normalization events if specified
    scope.querySelectorAll(`[data-${tag}]`).forEach(function (element) {
        const id = element.dataset[camelCaseTag];
        element.placeholder = `${id}/${tag}`;

        handles.push({
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

        if (element.dataset[`${camelCaseTag}Normalized`] === "squash") {
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
