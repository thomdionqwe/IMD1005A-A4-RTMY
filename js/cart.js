function initializeCart() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

initializeCart();

function saveCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  localStorage.setItem("cartCount", cart.length);
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Prevent duplicates (optional)
  if (!cart.includes(productId)) {
    cart.push(productId);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  saveCartCount();
  //   alert("Item added to cart!");
}

//addToCart("table-1");
//addToCart("table-3");
//addToCart("table-5");
//addToCart("shelf-1");
//addToCart("shelf-1");

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((id) => id !== productId);

  localStorage.setItem("cart", JSON.stringify(cart));
  saveCartCount();
  loadCart(); // refresh
}

function getProductById(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  return products.find((p) => p.id === id);
}

function getCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return cart.map((id) => products.find((p) => p.id === id));
}

function getCartSubtotal() {
  const items = getCartItems();
  return items.reduce((sum, item) => sum + item.price, 0);
}

function loadCart() {
  const cartContainer = document.getElementById("cartItems");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const products = JSON.parse(localStorage.getItem("products")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
    document.getElementById("cartSubtotal").textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  cart.forEach((id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    subtotal += product.price;

    cartContainer.innerHTML += `
            <div class="cart-item-card">
                <img src="${product.thumbnailImage}" class="cart-item-img">

                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <p class="cart-price">$${product.price.toFixed(2)}</p>
                </div>

                <button class="remove-btn" onclick="removeFromCart('${id}')">
                    <span class="remove-text">Remove</span>
                </button>
            </div>
        `;
  });

  document.getElementById("cartSubtotal").textContent =
    "$" + subtotal.toFixed(2);
}

function goToCheckout() {
  window.location.href = "payment.html";
}

loadCart();
saveCartCount();

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  const count = localStorage.getItem("cartCount") || 0;

  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

updateCartBadge();
