// Constants
const PAGE_LENGTH = 6; // Amount of items to show in a page. (Not used)
const PAGE_BUTTON_MAX = 5;

/**
 * Shows the list of products
 * @param {Array[product]} productsList
 */
function showProducts(productsList) {
    productsList = productsList || []
    const container = document.getElementById("products-list");

    if (productsList.length === 0) {
        container.innerHTML = "<br><p>No products were found.</p>"
        return;
    }


    container.innerHTML = `
            <h2 class="category-title">All Products</h2>
            <div class="product-grid">
                ${productsList
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

    if (productsList.length < PAGE_LENGTH) {
        container.innerHTML += "<br><p>No More Products to Show.</p>";
    }
}

/**
 * Creates the navigation buttons seen at the bottom of the page.
 * @param {number} current - Current page
 * @param {Array[number]} pages - Array of numbers representing which page numbers should be shown.
 */
function createNavigation(current, pages) {
    const container = document.getElementById("pagination-controls");

    container.innerHTML = `
        <button class="pagination-button" value="0" onclick="prevPage()">←</button>
        <ul>
            ${pages.map(
                (page) => `
                <li class="pagination-button${(page===current) ? " active" : ""}" onclick="navigate(${page})">${page}</li>
                `).join("")}
        </ul>
        <button class="pagination-button" value="next" onclick="nextPage()">→</button>
    `
}


// Main

let currentPage = 0;


function navigate(page) {
    // Precondition: Don't do anything if already on the correct page
    if (page === currentPage) {
        return;
    }

    // Precondition: Ensure requested page isn't negative or 0.
    if (page < 1) {
        return;
    }


    const allProducts = JSON.parse(localStorage.getItem("products")) || [];

    // condition: Check if page number is beyond the range.
    let lastPage = Math.ceil(allProducts.length / PAGE_LENGTH);
    if (page > lastPage) {
        return;
    }

    console.debug(`Navigating to page: ${page}`)
    currentPage = page;

    


    // Create an array that contains the products of the relevant page.
    let start = (page-1) * PAGE_LENGTH;
    let end = page * PAGE_LENGTH;
    let productsList = allProducts.slice(start, end);

    showProducts(productsList)


    // Create an array that contains the numbers we want to show as buttons 
    // TODO: Fix Algorithm not always taking full advantage of button max
    
    let buttons = [];
    let i = page - Math.floor(PAGE_BUTTON_MAX/2);
    while (buttons.length < PAGE_BUTTON_MAX & i <= lastPage) {
        if (i > 0) {
            buttons.push(i)
        }
        i++;
    }

    createNavigation(currentPage, buttons)
}

function nextPage() {
    navigate(currentPage+1);
}

function prevPage() {
    navigate(currentPage-1);
}

navigate(1);