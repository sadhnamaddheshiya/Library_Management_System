document.addEventListener("DOMContentLoaded", function() {
    const issueBookForm = document.getElementById("issue-book-form");

    issueBookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const bookId = document.getElementById("book-id").value;
        const userId = document.getElementById("user-id").value;
        const issueDate = document.getElementById("issue-date").value;
        
        if (bookId && userId && issueDate) {
            alert(`Book with ID ${bookId} issued to User ${userId} on ${issueDate}.`);
            issueBookForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
