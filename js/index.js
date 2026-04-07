function loadProductsToIndex() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const grid = document.getElementById("productGrid");

  grid.innerHTML = "";

  products.forEach((product) => {
    grid.innerHTML += `
            <div class="product-card">
                <div class="product-img-box">
                    <img src="${product.thumbnailImage}" alt="${product.name}">
                </div>

                <div class="product-info">
                    <h3>${product.name}</h3>

                    <div class="product-rating">
                        ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
                    </div>

                    <p class="product-price">$${product.price.toFixed(2)}</p>

                    <p class="product-dimensions">
                        ${product.dimensions || "Dimensions not available"}
                    </p>

                    <button class="btn add-cart-btn" onclick="addToCart('${product.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
  });
}

// loadProductsToIndex();

function loadProductsByMainCategories() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const container = document.getElementById("categorySections");

  const categories = {
    Tables: products.filter((p) => p.category === "table"),
    Shelves: products.filter((p) => p.category === "shelf"),
    Accessories: products.filter((p) => p.category === "accessory"),
  };

  container.innerHTML = "";

  Object.keys(categories).forEach((categoryName) => {
    const items = categories[categoryName];

    if (items.length === 0) return;

    container.innerHTML += `
            <h2 class="category-title">${categoryName}</h2>
            <div class="product-grid">
                ${items
                  .map(
                    (product) => `
                    <div class="product-card">
                        <div class="product-img-box">
                            <img src="${product.thumbnailImage}" alt="${product.name}">
                        </div>

                        <div class="product-info">
                            <h3>${product.name}</h3>

                            <div class="product-rating">
                                ${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}
                            </div>

                            <p class="product-price">$${product.price.toFixed(2)}</p>

                            <p class="product-dimensions">${product.dimensions}</p>

                            <button class="add-cart-btn" onclick="addToCart('${product.id}')">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `;
  });
}

loadProductsByMainCategories();

console.log(JSON.parse(localStorage.getItem("products")));
