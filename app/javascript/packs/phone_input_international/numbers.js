/*jslint
 browser
*/

function validateNumber(number) {
    return /^\(?([0-9]{3})\)?[\-.\u0020]?([0-9]{3})[\-.\u0020]?([0-9]{4})$/.test(number);
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

export {normalizeNumber, validateNumber};
