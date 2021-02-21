/*jslint
 browser
*/
import {afterLoad} from "./data.js";
import {makeHandle} from "./handle.js";

import {countryPicker} from "./countryPicker.js";
import {normalizer} from "./normalizer.js";
import {placeholder} from "./placeholder.js";

// Only load an element once :)
let initialized = [];

function initialize(options, handles) {
    handles.forEach(function (handle) {
        if (initialized[handle.element]) {
            return;
        }

        countryPicker(handle, options);
        normalizer(handle, options);
        placeholder(handle, options);

        initialized[handle.element] = true;
    });

    if (options.afterInitialize) {
        options.afterInitialize(handles);
    }
}

function attach(tag, options = {}) {
    const scope = options.scope || document;
    let handles = [];
    scope.querySelectorAll(tag).forEach(function (element) {
        handles.push(makeHandle(element));
    });
    afterLoad(function () {
        initialize(options, handles);
    });
    return handles;
}

const version = "0.0.1";

export {attach, version};
