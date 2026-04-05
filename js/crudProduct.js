function addProduct() {
  let storedProducts = JSON.parse(localStorage.getItem("products")) || [];

  const category = document.getElementById("category").value;
  const uniqueId = category + "-" + Date.now();

  const product = {
    id: uniqueId,
    name: document.getElementById("name").value.trim(),
    category: category,
    tags: document
      .getElementById("tags")
      .value.split(",")
      .map((t) => t.trim()),
    price: parseFloat(document.getElementById("price").value),
    dimensions: document.getElementById("dimensions").value.trim(),
    weight: document.getElementById("weight").value.trim(),
    description: document.getElementById("description").value.trim(),

    rating: 0,
    ratingCount: 0,

    images: document
      .getElementById("images")
      .value.split(",")
      .map((i) => i.trim()),
    featured: document.getElementById("featured").value === "true",
    featuredImage: document.getElementById("featuredImage").value.trim(),
    onSale: document.getElementById("onSale").value === "true",
    thumbnailImage: document.getElementById("thumbnailImage").value.trim(),
  };

  storedProducts.push(product);
  localStorage.setItem("products", JSON.stringify(storedProducts));

  alert("Product added successfully!");
}
