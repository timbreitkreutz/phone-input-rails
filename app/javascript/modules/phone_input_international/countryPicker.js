/*jslint
 browser
*/

import {countryData} from "./data.js";

function countryPicker(handle, options) {
    if (!options.countryPicker) {
        return;
    }
    const input = handle.element;
    const parent = input.parentNode;

    let className = "phone-input-international-country-picker";
    if (typeof options.countryPicker === "string") {
        className = options.countryPicker;
    }
    const control = document.createElement("span");
    control.className = className;

    const flag = document.createElement("span");

    flag.innerHTML = countryData[handle.countryCode()].emoji;
    flag.style = "font-size: 16px; vertical-align: bottom";
    control.appendChild(flag);

    const arrow = document.createElement("span");
    arrow.innerHTML = "▾";
    control.appendChild(arrow);

    parent.insertBefore(control, input);
}

export {countryPicker};