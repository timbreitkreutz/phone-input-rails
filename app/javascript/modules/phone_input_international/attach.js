/*jslint
 browser
*/
import {afterLoad} from "./data.js";
import {makeHandle} from "./handle.js";

import {countryPicker} from "./countryPicker.js";
import {normalizer} from "./normalizer.js";
import {placeholder} from "./placeholder.js";

function initialize(options, handles) {
    handles.forEach(function (handle) {
        countryPicker(handle, options);
        normalizer(handle, options);
        placeholder(handle, options);
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
