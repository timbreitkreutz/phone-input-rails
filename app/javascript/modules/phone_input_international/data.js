/*jslint
 browser
*/

import Metadata from "/javascripts/libphonenumber-js/metadata";

// Loads up two sets of metadata--
// one for phone data and one for country flags and names

let phoneData;
let countryData;
let callbacks = [];

function afterLoad(callback) {
    console.log("AFTERLOAD")
    callbacks.push(callback);
}

function loadCompleted() {
    console.log("LOAD COMPLETED")
    console.log(phoneData);
    console.log(typeof phoneData)
    console.log(countryData);
    console.log(typeof countryData)
    if (typeof phoneData === "object" && typeof countryData === "object") {
        callbacks.forEach(function (callback) {
            callback();
        });
    }
}

let numberingPlan;

function lengthOK(number) {
    let lengthFound = false;
    numberingPlan.possibleLengths().forEach(function (length) {
        if (!lengthFound && length === number.length) {
            lengthFound = true;
        }
    });
    return lengthFound;
}

function patternMatch(number) {
    let patternFound = false;
    numberingPlan.formats().forEach(function (format) {
        if (!patternFound && new RegExp(format.pattern()).test(number)) {
            patternFound = true;
        }
    });
    return patternFound;
}

function validateNumber(number) {
    if (typeof number !== "string") {
        return false;
    }
    if (!lengthOK(number)) {
        return false;
    }

    return patternMatch(number);
}

function normalizeNumber(number) {
    return number.replace(/[^\d]*/g, "");
}

if (typeof phoneData !== "object") {
    fetch("/metadata.min.json").then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {
            phoneData = new Metadata(data);
            numberingPlan = phoneData.selectNumberingPlan(1, "US");
            loadCompleted();
        }
    );
}

if (typeof countryData !== "object") {
    fetch("/countries.emoji.min.json").then(
        function (response) {
            return response.json();
        }
    ).then(
        function (data) {
            countryData = data;
            loadCompleted();
        }
    );
}

export {afterLoad, normalizeNumber, validateNumber, numberingPlan, countryData};
