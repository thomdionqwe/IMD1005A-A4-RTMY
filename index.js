function loadProductsToIndex() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const grid = document.getElementById("productGrid");

  if (!grid) return;

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
            ${"★".repeat(Math.round(product.rating))}${"☆".repeat(5 - Math.round(product.rating))}
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

  if (!container) return;

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
                    ${"★".repeat(Math.round(product.rating))}${"☆".repeat(5 - Math.round(product.rating))}
                  </div>

                  <p class="product-price">$${product.price.toFixed(2)}</p>

                  <p class="product-dimensions">${product.dimensions}</p>

                  <button class="add-cart-btn" onclick="addToCart('${product.id}')">
                    Add to Cart
                  </button>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  });
}

function showWelcomeUser() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const welcomeEl = document.getElementById("welcomeUser");

  if (user && welcomeEl) {
    welcomeEl.textContent = `Welcome, ${user.fullname}!`;
  }
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function renderHeroDealCard() {
  const dealCard = document.getElementById("heroDealCard");
  if (!dealCard) return;

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const dealProducts = products.filter((product) => product.onSale);

  if (dealProducts.length === 0) return;

  const featuredDeal = getRandomItem(dealProducts);

  dealCard.innerHTML = `
    <a href="products.html" class="hero-deal-card-link">
      <div class="hero-deal-card-image-wrap">
        <img
          src="${featuredDeal.featuredImage || featuredDeal.thumbnailImage}"
          alt="${featuredDeal.name}"
          class="hero-deal-card-image"
        >
        <img
          src="images/ui/icons/sale.png"
          alt="On sale"
          class="hero-deal-card-sale-badge"
        >
      </div>

      <div class="hero-deal-card-details">
        <h3 class="hero-deal-card-name">${featuredDeal.name}</h3>
        <p class="hero-deal-card-price">$${featuredDeal.price.toFixed(2)}</p>
      </div>
    </a>
  `;
}

function renderHeroTrendingItems() {
  const trendingRow = document.getElementById("heroTrendingRow");
  if (!trendingRow) return;

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const featuredProducts = products.filter((product) => product.featured);

  if (featuredProducts.length === 0) return;

  const trendingItems = getRandomItems(featuredProducts, 3);

  trendingRow.innerHTML = trendingItems
    .map(
      (product) => `
        <a href="products.html" class="hero-trending-card">
          <div class="hero-trending-card-image-wrap">
            <img
              src="${product.featuredImage || product.thumbnailImage}"
              alt="${product.name}"
            >
          </div>
          <h3 class="hero-trending-card-name">${product.name}</h3>
        </a>
      `
    )
    .join("");
}

function initializeHeroCarousel() {
  const carousel = document.querySelector(".hero-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".hero-carousel-track");
  const slides = carousel.querySelectorAll(".hero-slide");
  const dots = carousel.querySelectorAll(".hero-carousel-dot");
  const prevBtn = carousel.querySelector(".hero-carousel-arrow--left");
  const nextBtn = carousel.querySelector(".hero-carousel-arrow--right");

  let currentIndex = 0;
  let autoSlideInterval = null;
  const autoSlideDelay = 5000;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 25}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  function restartAutoSlide() {
    startAutoSlide();
  }

  prevBtn.addEventListener("click", function () {
    prevSlide();
    restartAutoSlide();
  });

  nextBtn.addEventListener("click", function () {
    nextSlide();
    restartAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentIndex = index;
      updateCarousel();
      restartAutoSlide();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  //Added swipe functionality to the carousel
  let startX = 0;
  let endX = 0;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;

    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      restartAutoSlide();
    }
  });

  updateCarousel();
  startAutoSlide();
}

loadProductsByMainCategories();
showWelcomeUser();
renderHeroDealCard();
renderHeroTrendingItems();
initializeHeroCarousel();