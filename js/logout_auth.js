function updateNavUserState() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const loginIcon = document.querySelector('.nav-right a[href="login.html"]');
  const logoutBtn = document.getElementById("logoutBtn");
  const addProductLink = document.getElementById("add-product-link");

  if (user) {
    // User is logged in
    loginIcon.style.display = "none";
    logoutBtn.style.display = "inline-flex";

    // If you want only admins to see add product
    // if (user.role === "admin") addProductLink.style.display = "inline-flex";
    // else addProductLink.style.display = "none";
  } else {
    // User is logged out
    loginIcon.style.display = "inline-flex";
    logoutBtn.style.display = "none";
    addProductLink.style.display = "none";
  }
}

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});

updateNavUserState();
