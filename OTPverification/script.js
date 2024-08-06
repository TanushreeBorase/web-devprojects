const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            prevInput = input.previousElementSibling;

        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }

        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if (e.key === "Backspace") {
            inputs.forEach((input, index2) => {
                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                }
            });
        }

        if (!inputs[3].disabled && inputs[3].value !== "") {
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    });
});

button.addEventListener("click", () => {
    const otp = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value;
    if (otp === "1234") {
        alert("OTP verified successfully!");
    } else {
        alert("OTP verification failed. Please try again.");
    }
});

window.addEventListener("load", () => inputs[0].focus());
