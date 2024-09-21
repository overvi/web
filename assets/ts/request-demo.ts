interface StepperDetail {
  indexStep: number;
}

interface StepperEvent extends CustomEvent {
  detail: StepperDetail;
}

document.addEventListener("DOMContentLoaded", function () {
  const next = document.getElementById("next-step")!;
  const prev = document.getElementById("prev-step");
  const stepperEl = document.querySelector(".bs-stepper")!;

  var stepper = new Stepper(stepperEl);

  next.addEventListener("click", () => {
    stepper.next();
  });
  prev?.addEventListener("click", () => {
    stepper.previous();
  });

  stepperEl.addEventListener("show.bs-stepper", (ev) => {
    const stepperEvent = ev as StepperEvent;
    if (stepperEvent.detail.indexStep === 2) {
      next.classList.remove("bg-orange-400");
      next.classList.add("bg-green-600");
      next.textContent = "ثبت"; // "Submit" in Persian
    } else {
      next.classList.add("bg-orange-400");
      next.classList.remove("bg-green-600");
      next.textContent = "بعدی"; // "Next" in Persian
    }
  });
});
