document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const cartButtons = document.querySelectorAll(".cart-btn");
    const dropdownIcons = document.querySelectorAll(".dropdown-icon");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to checkout...");
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Added to cart!");
        });
    });

    dropdownIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
});


//fade transition
