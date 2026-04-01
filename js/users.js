// User class definition
class User {
  // Constructor to initialize user properties
  constructor() {
    this.id = null;
    this.name = null;
    this.email = null;
    this.password = null;
    this.phone = null;
    this.address = null;
    this.balance = 0;
    this.role = "customer";
    this.status = "active";
    this.favoriteProducts = [];
    this.sellingProducts = [];
  }

  getGeneratedId() {
    return "user_" + Math.random().toString(36);
  }
}

function getUserInfo(userId) {
  // Simulate fetching user information based on userId
  for (const user of users) {
    if (user.id === userId) {
      return user;
    }
  }
  return null;
}

function validateLogin(email, password) {
  // login validation
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return user.id;
    }
  }
  return 0;
}

const users = [];

// Example usage
const user1 = new User();
user1.id = 1;
user1.name = "Mihir Panchal";
user1.email = "mihir@gmail.com";
user1.password = "123";
users.push(user1);

const user2 = new User();
user2.id = 2;
user2.name = "Ryan Bolt";
user2.email = "ryan@gmail.com";
user2.password = "456";
users.push(user2);
// console.log(user1.getUserInfo(user1.id));
