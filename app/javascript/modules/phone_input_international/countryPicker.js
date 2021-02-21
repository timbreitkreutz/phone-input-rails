/*jslint
 browser
*/

import {countryData} from "./data.js";

function countryPicker(handle, options) {
    if (!options.countryPicker) {
        return;
    }
    const input = handle.element;

    let className = "phone-input-international-country-picker";
    if (typeof options.countryPicker === "string") {
        className = options.countryPicker;
    }

    // const control = document.createElement("select");
    // control.className = className;
    let selector = `<select class=${className}>`;
    const codeList = Object.keys(countryData);
    const sorted = codeList.sort(function (aa, bb) {
        if (countryData[aa].name < countryData[bb].name) {
            return -1;
        }
        if (countryData[aa].name > countryData[bb].name) {
            return 1;
        }
        return 0;
    });
    sorted.forEach(function (code) {
        selector += `<option value="${code}"`;
        if (code === handle.countryCode()) {
            selector += "selected='selected'";
        }
        selector += ">";
        let description = [];
        let strings = options.countrySelectors || "emoji,name";
        strings.split(",").forEach(function (field) {
            if (field !== "code") {
                description.push(countryData[code][field]);
            } else {
                description.push(code);
            }
        });
        selector += description.join(" &ndash; ");
        selector += "</option>";
    });
    selector += "</select>";

    input.insertAdjacentHTML("beforebegin", selector);
}

export {countryPicker};