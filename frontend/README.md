# 🛍️ E-Commerce Frontend Documentation

## 📁 Project Structure
```
frontend/
├── src/
│   ├── api/
│   │   ├── axios.jsx        # API instance configuration
│   │   └── cartAPI.jsx      # Cart-related API calls
│   ├── components/
│   │   └── ProductCard.jsx  # Reusable product display component
│   ├── context/
│   │   └── CartContext.jsx  # Global cart state management
│   ├── pages/
│   │   ├── CartPage.jsx     # Shopping cart page
│   │   ├── HomePage.jsx     # Product listing page
│   │   └── Navbar.jsx       # Navigation component
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm/yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 Component Connections

### 1. 🌐 API Layer
- `axios.jsx`: Creates base API instance with configured baseURL
- `cartAPI.jsx`: Implements cart operations using axios instance
  - addToCart()
  - getCartItems()
  - updateCartItem()
  - deleteCartItem()

### 2. 🔄 Context Layer
- `CartContext.jsx`: Provides global cart state
  - Manages cart data
  - Exposes fetchCart() function
  - Used by Navbar, CartPage, and ProductCard

### 3. 📱 Pages & Components

#### App.jsx (Root Component)
- Sets up routing
- Wraps application with CartProvider
- Defines main routes:
  - / → HomePage
  - /cart → CartPage

#### Navbar.jsx
- Displays cart items count
- Uses CartContext for cart data
- Provides navigation links

#### HomePage.jsx
- Displays product grid
- Implements filtering functionality:
  - Search
  - Category
  - Price range
- Uses ProductCard component

#### CartPage.jsx
- Shows cart items
- Handles quantity updates
- Calculates total
- Uses CartContext for state management

#### ProductCard.jsx
- Displays individual product
- Handles add to cart functionality
- Uses CartContext for updates

## 🎨 Key Features
- 🔍 Product search and filtering
- 🛒 Cart management
- 💳 Price calculations
- 🎯 Real-time cart updates
- 🎨 Responsive design
- 🌈 Gradient UI elements

## 🛠️ Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔗 Dependencies
- React v19.1.0
- React Router v7.6.2
- Axios
- TailwindCSS
- Lodash.debounce

## 🎨 Styling
- Uses TailwindCSS for styling
- Custom gradients and animations
- Responsive design patterns
- Modern UI components

## ⚠️ Important Notes
- Backend should be running on http://localhost:5000
- Configure axios.jsx baseURL if backend URL changes
- Ensure all API endpoints match backend routes