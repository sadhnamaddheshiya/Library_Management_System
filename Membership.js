document.addEventListener("DOMContentLoaded", function() {
    const membershipForm = document.getElementById("membership-form");
    const messageDiv = document.getElementById("message");

    membershipForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const membershipType = document.getElementById("membership-type").value;

        if (name && email) {
            messageDiv.innerHTML = `<p>Thank you, ${name}! You have successfully registered for a ${membershipType} membership.</p>`;
            messageDiv.style.color = "green";
            membershipForm.reset();
        } else {
            messageDiv.innerHTML = "<p>Please fill in all fields.</p>";
            messageDiv.style.color = "red";
        }
    });
});
