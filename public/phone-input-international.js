function attach(tags) {
    "use strict";
    function toCamelCase(string) {
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

    tags.forEach(function (tag) {
        const camelCaseTag = toCamelCase(tag);
        let components = [];

        window[`${camelCaseTag}OnChange`] = function (listener) {
            components.forEach(function (component) {
                const element = component.element;

                element.addEventListener(
                    "change",
                    function (event) {
                        const valid = validate(element.value);
                        const normalized = normalize(element.value);
                        listener(event, component.id, element, valid, normalized);
                        window.el2 = element;
                    }
                );
            });
        };

        document.querySelectorAll(`[data-${tag}]`).forEach(function (element) {
            const id = element.dataset[camelCaseTag];
            element.placeholder = `${tag} ${id}`;
            window.el = element;

            components.push({
                id,
                element
            });
            if (element.dataset[`${camelCaseTag}Normalized`] === "squash") {
                element.addEventListener(
                    "change",
                    function (event) {
                        element.value = normalize(element.value);
                    }
                );
            }
        });
    });
};

const version = "0.0.1";

export { version, attach };



// function phoneUpdate(id, element, valid, normalized) {
//     document.getElementById(id).textContent = `${element.value}/${normalized} valid: ${valid}`;
//     let formData = [];
//     window.phoneform.querySelectorAll("input").forEach(function(input) {
//         const dataSet = input.dataset.phoneInput || input.dataset.telephoneInput;
//         formData.push(`${dataSet}: ${input.value}`);
//     });
//     window.formdata.innerHTML = formData.join("<br>");
// }

// window.phoneInputOnChange(function (event, id, element, valid, normalized) {
//     phoneUpdate(id, element, valid, normalized);
// });
// window.telephoneInputOnChange(function (event, id, element, valid, normalized) {
//     phoneUpdate(id, element, valid, normalized);
// });
