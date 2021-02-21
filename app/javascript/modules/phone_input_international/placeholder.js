/*jslint
 browser
*/

import {numberingPlan} from "./data.js";

function example(ff) {
    return ff.replace("$1", "rrr").replace("$2", "nnn").replace("$3", "nnnn");
}

function placeholder(handle, options) {
    if (!options.placeholder) {
        return;
    }
    numberingPlan.formats().some(function (format) {
        handle.element.placeholder = example(format.format());
        return true;
    });
    handle.element.placeholder = placeholder(handle);
}

export {placeholder};