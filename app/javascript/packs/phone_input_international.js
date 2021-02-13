/*jslint
 browser
*/
let onChange;

import {toCamelCase} from "/javascripts/phone_input_utilities.js";

function attach(tag) {
    function validate(number) {
        return /^\(?([0-9]{3})\)?[\-.\u0020]?([0-9]{3})[\-.\u0020]?([0-9]{4})$/.test(number);
    }

    function normalize(number) {
        return number.replace(/[^\d]*/g, "");
    }

    const camelCaseTag = toCamelCase(tag);
    let components = [];

    onChange = function (listener) {
        components.forEach(function (component) {
            const element = component.element;

            element.addEventListener(
                "change",
                function (event) {
                    const valid = validate(element.value);
                    const normalized = normalize(element.value);
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
                    element.value = normalize(element.value);
                }
            );
        }
    });
}

const version = "0.0.1";

export {attach, onChange, version};
