# Carve & Co.

https://thomdionqwe.github.io/IMD1005A-A4-RTMY/

## Team Members

### Ryan Bolt

- **Carleton Student Number:** 101390646
- **Algonquin Student Number:** 041268031

### Mihir Panchal

- **Carleton Student Number:** 101390552
- **Algonquin Student Number:** 041221847

### Thomas Dion

- **Carleton Student Number:** 101391537
- **Algonquin Student Number:** 041224655

### Yousra

- **Carleton Student Number:** 101392056
- **Algonquin Student Number: 

---

## README TODO

- [ ] Site Description
- [ ] Navigation Guide
- Team member contributions
---
### Navigation Guide
---
Tablet & Mobile
- Responsive navigation structure is implemented (hamburger menu and layout)
- Full functionality is not yet implemented, but the foundation is in place for future development

Desktop Navigation
- All navigation menus are sticky and fully interactive.
- Shop Menu:
  -Includes:
      “Shop All” link
      Grid of 3 main categories (tables, shelves, accessories)
  - Each link:
      Passes selected category to the products page for filtering
      “Shop All” applies no filters
  - Products page is not fully implemented yet, so navigation is not active

- Featured Menu
  - Displays:
      Scrollable list of tags (best sellers)
      Scrollable product list filtered by selected tag
  - Users can:
      Browse featured products by tag
      Navigate using keyboard (fully accessible)
  - Includes:
      “Shop All Best Sellers” link (passes featured filter)
  - Product links are not active yet (product page not implemented)
    
- Deals Menu
    Same structure and behavior as Featured menu
    Displays on-sale products instead of featured items
    Includes tag filtering and scrollable product list
  
- Interactions & Accessibility
  All menus support keyboard navigation
  Escape key closes all open menus
  Tag lists and product lists are horizontally scrollable
  UI state is managed so only one menu is active at a time
  
- User Actions & Icons
  Cart icon → cart functionality integrated (UI + data logic)
  Wishlist icon → planned (page not implemented yet)
  Login icon → allows user authentication
  After login:
      Navigation reads user data from localStorage
      If user type is business:
      Shows “Add Product” button
      Grants access to product upload functionality
---
Team member contributions
---
### Ryan Bolt

### Mihir Panchal

I contributed extensively to the core functionality and interactive features of this project. My work focused on building a smooth, reliable, and user‑friendly experience across the entire website.
🔐 Authentication & User Flow

- Implemented Login, Registration, and Logout systems
- Added form validation, error handling, and popup feedback messages
- Built session management using LocalStorage
- Added route protection to prevent unauthorized access
  🛒 E‑Commerce Functionality
- Developed Add to Cart and Remove from Cart logic
- Synced cart data with the navbar badge and UI updates
- Implemented payment screen structure and data handling
- Built product listing logic for the index page
  🧾 Product & Admin Features
- Implemented Add Product functionality
- Managed product data storage and rendering
  ✨ UI/UX Enhancements
- Created consistent popup messages (login, logout, errors, actions)
- Added smooth validation feedback and user interaction flows
- Ensured consistent behavior and data handling across all pages

### Yousra Albizri

I contributed to both the design and frontend development of this project, focusing on building a responsive, interactive, and scalable user interface.

Design & Planning
- Created full website mockups in Figma [View My Figma Design](https://www.figma.com/site/JubD8JJx1OtTsYKr3xao9I/website-mockup?node-id=0-1&t=4sHSwn5uBAugLYM4-1) and used them as the main reference for implementation
- Took inspiration from modern e-commerce platforms like IKEA
- Focused on clean layout, visual hierarchy, and product-centered design

Navigation System
- Built a fully responsive navigation system:
- Desktop: interactive panels (Shop, Featured, Deals)
- Tablet: sliding drawer menu
- Mobile: simplified full-screen navigation 
- Implemented filtering UI (tags, featured, on-sale products)
- Added search dropdown, overlay system, and UI state management
- Integrated accessibility (keyboard navigation, ARIA, focus handling)

Product Data & Rendering
- Designed structured product system (data.js)
- Defined consistent product schema (id, category, tags, price, images, etc.)
- Implemented dynamic rendering using DOM methods

UI Components & Layout
- Built responsive About section and multi-column footer
- Structured CSS using modular files and variables
- Added UI interactions (hover effects, transitions, overlays)

User-Based Features
- Implemented conditional UI:
- Show “Add Product” for business users
- Hide login when user is authenticated
- Managed user state using localStorage
  
Assets & Content
- Sourced, organized, and integrated all visual assets
- Maintained consistent folder structure and naming conventions
- Generated placeholder product descriptions, titles, and tags

Workflow & Collaboration
- Worked across multiple feature branches
- Created and merged pull requests into main
- Maintained clear commits and coordinated with the team

AI Usage
- Refactoring repetitive CSS
- All AI-assisted code was reviewed, understood, and clearly commented

### Thomas Dion

- [ ] Ai-usage documentation
      SITE DESCRIPTION
      SITE NAVIGATION GUIDE
      TEAM MEMBER CONTRIBUTIONS
      AI-USAGE DOCUMENTATION
