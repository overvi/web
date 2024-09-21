document.addEventListener("DOMContentLoaded", function () {
    var next = document.getElementById("next-step");
    var prev = document.getElementById("prev-step");
    var stepperEl = document.querySelector(".bs-stepper");
    var stepper = new Stepper(stepperEl);
    next.addEventListener("click", function () {
        stepper.next();
    });
    prev === null || prev === void 0 ? void 0 : prev.addEventListener("click", function () {
        stepper.previous();
    });
    stepperEl.addEventListener("show.bs-stepper", function (ev) {
        var stepperEvent = ev;
        if (stepperEvent.detail.indexStep === 2) {
            next.classList.remove("bg-orange-400");
            next.classList.add("bg-green-600");
            next.textContent = "ثبت"; // "Submit" in Persian
        }
        else {
            next.classList.add("bg-orange-400");
            next.classList.remove("bg-green-600");
            next.textContent = "بعدی"; // "Next" in Persian
        }
    });
});
//# sourceMappingURL=request-demo.js.map