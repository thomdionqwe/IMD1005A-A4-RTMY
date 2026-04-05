function ensureDefaultUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const defaultUsers = [
    {
      fullname: "Admin Customer",
      email: "admin@c.com",
      password: "1234",
      phone: "555-1234",
      address: "New York",
      type: "customer",
    },
    {
      fullname: "Admin Business",
      email: "admin@b.com",
      password: "abcd",
      phone: "555-5678",
      address: "Los Angeles",
      type: "business",
    },
  ];

  // Add default users ONLY if they don't already exist
  defaultUsers.forEach((defUser) => {
    const exists = users.some((u) => u.email === defUser.email);
    if (!exists) {
      users.push(defUser);
    }
  });

  localStorage.setItem("users", JSON.stringify(users));
}

// Run this on every page load
ensureDefaultUsers();
console.log(JSON.parse(localStorage.getItem("users")));
