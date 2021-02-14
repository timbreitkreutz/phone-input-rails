/*jslint
 browser
*/
let onChange;

import {toCamelCase} from "./phone_input_utilities.js";
import {normalizeNumber, validateNumber}
  from "./phone_input_international_numbers.js";

function attach(tag) {
    const camelCaseTag = toCamelCase(tag);
    let components = [];

    onChange = function (listener) {
        components.forEach(function (component) {
            const element = component.element;

            element.addEventListener(
                "change",
                function (event) {
                    const valid = validateNumber(element.value);
                    const normalized = normalizeNumber(element.value);
                    listener(event, component.id, element, valid, normalized);
                }
            );
        });
    };

    document.querySelectorAll(`[data-${tag}]`).forEach(function (element) {
        const id = element.dataset[camelCaseTag];
        element.placeholder = `${id}/${tag}`;

        components.push({
            id,
            element
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
}

const version = "0.0.1";

export {attach, onChange, version};
