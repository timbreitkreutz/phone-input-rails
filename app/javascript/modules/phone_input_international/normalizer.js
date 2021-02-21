/*jslint
 browser
*/

function normalizer(handle, options) {
    if (options.normalizer === "squash") {
        handle.element.addEventListener(
            "change",
            function () {
                handle.element.value = handle.normalized();
            }
        );
    }
}

export {normalizer};