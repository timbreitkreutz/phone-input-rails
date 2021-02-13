let onChange;

function attach(tag) {
    "use strict";
    function toCamelCase(string) {
        console.log("B");
        console.log(string);
        return string.split("-").map(function (word, ii) {
            if (ii === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join("");
    }

    function validate(number) {
        return /^\(?([0-9]{3})\)?[\-.\u0020]?([0-9]{3})[\-.\u0020]?([0-9]{4})$/.test(number);
    }

    function normalize(number) {
        return number.replace(/[^\d]*/g, "");
    }

    console.log("C");
    console.log(tag);
    const camelCaseTag = toCamelCase(tag);
    let components = [];

    onChange = function (listener) {
        console.log("E");
        components.forEach(function (component) {
            console.log("F");
            console.log(component);
            const element = component.element;

            element.addEventListener(
                "change",
                function (event) {
                    console.log("D");
                    const valid = validate(element.value);
                    const normalized = normalize(element.value);
                    listener(event, component.id, element, valid, normalized);
                    window.el2 = element;
                }
            );
        });
    };

    document.querySelectorAll(`[data-${tag}]`).forEach(function (element) {
        console.log("A");
        console.log(element.dataset);
        console.log(camelCaseTag);
        const id = element.dataset[camelCaseTag];
        element.placeholder = `${id}/${tag}`;
        window.el = element;

        components.push({
            id,
            element
        });
        if (element.dataset[`${camelCaseTag}Normalized`] === "squash") {
            element.addEventListener(
                "change",
                function () {
                    element.value = normalize(element.value);
                }
            );
        }
    });
}

const version = "0.0.1";

export {attach, onChange, version};