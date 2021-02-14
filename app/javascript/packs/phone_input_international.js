/*jslint
 browser
*/
import {toCamelCase} from "./phone_input_international/utilities.js";
import {normalizeNumber, validateNumber}
    from "./phone_input_international/numbers.js";

// All components that got attached to this instance of the plugin
let components = [];
let tag;

function onChange(listener) {
    components.forEach(function (component) {
        if (!component.changeAttached) {
            component.changeAttached = true;

            const element = component.element;

            element.addEventListener(
                "change",
                function (event) {
                    const valid = validateNumber(element.value);
                    const normalized = normalizeNumber(element.value);
                    listener(event, component.id, element, valid, normalized);
                }
            );
        }
    });
}

function attach(toTag) {
    tag = toTag;
    const camelCaseTag = toCamelCase(tag);

    // Collect specified elements on the page for later use
    // Set up normalization events if specified
    document.querySelectorAll(`[data-${tag}]`).forEach(function (element) {
        const id = element.dataset[camelCaseTag];
        element.placeholder = `${id}/${tag}`;

        components.push({
            id,
            element,
            changeAttached: false
        });
        window.components = components;
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
