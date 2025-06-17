# 🛍️ Full Stack E-Commerce Project

## 📑 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Architecture](#architecture)
- [File Connectivity](#file-connectivity)
- [Features](#features)

## 🌟 Overview
A full-stack e-commerce application with product management, cart functionality, and real-time updates.

## 🛠️ Tech Stack
- Frontend: React + Vite + TailwindCSS
- Backend: Node.js + Express
- Database: MongoDB
- State Management: Context API
- API Client: Axios

## 📁 Project Structure
```
e-commerce/
├── frontend/                # React application
│   ├── src/
│   │   ├── api/            # API integration
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Global state
│   │   ├── pages/         # Route components
│   │   └── App.jsx        # Root component
│   └── vite.config.js     # Vite configuration
│
└── backend/               # Express server
    ├── controllers/      # Business logic
    ├── models/          # Database schemas
    ├── routes/         # API endpoints
    └── index.js       # Server entry point
```

## 🚀 Setup & Installation

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
echo "MONGO_URI=mongodb://127.0.0.1:27017/ShopingcardDB\nPORT=5000" > .env

# Start server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Architecture

### Backend Architecture 🔧
1. **Entry Point (index.js)**
   - Server initialization
   - MongoDB connection
   - Route mounting
   - CORS configuration

2. **Routes**
   - `/api/products` - Product management
   - `/api/cart` - Cart operations

3. **Controllers**
   - `productControllers.js` - Product CRUD
   - `cartControllers.js` - Cart management

4. **Models**
   - `Product.js` - Product schema
   - `Cart.js` - Cart schema

### Frontend Architecture 🎨
1. **API Layer**
   - `axios.jsx` - Base configuration
   - `cartAPI.jsx` - Cart operations

2. **Context Layer**
   - `CartContext.jsx` - Global cart state

3. **Pages**
   - `HomePage.jsx` - Product listing
   - `CartPage.jsx` - Shopping cart
   - `Navbar.jsx` - Navigation

## 🔄 File Connectivity

### Backend Flow
```
Request → Routes → Controllers → Models → Database
↑                                            ↓
Response ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

### Frontend Flow
```
User Action → Context → API Call → Backend
↑                                    ↓
UI Update ←← State Update ←←←←←←← Response
```

## 🎯 Features

### Product Management 📦
- Create/Read/Update/Delete products
- Search & filter functionality
- Category management
- Price range filtering

### Cart Operations 🛒
- Add/Remove items
- Update quantities
- Real-time total calculation
- Persistent cart storage

### UI/UX Features 🎨
- Responsive design
- Loading states
- Error handling
- Toast notifications

## 🔍 API Endpoints

### Products
```
GET    /api/products      # List products
POST   /api/products      # Create product
PUT    /api/products/:id  # Update product
DELETE /api/products/:id  # Delete product
```

### Cart
```
GET    /api/cart         # Get cart
POST   /api/cart         # Add to cart
PUT    /api/cart         # Update quantity
DELETE /api/cart/:id     # Remove item
```

## 🧪 Development

### Frontend Scripts
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
```

### Backend Scripts
```bash
npm start        # Start with nodemon
npm test         # Run tests
```

## 🔐 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://127.0.0.1:27017/ShopingcardDB
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🚨 Error Handling
- Frontend: Axios interceptors + Context error state
- Backend: Try-catch blocks + Error middleware
- Global error boundaries in React

## 🔍 Monitoring
- Backend logging
- Frontend console tracking
- MongoDB query monitoring

## 🤝 Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
