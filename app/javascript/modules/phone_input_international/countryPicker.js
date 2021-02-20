/*jslint
 browser
*/

function attachCountryPicker(handle, options) {
    const input = handle.element;
    const parent = input.parentNode;

    const flag = document.createElement("span");

    let className = "phone-input-international-country-picker";
    if (typeof options.countryPicker === "string") {
        className = options.countryPicker;
    }

    flag.className = className;

    const img = document.createElement("img");
    const countryCode = handle.countryCode();
    const src = `https://www.countryflagicons.com/FLAT/64/${countryCode}.png`;
    img.src = src;
    img.style = "width: 22px; vertical-align: bottom;";
    img.title = countryCode;
    flag.appendChild(img);
    let arrow = document.createElement("span");
    arrow.innerHTML = "▾";
    flag.appendChild(arrow);
    parent.insertBefore(flag, input);
}

export {attachCountryPicker};