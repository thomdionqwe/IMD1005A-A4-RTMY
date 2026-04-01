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

const users = [];

// Example usage
const user1 = new User();
user1.id = 1;
user1.name = "Mihir Panchal";
user1.email = "mihir@gmail.com";
user1.password = "password123";
users.push(user1);

const user2 = new User();
user2.id = 2;
user2.name = "Jane Smith";
user2.email = "jane.smith@example.com";
user2.password = "password123";
users.push(user2);
// console.log(user1.getUserInfo(user1.id));
