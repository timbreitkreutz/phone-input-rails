function toCamelCase(string) {
    "use strict";
    if (typeof string !== "string") {
        return undefined;
    }
    let parts = string.split("-");
    if (parts.length === 1) {
        return string;
    }
    return parts.map(function (word, ii) {
        if (ii === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
}

export {toCamelCase};
