/*jslint
 browser
*/

function validateNumber(number) {
    if (typeof number !== "string") {
        return false;
    }
    const parsed = window.libphonenumber.parsePhoneNumber(number, "US");
    return parsed.isValid();
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

export {normalizeNumber, validateNumber};
