const PRODUCT_TEMPLATE = {
  id: "",
  name: "",
  category: "",
  tags: [],
  price: 0,
  dimensions: "",
  weight: "",
  description: "",
  rating: 0,
  ratingCount: 0,
  images: [],
  featured: false,
  featuredImage: "",
  onSale: false,
  thumbnailImage: "",
};

const defaultProducts = [
  /* ------------------------------------------------------------------------------- */
  /* --------------------------------- tables ------------------------------------- */
  /* ------------------------------------------------------------------------------- */
  //table-1
  {
    id: "table-1",
    name: "Branford Dark Wood Coffee Table",
    category: "table",
    tags: ["rustic", "dark-wood", "living-room"],
    price: 229.99,
    dimensions: "110 x 60 x 42 cm",
    weight: "16 kg",
    description:
      "A sturdy dark wood coffee table with a timeless rustic look, perfect for cozy living spaces.",
    rating: 4.4,
    ratingCount: 18,
    images: [
      "images/products/tables/table_1_1.webp",
      "images/products/tables/table_1_2.webp",
      "images/products/tables/table_1_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/tables/table_1_1.webp",
    onSale: false,
    thumbnailImage: "images/products/tables/table_1_2.webp",
  },
  //table-2
  {
    id: "table-2",
    name: "Calheme Storage Coffee Table with Hidden Compartment",
    category: "table",
    tags: ["storage", "functional", "living-room"],
    price: 279.99,
    dimensions: "120 x 65 x 45 cm",
    weight: "20 kg",
    description:
      "A functional coffee table featuring hidden storage compartments to keep your space organized.",
    rating: 4.6,
    ratingCount: 25,
    images: [
      "images/products/tables/table_2_1.webp",
      "images/products/tables/table_2_2.webp",
      "images/products/tables/table_2_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/tables/table_2_1.webp",
    onSale: true,
    thumbnailImage: "images/products/tables/table_2_2.webp",
  },
  //table-3
  {
    id: "table-3",
    name: "Arlmont Sleek Coffee Table with Lower Shelf",
    category: "table",
    tags: ["modern", "sleek", "storage"],
    price: 199.99,
    dimensions: "105 x 55 x 40 cm",
    weight: "14 kg",
    description:
      "A sleek and modern coffee table with a lower shelf for extra storage and display.",
    rating: 4.3,
    ratingCount: 14,
    images: [
      "images/products/tables/table_3_1.webp",
      "images/products/tables/table_3_2.webp",
      "images/products/tables/table_3_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/tables/table_3_1.webp",
    onSale: false,
    thumbnailImage: "images/products/tables/table_3_2.webp",
  },
  //table-4
  {
    id: "table-4",
    name: "Haverford Modern Coffee Table in Warm Oak Finish",
    category: "table",
    tags: ["modern", "oak", "minimal"],
    price: 249.99,
    dimensions: "115 x 60 x 42 cm",
    weight: "17 kg",
    description:
      "A modern coffee table crafted with a warm oak finish, ideal for contemporary interiors.",
    rating: 4.5,
    ratingCount: 20,
    images: [
      "images/products/tables/table_4_1.webp",
      "images/products/tables/table_4_2.webp",
      "images/products/tables/table_4_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/tables/table_4_1.webp",
    onSale: false,
    thumbnailImage: "images/products/tables/table_4_2.webp",
  },
  //table-5
  {
    id: "table-5",
    name: "Dunley Coffee Table with Open Storage Shelf",
    category: "table",
    tags: ["storage", "open-shelf", "wood"],
    price: 219.99,
    dimensions: "110 x 58 x 43 cm",
    weight: "15 kg",
    description:
      "A practical coffee table with an open shelf design, perfect for books and decor display.",
    rating: 4.2,
    ratingCount: 11,
    images: [
      "images/products/tables/table_5_1.webp",
      "images/products/tables/table_5_2.webp",
      "images/products/tables/table_5_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/tables/table_5_1.webp",
    onSale: true,
    thumbnailImage: "images/products/tables/table_5_2.webp",
  },
  //table-6
  {
    id: "table-6",
    name: "Norbury Lift-Top Coffee Table with Hidden Storage",
    category: "table",
    tags: ["lift-top", "storage", "compact"],
    price: 299.99,
    dimensions: "100 x 55 x 45 cm",
    weight: "19 kg",
    description:
      "A versatile lift-top coffee table with hidden storage, ideal for compact and multifunctional spaces.",
    rating: 4.7,
    ratingCount: 32,
    images: [
      "images/products/tables/table_6_1.webp",
      "images/products/tables/table_6_2.webp",
      "images/products/tables/table_6_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/tables/table_6_1.webp",
    onSale: false,
    thumbnailImage: "images/products/tables/table_6_2.webp",
  },

  /* ------------------------------------------------------------------------------- */
  /* --------------------------------- shelves ------------------------------------- */
  /* ------------------------------------------------------------------------------- */
  //shelf-1
  {
    id: "shelf-1",
    name: "Calheme Rustic Shelves with J Brackets (Set of 2)",
    category: "shelf",
    tags: ["rustic", "wall-mounted", "set-of-2"],
    price: 89.99,
    dimensions: "40 x 15 x 18 cm",
    weight: "4 kg",
    description:
      "A rustic wall shelf set with sturdy J brackets, perfect for decorative displays and everyday storage.",
    rating: 4.5,
    ratingCount: 21,
    images: [
      "images/products/shelves/shelf_1_1.webp",
      "images/products/shelves/shelf_1_2.webp",
      "images/products/shelves/shelf_1_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/shelves/shelf_1_1.webp",
    onSale: false,
    thumbnailImage: "images/products/shelves/shelf_1_2.webp",
  },
  //shelf-2
  {
    id: "shelf-2",
    name: "Arlmont Floating Oak Wall Shelf",
    category: "shelf",
    tags: ["floating", "oak", "minimal"],
    price: 74.99,
    dimensions: "60 x 18 x 4 cm",
    weight: "3 kg",
    description:
      "A floating oak wall shelf with a clean and minimal profile, ideal for books, candles, and decor accents.",
    rating: 4.3,
    ratingCount: 16,
    images: [
      "images/products/shelves/shelf_2_1.webp",
      "images/products/shelves/shelf_2_2.webp",
      "images/products/shelves/shelf_2_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/shelves/shelf_2_1.webp",
    onSale: true,
    thumbnailImage: "images/products/shelves/shelf_2_2.webp",
  },
  //shelf-3
  {
    id: "shelf-3",
    name: "Haverford Modern Display Shelf",
    category: "shelf",
    tags: ["modern", "display", "living-room"],
    price: 119.99,
    dimensions: "85 x 20 x 30 cm",
    weight: "6 kg",
    description:
      "A modern display shelf designed to showcase plants, framed prints, and decorative objects in style.",
    rating: 4.4,
    ratingCount: 19,
    images: [
      "images/products/shelves/shelf_3_1.webp",
      "images/products/shelves/shelf_3_2.webp",
      "images/products/shelves/shelf_3_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/shelves/shelf_3_1.webp",
    onSale: false,
    thumbnailImage: "images/products/shelves/shelf_3_2.webp",
  },
  //shelf-4
  {
    id: "shelf-4",
    name: "Dunley Corner Storage Shelf",
    category: "shelf",
    tags: ["corner", "storage", "space-saving"],
    price: 99.99,
    dimensions: "30 x 30 x 95 cm",
    weight: "7 kg",
    description:
      "A compact corner shelf that makes smart use of unused space while adding extra storage and display room.",
    rating: 4.2,
    ratingCount: 13,
    images: [
      "images/products/shelves/shelf_4_1.webp",
      "images/products/shelves/shelf_4_2.webp",
      "images/products/shelves/shelf_4_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/shelves/shelf_4_1.webp",
    onSale: true,
    thumbnailImage: "images/products/shelves/shelf_4_2.webp",
  },
  //shelf-5
  {
    id: "shelf-5",
    name: "Norbury Ladder Shelf in Warm Wood Finish",
    category: "shelf",
    tags: ["ladder", "warm-wood", "decorative"],
    price: 149.99,
    dimensions: "55 x 35 x 160 cm",
    weight: "10 kg",
    description:
      "A warm wood ladder shelf with an open and airy design, great for displaying books, baskets, and plants.",
    rating: 4.6,
    ratingCount: 24,
    images: [
      "images/products/shelves/shelf_5_1.webp",
      "images/products/shelves/shelf_5_2.webp",
      "images/products/shelves/shelf_5_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/shelves/shelf_5_1.webp",
    onSale: false,
    thumbnailImage: "images/products/shelves/shelf_5_2.webp",
  },
  //shelf-6
  {
    id: "shelf-6",
    name: "Branford Wall Shelf with Metal Brackets",
    category: "shelf",
    tags: ["industrial", "wall-mounted", "metal-brackets"],
    price: 84.99,
    dimensions: "50 x 16 x 20 cm",
    weight: "4.5 kg",
    description:
      "A sturdy wall shelf with metal brackets that blends rustic wood tones with a subtle industrial look.",
    rating: 4.1,
    ratingCount: 10,
    images: [
      "images/products/shelves/shelf_6_1.webp",
      "images/products/shelves/shelf_6_2.webp",
      "images/products/shelves/shelf_6_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/shelves/shelf_6_1.webp",
    onSale: true,
    thumbnailImage: "images/products/shelves/shelf_6_2.webp",
  },

  /* ------------------------------------------------------------------------------- */
  /* --------------------------------- accessory ----------------------------------- */
  /* ------------------------------------------------------------------------------- */
  //accessory-1
  {
    id: "accessory-1",
    name: "Branford Tall Wooden Plant Vase",
    category: "accessory",
    tags: ["decor", "plant", "dark-wood"],
    price: 59.99,
    dimensions: "25 x 25 x 60 cm",
    weight: "3.5 kg",
    description:
      "A tall wooden plant vase with a bold dark finish, perfect for statement greenery in any room.",
    rating: 4.5,
    ratingCount: 17,
    images: [
      "images/products/accessories/accessory_1_1.webp",
      "images/products/accessories/accessory_1_2.webp",
      "images/products/accessories/accessory_1_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/accessories/accessory_1_1.webp",
    onSale: false,
    thumbnailImage: "images/products/accessories/accessory_1_2.webp",
  },
  //accessory-2
  {
    id: "accessory-2",
    name: "Calheme Wooden Table Coasters (Set of 4)",
    category: "accessory",
    tags: ["coasters", "dark-wood", "kitchen"],
    price: 24.99,
    dimensions: "10 x 10 x 2 cm",
    weight: "0.8 kg",
    description:
      "A set of durable wooden coasters designed to protect surfaces while adding a warm, natural touch.",
    rating: 4.3,
    ratingCount: 22,
    images: [
      "images/products/accessories/accessory_2_1.webp",
      "images/products/accessories/accessory_2_2.webp",
      "images/products/accessories/accessory_2_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/accessories/accessory_2_1.webp",
    onSale: true,
    thumbnailImage: "images/products/accessories/accessory_2_2.webp",
  },
  //accessory-3
  {
    id: "accessory-3",
    name: "Arlmont Decorative Table Vases (Set of 2)",
    category: "accessory",
    tags: ["decor", "light-wood", "tabletop"],
    price: 34.99,
    dimensions: "12 x 12 x 20 cm",
    weight: "1.2 kg",
    description:
      "A set of small decorative vases in a light wood finish, ideal for minimalist table styling.",
    rating: 4.4,
    ratingCount: 15,
    images: [
      "images/products/accessories/accessory_3_1.webp",
      "images/products/accessories/accessory_3_2.webp",
      "images/products/accessories/accessory_3_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/accessories/accessory_3_1.webp",
    onSale: false,
    thumbnailImage: "images/products/accessories/accessory_3_2.webp",
  },
  //accessory-4
  {
    id: "accessory-4",
    name: "Haverford Wooden Duck Accent Decor (Set of 2)",
    category: "accessory",
    tags: ["decor", "accent", "set-of-2"],
    price: 39.99,
    dimensions: "15 x 8 x 12 cm",
    weight: "1 kg",
    description:
      "A charming set of wooden duck accent pieces that add a playful and artistic touch to your space.",
    rating: 4.2,
    ratingCount: 11,
    images: [
      "images/products/accessories/accessory_4_1.webp",
      "images/products/accessories/accessory_4_2.webp",
      "images/products/accessories/accessory_4_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/accessories/accessory_4_1.webp",
    onSale: true,
    thumbnailImage: "images/products/accessories/accessory_4_2.webp",
  },
  //accessory-5
  {
    id: "accessory-5",
    name: "Dunley Decorative Wood Accent Piece",
    category: "accessory",
    tags: ["decor", "yellow-wood", "accent"],
    price: 29.99,
    dimensions: "20 x 10 x 25 cm",
    weight: "1.5 kg",
    description:
      "A warm-toned decorative wood accent piece that brings texture and character to any room.",
    rating: 4.1,
    ratingCount: 9,
    images: [
      "images/products/accessories/accessory_5_1.webp",
      "images/products/accessories/accessory_5_2.webp",
      "images/products/accessories/accessory_5_3.webp",
    ],
    featured: false,
    featuredImage: "images/products/accessories/accessory_5_1.webp",
    onSale: false,
    thumbnailImage: "images/products/accessories/accessory_5_2.webp",
  },
  //accessory-6
  {
    id: "accessory-6",
    name: "Norbury Tree Slice Decorative Centerpiece",
    category: "accessory",
    tags: ["decor", "natural", "dark-wood"],
    price: 44.99,
    dimensions: "30 x 30 x 5 cm",
    weight: "2.2 kg",
    description:
      "A natural tree slice decorative centerpiece that highlights the beauty of raw wood grain.",
    rating: 4.6,
    ratingCount: 20,
    images: [
      "images/products/accessories/accessory_6_1.webp",
      "images/products/accessories/accessory_6_2.webp",
      "images/products/accessories/accessory_6_3.webp",
    ],
    featured: true,
    featuredImage: "images/products/accessories/accessory_6_1.webp",
    onSale: false,
    thumbnailImage: "images/products/accessories/accessory_6_2.webp",
  },
];

function initializeDefaultProducts() {
  // Load existing products from LocalStorage
  let storedProducts = JSON.parse(localStorage.getItem("products")) || [];

  // Your default products from data.js
  const Products = defaultProducts; // "products" is your array from data.js

  // Merge default products WITHOUT duplicates
  Products.forEach((def) => {
    const exists = storedProducts.some((p) => p.id === def.id);
    if (!exists) {
      storedProducts.push(def);
    }
  });

  // Save merged list back to LocalStorage
  localStorage.setItem("defaultProducts", JSON.stringify(storedProducts));
}

// Run this once on page load
initializeDefaultProducts();
