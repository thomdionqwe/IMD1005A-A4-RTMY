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

// loadProductsByMainCategories();

function showWelcomeUser() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const welcomeEl = document.getElementById("welcomeUser");

  if (user && welcomeEl) {
    welcomeEl.textContent = `Welcome, ${user.fullname}!`;
  }
}

showWelcomeUser();

function getRandomItem(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function renderHeroProductCard(product, slotId, options = {}) {
  const slot = document.getElementById(slotId);
  if (!slot) return;

  if (!product) {
    slot.innerHTML = `
      <div class="hero-card-preview">
        <div class="hero-card-preview-body">
          <h3>No product available</h3>
          <p>Please add matching products to see this hero card.</p>
        </div>
      </div>
    `;
    return;
  }

  const { showSaleBadge = false, cardAltPrefix = "Product" } = options;

  const safeDimensions = product.dimensions || "Dimensions not available";
  const productPrice =
    typeof product.price === "number" ? `$${product.price.toFixed(2)}` : "";

  slot.innerHTML = `
    <div class="hero-card-preview">
      <div class="hero-card-preview-image hero-card-preview-badge-wrap">
        ${
          showSaleBadge
            ? `<img src="images/ui/icons/sale.png" alt="" class="hero-card-sale-badge">`
            : ""
        }
        <img src="${product.thumbnailImage}" alt="${cardAltPrefix}: ${product.name}">
      </div>

      <div class="hero-card-preview-body">
        <h3>${product.name}</h3>
        <p>${productPrice}</p>
        <p>${safeDimensions}</p>
      </div>
    </div>
  `;
}

function populateHeroProductSlides() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const dealProducts = products.filter((product) => {
    return product.onSale === true || product.sale === true;
  });

  const featuredProducts = products.filter((product) => {
    return product.featured === true;
  });

  const randomDealProduct = getRandomItem(dealProducts);
  const randomFeaturedProduct = getRandomItem(featuredProducts);

  renderHeroProductCard(randomDealProduct, "heroDealSlot", {
    showSaleBadge: true,
    cardAltPrefix: "Deal item",
  });

  renderHeroProductCard(randomFeaturedProduct, "heroTrendingSlot", {
    showSaleBadge: false,
    cardAltPrefix: "Trending item",
  });
}

populateHeroProductSlides();

function initHeroCarousel() {
  const hero = document.querySelector(".home-hero");
  const slides = document.getElementById("heroSlides");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  const dots = document.querySelectorAll(".hero-dot");

  if (!hero || !slides || !prevBtn || !nextBtn || dots.length === 0) return;

  let currentSlide = 0;
  const totalSlides = dots.length;
  const autoplayDelay = 5000;
  let autoplayInterval = null;

  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  const swipeThreshold = 50;
  const verticalTolerance = 80;

  function updateHeroCarousel() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    updateHeroCarousel();
  }

  function goToNextSlide() {
    goToSlide(currentSlide + 1);
  }

  function goToPrevSlide() {
    goToSlide(currentSlide - 1);
  }

  function stopAutoplay() {
    if (autoplayInterval !== null) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      goToNextSlide();
    }, autoplayDelay);
  }

  function resetAutoplay() {
    startAutoplay();
  }

  function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) < swipeThreshold) return;
    if (Math.abs(deltaY) > verticalTolerance) return;

    if (deltaX < 0) {
      goToNextSlide();
      resetAutoplay();
    } else {
      goToPrevSlide();
      resetAutoplay();
    }
  }

  prevBtn.addEventListener("click", () => {
    goToPrevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    goToNextSlide();
    resetAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.dataset.slide, 10);
      goToSlide(slideIndex);
      resetAutoplay();
    });
  });

  hero.addEventListener(
    "touchstart",
    (event) => {
      const firstTouch = event.changedTouches[0];
      touchStartX = firstTouch.clientX;
      touchStartY = firstTouch.clientY;
      touchEndX = firstTouch.clientX;
      touchEndY = firstTouch.clientY;
    },
    { passive: true },
  );

  hero.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.changedTouches[0];
      touchEndX = touch.clientX;
      touchEndY = touch.clientY;
    },
    { passive: true },
  );

  hero.addEventListener(
    "touchend",
    (event) => {
      const lastTouch = event.changedTouches[0];
      touchEndX = lastTouch.clientX;
      touchEndY = lastTouch.clientY;
      handleSwipeGesture();
    },
    { passive: true },
  );

  updateHeroCarousel();
  startAutoplay();
}

initHeroCarousel();

// console.log(JSON.parse(localStorage.getItem("products")));
