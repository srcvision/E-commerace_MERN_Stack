# E-Commerce Backend API Documentation 🛍️

## Table of Contents 📑
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [File Connectivity](#file-connectivity)
- [Security Measures](#security-measures)

## Setup and Installation 🚀

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables in `.env`:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development
RATE_LIMIT=100
CORS_ORIGIN=http://localhost:3000
```
4. Run the server:
```bash
npm start
```

## Project Structure 📁

```
backend/
├── controllers/
│   ├── productControllers.js   # Product operations logic
│   └── cartControllers.js      # Cart operations logic
├── models/
│   ├── Product.js             # Product database schema
│   └── Cart.js               # Cart database schema
├── routes/
│   ├── productRoutes.js      # Product API routes
│   └── cartRoutes.js        # Cart API routes
├── .env                      # Environment variables
├── index.js                 # Server entry point
└── package.json            # Project dependencies
```

## API Endpoints 🛣️

### Products API 📦
- `POST /api/products` - Create new product (Admin only)
- `GET /api/products` - Get all products (Public)
- `GET /api/products/:id` - Get product by ID (Public)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart API 🛒
- `POST /api/cart` - Add item to cart (Authenticated)
- `GET /api/cart` - Get cart items (Authenticated)
- `PUT /api/cart` - Update cart item quantity (Authenticated)
- `DELETE /api/cart/:productId` - Remove item from cart (Authenticated)

## Database Models 💾

### Product Schema
- name (String)
- price (Number)
- description (String)
- category (String)
- imageurl (String)

### Cart Schema
- items: Array of
  - productId (ObjectId)
  - quantity (Number)

## File Connectivity 🔄

1. **Entry Point (index.js)**
   - Initializes Express server
   - Connects to MongoDB
   - Mounts routes
   - Configures middleware

2. **Routes → Controllers → Models Flow**
   - Routes direct requests to appropriate controllers
   - Controllers implement business logic
   - Models handle database operations

3. **Environment Configuration**
   - `.env` file contains configuration
   - Used by `index.js` for MongoDB connection and port

## Features 🌟

- Product CRUD operations
- Cart management
- Search and filter products
- Real-time cart updates
- MongoDB integration
- Error handling
- CORS enabled

## Error Handling 🚨
All endpoints include try-catch blocks with:
- Appropriate status codes
- Error messages
- Error logging

## Query Parameters 🔍
Products can be filtered by:
- search (name)
- category
- minPrice
- maxPrice

## Development 👨‍💻
Running in development mode with nodemon:
```bash
npm start
```

## Security Measures 🔒

### Authentication
- All API endpoints require JWT authentication except:
  - `POST /api/auth/login`
  - `POST /api/auth/register`
- Include JWT token in Authorization header:
  `Authorization: Bearer <token>`

### Environment Variables
Store these securely and never commit to version control:
- `JWT_SECRET`: Secret key for JWT tokens
- `MONGO_URI`: Database connection string
- `NODE_ENV`: Environment mode
- `CORS_ORIGIN`: Allowed origins
- `RATE_LIMIT`: API rate limit per IP

### API Security
- Rate limiting enabled
- CORS protection
- Request validation
- XSS prevention
- Input sanitization
- Password hashing
