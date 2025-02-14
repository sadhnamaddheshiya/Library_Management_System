document.addEventListener("DOMContentLoaded", function() {
    const returnForm = document.getElementById("return-book-form");
    const fineInfo = document.getElementById("fine-info");

    returnForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const bookId = document.getElementById("book-id").value;
        const returnDate = new Date(document.getElementById("return-date").value);
        const dueDate = new Date("2025-02-10"); // Example due date

        let fine = 0;
        if (returnDate > dueDate) {
            const lateDays = Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24));
            fine = lateDays * 10; // Example fine: 10 per day late
        }

        if (fine > 0) {
            fineInfo.innerHTML = `<p>You have a late fine of ₹${fine}. Please pay before borrowing another book.</p>`;
        } else {
            fineInfo.innerHTML = `<p>Book returned successfully! No fine.</p>`;
        }
    });
});