
console.log("navigation.js loaded");
/* add prodcut icon logic  */
const addProductLink = document.querySelector("#add-product-link");
const loginLink = document.querySelector("#login-link");

const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (addProductLink) addProductLink.classList.add("hidden");
console.log("before logic:", addProductLink?.className);
console.log("user at nav:", user);

if (!user) 
  {
    // NOT logged in
    if (loginLink) loginLink.classList.remove("hidden");
    if (addProductLink) addProductLink.classList.add("hidden");

} 
else 
{
    // logged in → hide login
    if (loginLink) loginLink.classList.add("hidden");

    // show add product ONLY if business
  if (user.type === "business") {
      if (addProductLink) {
          addProductLink.classList.remove("hidden");
          console.log("after business logic:", addProductLink.className);
      }
  } else {
      if (addProductLink) addProductLink.classList.add("hidden");
  }

}

/* -------------------------------------------------------------- */
/*                      mobile behaviour                          */
/* -------------------------------------------------------------- */

/* handling generating mobile hamburger menu */
const products = JSON.parse(localStorage.getItem("products")) || [];
const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");
/* --------------------------------------------------------------   */


/* helper functions to make the menus sticky  */
function disableScroll() 
{
  document.body.style.overflow = "hidden";
}

function enableScroll() 
{
  document.body.style.overflow = "";
}


/* helper functions  openMobileMenu() : 
  shows the mobile menu and the overlay 
*/
function openMobileMenu() 
{
  if (!mobileMenu || !hamburgerBtn || !navOverlay) return;

  disableScroll();
  mobileMenu.classList.add("is-open");
  navOverlay.classList.add("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "true");
}

/* helper functions  closeMobileMenu(): 
  closes the mobile menu and the overlay 
*/
function closeMobileMenu() 
{
  if (!mobileMenu || !hamburgerBtn || !navOverlay) return;

  enableScroll();
  mobileMenu.classList.remove("is-open");
  navOverlay.classList.remove("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}


/* if the hamburger btn clicked : open  */
if (hamburgerBtn) 
{
  hamburgerBtn.addEventListener("click", function () 
  {
    closeAllDesktopPanels();
    openMobileMenu();
  });
}

/* if the X btn clicked : close  */
if (mobileCloseBtn) 
{
  mobileCloseBtn.addEventListener("click", function () 
  {
    closeMobileMenu();
  });
}
/* --------------------------------------------------------------   */

/* -------------------------------------------------------------- */
/*              dynamic menue panels rendering   :                */
/* -------------------------------------------------------------- */

/* getting hold of the all the nav list buttons  and their panels :
   we want to listen for a click on the button to show the and hide the panels 
 */

/* nav buttons selectors  */
const shopBtn = document.querySelector("#shop-btn");
const featuredBtn = document.querySelector("#featured-btn");
const dealsBtn = document.querySelector("#deals-btn");

/* accessibility : goona be use for accessibility */
const desktopNavButtons = [shopBtn, featuredBtn, dealsBtn];

/*  accessibility  */
/* to traverse the button with left and right arow  */
desktopNavButtons.forEach((button, index) =>
{
  button.addEventListener("keydown", function (event) 
  {
    let nextIndex = null;

    if (event.key === "ArrowRight") {
      nextIndex = index + 1;
    } else if (event.key === "ArrowLeft") {
      nextIndex = index - 1;
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      button.click();
      return;
    } else {
      return;
    }

    event.preventDefault();

    if (nextIndex < 0) {
      nextIndex = desktopNavButtons.length - 1;
    }

    if (nextIndex >= desktopNavButtons.length) {
      nextIndex = 0;
    }

    desktopNavButtons[nextIndex].focus();
  });
});

/* nav panels selectors  */
const shopPanel = document.querySelector("#shop-panel");
const featuredPanel = document.querySelector("#featured-panel");
const dealsPanel = document.querySelector("#deals-panel");

/* the over lay pops up whenever the user is on a panel */
const navOverlay = document.querySelector("#nav-overlay");

/* ----  */
/*  a shop button click open the shop panel and closes any other panel  */
shopBtn.addEventListener("click", function () {
  const isOpen = shopPanel.classList.contains("is-open");

  closeAllDesktopPanels();

  if (searchDropdown) {
    searchDropdown.hidden = true;
  }

  if (!isOpen) {
    openDesktopPanel(shopPanel, shopBtn);
  }
});

/* ----  */
/*  a featured button click open the featured panel and closes any other panel  */
featuredBtn.addEventListener("click", function () {
  const isOpen = featuredPanel.classList.contains("is-open");

  closeAllDesktopPanels();

  if (searchDropdown) {
    searchDropdown.hidden = true;
  }

  if (!isOpen) {
    openDesktopPanel(featuredPanel, featuredBtn);
  }
});

/* ----  */
/*  a deals button click open the deals panel and closes any other panel  */
dealsBtn.addEventListener("click", function () {
  const isOpen = dealsPanel.classList.contains("is-open");

  closeAllDesktopPanels();

  if (searchDropdown) {
    searchDropdown.hidden = true;
  }

  if (!isOpen) {
    openDesktopPanel(dealsPanel, dealsBtn);
  }
});

/* helper hunctions :   */
function openDesktopPanel(panel, button) {
  disableScroll();
  panel.classList.add("is-open");
  button.setAttribute("aria-expanded", "true");
  navOverlay.classList.add("is-open");
}

function closeDesktopPanel(panel, button) {
  enableScroll();
  panel.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
}

function closeAllDesktopPanels() {
  shopPanel.classList.remove("is-open");
  featuredPanel.classList.remove("is-open");
  dealsPanel.classList.remove("is-open");

  shopBtn.setAttribute("aria-expanded", "false");
  featuredBtn.setAttribute("aria-expanded", "false");
  dealsBtn.setAttribute("aria-expanded", "false");

  navOverlay.classList.remove("is-open");
  enableScroll();
}

/* ----  */
/* a click on the overlay clsoese all the panels and menues  */
navOverlay.addEventListener("click", function () {
  closeAllDesktopPanels(); // helper function
  closeMobileMenu();

  navButtons.forEach(function (button) {
    button.classList.remove("active");
  });
});
/* accessibility : escape button closes all panels  */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeAllDesktopPanels();
    closeMobileMenu();

    navButtons.forEach(function (button) {
      button.classList.remove("active");
    });
  }
});
/* -------------------------------------------------------------- */
/*     dynamic panel content rendering   :   featrued panel       */
/* -------------------------------------------------------------- */

/*  featured panel has two sections 
    1- a list of clickable tag buttons : 
      (every featured product has multiple tags) 
      this list show all the tags of all the featured product 
      so the user can search for feature prodcuts "by tag" 
    2- a list of featured products under the clicked tag
      ( by default the first tag is active)
getting all the tags of the features product and putting them in a list  
*/
/*    --------------------- tag list ---------------------------- */
/* 
  the tag lsit section needs these things :
    1- a tag list populated from our hard coded products list 
    2- rendering the tag list as button list and adding it to the DOM
    3- scrolling the tag buttons left and right
    4- this section needs to listen for clicked on every tag (delegation)
        and then renders the product list based on the tag that was bubbled up to the parnet

*/
/* we get the feature-tags element container & the product list container */
const featuredTagsContainer = document.querySelector(".featured-tags");
const featuredProductsContainer = document.querySelector(".featured-products");
/* 1 - step one : we populate our tag array form the a list of products   */
function getFeaturedTags(productsArray) {
  const allTags = [];

  for (const product of productsArray) {
    if (product.featured) {
      for (const tag of product.tags) {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    }
  }

  return allTags;
}

/* 2- step 2 : render the tag button list  */
function renderFeaturedTags(productsArray) {
  if (!featuredTagsContainer) return;

  const featuredTags = getFeaturedTags(productsArray);

  // to start form scratch every time
  clearElement(featuredTagsContainer);

  featuredTags.forEach((tag, index) => {
    // creating a tag button element for each tag in the list
    // and adding it to the DOM
    const tagBtn = document.createElement("button");
    tagBtn.type = "button";
    tagBtn.classList.add("featured-tag-btn");
    tagBtn.textContent = tag;
    tagBtn.dataset.tag = tag; // i wanna use it for event delegation

    // this is to make the first tag active
    // and by default the tags products are rendered
    if (index === 0) {
      tagBtn.classList.add("active");
      renderFeaturedProducts(productsArray, tag);
    }

    featuredTagsContainer.appendChild(tagBtn);
  });
}

renderFeaturedTags(products);

/* step 3 : implement scrolling  */
/* featured scrolling arrows  */
const featuredTagsTrack = document.querySelector(".featured-tags");
const featuredTagsArrowLeft = document.querySelector(
  ".featured-tags-arrow-left",
);
const featuredTagsArrowRight = document.querySelector(
  ".featured-tags-arrow-right",
);

/* AI assisted :  */
featuredTagsArrowLeft.addEventListener("click", function () {
  featuredTagsTrack.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

/* AI assisted :  */
featuredTagsArrowRight.addEventListener("click", function () {
  featuredTagsTrack.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});

/* step 4 : listening to click on each tag in the tag list */
featuredTagsContainer.addEventListener("click", function (event) {
  // so first we need to get the tag button that was clicked
  const clickedBtn = event.target.closest(".featured-tag-btn");

  if (!clickedBtn) return;

  // then we need to get all the other tags that weren't clicked
  const allTagButtons =
    featuredTagsContainer.querySelectorAll(".featured-tag-btn");
  // for each tag that was not clicked we set it to in active
  allTagButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // we set the clicked tag to active
  clickedBtn.classList.add("active");

  const selectedTag = clickedBtn.dataset.tag;
  renderFeaturedProducts(products, selectedTag);
});

/*    --------------------- tagged featured products  ---------------------------- */
// here we want to render the products under each tag

// 1- we need a function to collect all the product that have a specific tag
function getFeaturedProductsByTag(productsArray, selectedTag) {
  const matchingProducts = [];

  for (const product of productsArray) {
    if (product.featured && product.tags.includes(selectedTag)) {
      matchingProducts.push(product);
    }
  }

  return matchingProducts;
}

// 2- after we collect the tagged products we need to render them
function renderFeaturedProducts(productsArray, selectedTag) {
  if (!featuredProductsContainer) return;

  const matchingProducts = getFeaturedProductsByTag(productsArray, selectedTag);

  clearElement(featuredProductsContainer);

  for (const product of matchingProducts) {
    // create card
    const card = document.createElement("article");
    card.classList.add("featured-product-card");

    // create image
    const img = document.createElement("img");
    img.classList.add("featured-product-image");
    img.src = product.featuredImage;
    img.alt = product.name;

    // create title
    const title = document.createElement("h3");
    title.classList.add("featured-product-title");
    title.textContent = product.name;

    // create price
    const price = document.createElement("p");
    price.classList.add("featured-product-price");

    const [dollars, decimals] = product.price.toFixed(2).split(".");

    const dollarSign = document.createElement("span");
    dollarSign.classList.add("price-currency");
    dollarSign.textContent = "$";

    const mainAmount = document.createElement("span");
    mainAmount.classList.add("price-main");
    mainAmount.textContent = dollars;

    const decimalAmount = document.createElement("span");
    decimalAmount.classList.add("price-decimal");
    decimalAmount.textContent = `.${decimals}`;

    price.appendChild(dollarSign);
    price.appendChild(mainAmount);
    price.appendChild(decimalAmount);

    // assemble card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    // add to container
    featuredProductsContainer.appendChild(card);
  }
}

// helper function to clear an element
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/* activating the nav links i forgot to do that  */

const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // remove active from all
    navButtons.forEach((b) => b.classList.remove("active"));

    // activate clicked one
    btn.classList.add("active");
  });
});

navOverlay.addEventListener("click", () => {
  navButtons.forEach((b) => b.classList.remove("active"));
});

/* keyboard navigation  : accessibility */
/* right arrow moves focus to next tag
   left arrow moves focus to prev tag 
   enter or space activates that tag  
   
   */
featuredTagsContainer.addEventListener("keydown", function (event) {
  const currentBtn = event.target.closest(".featured-tag-btn");
  if (!currentBtn) return;

  const allButtons = Array.from(
    featuredTagsContainer.querySelectorAll(".featured-tag-btn"),
  );

  const currentIndex = allButtons.indexOf(currentBtn);

  let nextIndex = null;

  if (event.key === "ArrowRight") {
    nextIndex = currentIndex + 1;
  }

  if (event.key === "ArrowLeft") {
    nextIndex = currentIndex - 1;
  }

  if (nextIndex !== null) {
    event.preventDefault();

    if (nextIndex < 0) nextIndex = allButtons.length - 1;
    if (nextIndex >= allButtons.length) nextIndex = 0;

    allButtons[nextIndex].focus();
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    currentBtn.click();
  }
});

/* -------------------------------------------------------------- */
/*     dynamic panel content rendering   :   DEALS panel          */
/* -------------------------------------------------------------- */

/*                                                                 

          identical logic to featured panel 
          we jsut change the names from featured to deals
          AI  assisted : 
          asked AI to repeate my previous logic forthe featured elements 
          and replace it for with deals elements 


*/

// dealse sselectors
const dealsTagsContainer = document.querySelector(".deals-tags");
const dealsProductsContainer = document.querySelector(".deals-products");

// get tags from on sale products
function getDealsTags(productsArray) {
  const allTags = [];

  for (const product of productsArray) {
    if (product.onSale) {
      for (const tag of product.tags) {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      }
    }
  }

  return allTags;
}

// redner the deals tags
function renderDealsTags(productsArray) {
  if (!dealsTagsContainer) return;

  const dealsTags = getDealsTags(productsArray);

  clearElement(dealsTagsContainer);

  dealsTags.forEach((tag, index) => {
    const tagBtn = document.createElement("button");
    tagBtn.type = "button";
    tagBtn.classList.add("deals-tag-btn");
    tagBtn.textContent = tag;
    tagBtn.dataset.tag = tag;

    if (index === 0) {
      tagBtn.classList.add("active");
    }

    dealsTagsContainer.appendChild(tagBtn);
  });

  if (dealsTags.length > 0) {
    renderDealsProducts(productsArray, dealsTags[0]);
  }
}

// event delegartion on click
if (dealsTagsContainer) {
  dealsTagsContainer.addEventListener("click", function (event) {
    const clickedBtn = event.target.closest(".deals-tag-btn");

    if (!clickedBtn) return;

    const allButtons = dealsTagsContainer.querySelectorAll(".deals-tag-btn");

    allButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    clickedBtn.classList.add("active");

    const selectedTag = clickedBtn.dataset.tag;
    renderDealsProducts(products, selectedTag);
  });
}

/* new : the sale bade logic: 
    created an element for the badge in DOM 
    
*/

function renderDealsProducts(productsArray, selectedTag) {
  if (!dealsProductsContainer) return;

  const matchingProducts = [];

  for (const product of productsArray) {
    if (product.onSale && product.tags.includes(selectedTag)) {
      matchingProducts.push(product);
    }
  }

  clearElement(dealsProductsContainer);

  for (const product of matchingProducts) {
    const card = document.createElement("article");
    card.classList.add("deals-product-card");

    // image wrapper
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("deals-product-image-wrapper");

    // image
    const img = document.createElement("img");
    img.classList.add("deals-product-image");
    img.src = product.featuredImage;
    img.alt = product.name;

    //badge
    const badge = document.createElement("img");
    badge.classList.add("deals-sale-badge");
    badge.src = "images/ui/icons/sale.png";
    badge.alt = "On sale";

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(badge);

    // title
    const title = document.createElement("h3");
    title.classList.add("deals-product-title");
    title.textContent = product.name;

    // price
    const price = document.createElement("p");
    price.classList.add("deals-product-price");

    const [dollars, decimals] = product.price.toFixed(2).split(".");

    const currency = document.createElement("span");
    currency.classList.add("price-currency");
    currency.textContent = "$";

    const main = document.createElement("span");
    main.classList.add("price-main");
    main.textContent = dollars;

    const decimal = document.createElement("span");
    decimal.classList.add("price-decimal");
    decimal.textContent = `.${decimals}`;

    price.appendChild(currency);
    price.appendChild(main);
    price.appendChild(decimal);

    // assemble
    card.appendChild(imgWrapper);
    card.appendChild(title);
    card.appendChild(price);

    dealsProductsContainer.appendChild(card);
  }
}

renderDealsTags(products);

/* arrow logic */
const dealsTagsTrack = document.querySelector(".deals-tags");
const dealsTagsArrowLeft = document.querySelector(".deals-tags-arrow-left");
const dealsTagsArrowRight = document.querySelector(".deals-tags-arrow-right");

if (dealsTagsArrowLeft && dealsTagsTrack) {
  dealsTagsArrowLeft.addEventListener("click", function () {
    dealsTagsTrack.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });
}

if (dealsTagsArrowRight && dealsTagsTrack) {
  dealsTagsArrowRight.addEventListener("click", function () {
    dealsTagsTrack.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });
}

/* keyboard navigation : accessibility  */
dealsTagsContainer.addEventListener("keydown", function (event) {
  const currentBtn = event.target.closest(".deals-tag-btn");
  if (!currentBtn) return;

  const allButtons = Array.from(
    dealsTagsContainer.querySelectorAll(".deals-tag-btn"),
  );

  const currentIndex = allButtons.indexOf(currentBtn);

  let nextIndex = null;

  if (event.key === "ArrowRight") nextIndex = currentIndex + 1;
  if (event.key === "ArrowLeft") nextIndex = currentIndex - 1;

  if (nextIndex !== null) {
    event.preventDefault();

    if (nextIndex < 0) nextIndex = allButtons.length - 1;
    if (nextIndex >= allButtons.length) nextIndex = 0;

    allButtons[nextIndex].focus();
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    currentBtn.click();
  }
});

/* -------------------------------------------------------------- */
/*                       SEAR5CH FORM                             */
/* -------------------------------------------------------------- */

const searchInput = document.querySelector("#site-search");
const searchForm = document.querySelector(".search-form");
/* closing my panels when i am searching  */
if (searchInput) {
  searchInput.addEventListener("focus", function () {
    closeAllDesktopPanels();
  });
}

if (searchForm) {
  searchForm.addEventListener("click", function () {
    closeAllDesktopPanels();
  });
}

// showing the search drop down menu
const searchDropdown = document.querySelector("#search-dropdown");
const searchSuggestionLinks = document.querySelectorAll(
  ".search-suggestion-link",
);

// this copies the searches into the search bar
searchSuggestionLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (searchInput) {
      searchInput.value = link.textContent;
    }

    if (searchDropdown) {
      searchDropdown.hidden = true;
    }
  });
});

/* this show the dropo dwon menu when in focus or usr is typing in input */
if (searchInput && searchDropdown) {
  searchInput.addEventListener("focus", function () {
    closeAllDesktopPanels();
    searchDropdown.hidden = false;
  });

  searchInput.addEventListener("input", function () {
    searchDropdown.hidden = false;
  });
}
/* 
    checking for clicks 
    insdie the search bar 
    or ousite the search bar : exit drop down 
 */
document.addEventListener("click", function (event) {
  const clickedInsideSearch = event.target.closest(".nav-search");

  if (!clickedInsideSearch && searchDropdown) {
    searchDropdown.hidden = true;
  }
});

/* closing the panels on resize  */
function closeAllNavUI() {
  closeAllDesktopPanels();

  if (searchDropdown) {
    searchDropdown.hidden = true;
  }

  if (mobileMenu) {
    mobileMenu.classList.remove("is-open");
  }

  if (hamburgerBtn) {
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
}

window.addEventListener("resize", function () {
  closeAllNavUI();
});

/* ---------------------------   */
/*      mobile nav logic         */
/* ---------------------------   */

const badge = document.querySelector(".cart-badge");
const count = localStorage.getItem("cartCount") || 0;

if (badge) {
  badge.textContent = count;
  badge.style.display = count > 0 ? "flex" : "none";
}


