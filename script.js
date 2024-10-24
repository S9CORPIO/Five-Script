let cartTotal = 0;

function addToCart(price) {
    cartTotal += price;
    document.getElementById("cart-total").innerText = "$" + cartTotal;
}

function checkout() {
    if (cartTotal > 0) {
        alert("Plata a fost efectuată cu succes!");
        cartTotal = 0;
        document.getElementById("cart-total").innerText = "$0";
    } else {
        alert("Coșul este gol.");
    }
}
