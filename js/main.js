
/*testing delete later:  populating the prodcut list  */
///////////
const productList = document.querySelector(".product-list");

const featuredProducts = products.filter(product => product.featured);

featuredProducts.forEach(product => {
  const card = document.createElement("div");

  const img = document.createElement("img");
  img.src = product.featuredImage;
  img.alt = product.name;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);

  productList.appendChild(card);
});
/////////
/*testing delete later:  populating the prodcut list  */