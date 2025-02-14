document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("view-books").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "<h3>Displaying Available Books...</h3>";
    });

    document.getElementById("issue-book").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "<h3>Issue a Book Section...</h3>";
    });

    document.getElementById("return-book").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "<h3>Return a Book Section...</h3>";
    });

    document.getElementById("membership-info").addEventListener("click", function() {
        document.getElementById("content").innerHTML = "<h3>Membership Information...</h3>";
    });

    document.getElementById("logout").addEventListener("click", function() {
        alert("Logging out...");
        window.location.href = "login.html";
    });
});
