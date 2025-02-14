document.addEventListener("DOMContentLoaded", function() {
    const books = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: "Yes" },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", available: "No" },
        { id: 3, title: "1984", author: "George Orwell", available: "Yes" },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: "Yes" }
    ];

    const bookList = document.getElementById("book-list");
    
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.available}</td>
        `;
        bookList.appendChild(row);
    });
});
