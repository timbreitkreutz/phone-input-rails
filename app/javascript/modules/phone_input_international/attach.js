/*jslint
 browser
*/
import {normalizeNumber, placeholder} from "./numbers.js";
import {Handle} from "./handle.js";

function attach(tag, options = {}) {
    const scope = options.scope || document;
    let handles = [];

    // Collect specified elements on the page for later use
    // Set up normalization events if specified
    scope.querySelectorAll(tag).forEach(function (element) {
        element.placeholder = placeholder();

        handles.push(new Handle(element));

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
