function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("form").addEventListener("submit", function (event) {
    const emailInput = document.getElementById("emailInput");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    if (!isValidEmail(emailInput.value)) {
        event.preventDefault();
        emailInput.classList.add("input-invalid");
        errorMsg.classList.add("error-msg-reveal");

        setTimeout(() => {
            emailInput.classList.remove("input-invalid");
            errorMsg.classList.remove("error-msg-reveal");
        }, 3000);
    } else {
        event.preventDefault();
        successMsg.classList.add("success-message-reveal");
        emailInput.value = "";

        setTimeout(() => {
            successMsg.classList.remove("success-message-reveal");
        }, 2000);
    }
});
