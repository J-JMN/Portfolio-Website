document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("greetings");
    const nameInput = document.getElementById("name");
    const commentInput = document.querySelector("input[placeholder='Leave a comment']");
    const emailInput = document.querySelector("input[type='email']");
    const phoneInput = document.querySelector("input[type='tel']");
    const websiteInput = document.querySelector("input[type='url']");
    const confirmationMessage = document.getElementById("confirmation-message");
    const userNameDisplay = document.getElementById("user-name");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            confirmationMessage.style.display = "block";
            const name = nameInput.value.trim();
            userNameDisplay.textContent = `Hello ${name}, your form has been successfully submitted :)`;

            form.reset();
        }
    });

    function validateForm() {
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const website = websiteInput.value.trim();

        let valid = true;

        if (!/^[A-Za-z\s]+$/.test(name)) {
            alert("Please enter a valid name (letters and spaces only).");
            valid = false;
        }

        if (comment && /[^A-Za-z0-9\s.,!?]/.test(comment)) {
            alert("Please avoid special characters in your comment.");
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        if (phone && !/^\+?[0-9\s-]+$/.test(phone)) {
            alert("Please enter a valid phone number.");
            valid = false;
        }

        if (website && !/^https?:\/\/[^\s]+$/.test(website)) {
            alert("Please enter a valid website URL.");
            valid = false;
        }

        return valid;
    }
});