function processPayment() {
  const name = document.getElementById("cardName").value.trim();
  const number = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value.trim();

  // Basic validation
  if (name.length < 3) {
    alert("Enter a valid cardholder name");
    return;
  }

  if (!/^\d{16}$/.test(number)) {
    alert("Card number must be 16 digits");
    return;
  }

  if (!expiry) {
    alert("Select a valid expiry date");
    return;
  }

  if (!/^\d{3}$/.test(cvv)) {
    alert("CVV must be 3 digits");
    return;
  }

  alert("Payment Successful!");
  window.location.href = "index.html";
}

function getCartSubtotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  let subtotal = 0;

  cart.forEach((id) => {
    const product = products.find((p) => p.id === id);
    if (product) subtotal += product.price;
  });

  return subtotal;
}

function loadPaymentSummary() {
  const subtotal = getCartSubtotal();

  const deliveryCharge = 14.99; // Flat delivery fee
  const taxRate = 0.13; // 13% tax
  const taxes = subtotal * taxRate;

  const grandTotal = subtotal + deliveryCharge + taxes;

  document.getElementById("subtotal").value = "$" + subtotal.toFixed(2);
  document.getElementById("delivery").value = "$" + deliveryCharge.toFixed(2);
  document.getElementById("taxes").value = "$" + taxes.toFixed(2);
  document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
}

loadPaymentSummary();
