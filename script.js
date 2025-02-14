document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const content = document.getElementById("content");
            content.innerHTML = `<h2>Loading ${this.innerText}...</h2>`;
            
            setTimeout(() => {
                content.innerHTML = `<h2>Welcome to ${this.innerText}</h2>`;
            }, 1000);
        });
    });
});
