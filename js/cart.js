document.addEventListener("DOMContentLoaded", function () {
    const decreaseButtons = document.querySelectorAll(".decrease");
    const increaseButtons = document.querySelectorAll(".increase");
    const removeButtons = document.querySelectorAll(".remove-btn");

    function updateCartTotals() {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector("p").innerText.replace("₹", ""));
            const quantity = parseInt(item.querySelector("input").value);
            subtotal += price * quantity;
        });

        const tax = subtotal * 0.05;
        const total = subtotal + tax;

        document.getElementById("subtotal").innerText = `₹${subtotal.toFixed(2)}`;
        document.getElementById("tax").innerText = `₹${tax.toFixed(2)}`;
        document.getElementById("total").innerText = `₹${total.toFixed(2)}`;
    }

    decreaseButtons.forEach(btn => btn.addEventListener("click", function () {
        let input = this.nextElementSibling;
        if (input.value > 1) input.value--;
        updateCartTotals();
    }));

    increaseButtons.forEach(btn => btn.addEventListener("click", function () {
        let input = this.previousElementSibling;
        input.value++;
        updateCartTotals();
    }));

    removeButtons.forEach(btn => btn.addEventListener("click", function () {
        this.closest(".cart-item").remove();
        updateCartTotals();
    }));

    updateCartTotals();
});
