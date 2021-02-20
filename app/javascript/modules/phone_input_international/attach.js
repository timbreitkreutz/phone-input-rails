/*jslint
 browser
*/
import {placeholder} from "./numbers.js";
import {makeHandle} from "./handle.js";
import {attachCountryPicker} from "./countryPicker.js";

function attach(tag, options = {}) {
    const scope = options.scope || document;
    let handles = [];

    // Collect specified elements on the page for later use
    // Set up normalization events if specified
    scope.querySelectorAll(tag).forEach(function (element) {
        element.placeholder = placeholder();
        const handle = makeHandle(element);

        handles.push(handle);

        if (options.normalizeOnChange === "squash") {
            element.addEventListener(
                "change",
                function () {
                    element.value = handle.normalized();
                }
            );
        }

        if (options.countryPicker) {
            attachCountryPicker(handle, options);
        }
    });
    return handles;
}

const version = "0.0.1";

export {attach, version};
