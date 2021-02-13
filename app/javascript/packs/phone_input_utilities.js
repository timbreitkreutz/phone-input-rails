function toCamelCase(string) {
    "use strict";
    return string.split("-").map(function (word, ii) {
        if (ii === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
}

export {toCamelCase};