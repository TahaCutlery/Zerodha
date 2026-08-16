# Zerodha & Kite Trading Platform Clone 📈

A full-stack web application replicating **Zerodha** (India's premier stockbroker) and its trading platform **Kite**. This repository features a responsive marketing landing website alongside a trading dashboard capable of real-time stock watchlist monitoring, portfolio tracking (Holdings & Positions), placing buy/sell orders, funds management, and JWT-based user authentication.

---

## 🚀 Features

### 🌐 1. Landing Web Application
* **Home Page**: Hero banner, Ecosystem preview, Pricing highlights, and Trust metrics.
* **Products Page**: Showcases trading platforms, APIs, and educational tools (Varsity, Coin, Kite Connect).
* **Pricing Page**: Clean breakdown of brokerage charges across Equity, F&O, and Commodities.
* **About & Support Pages**: Corporate history, leadership, and searchable help topic portal.
* **Authentication UI**: User registration (`Signup`) and authentication (`Login`) flows.

### 📊 2. Kite Trading Dashboard (`/dashboard`)
* **Live Watchlist**: Interactive stock list with live prices, percentage changes, and hover actions for quick Buy / Sell modal execution.
* **Portfolio Holdings**: Detailed breakdown of long-term investments including quantity, buy price, current market value, P&L, and net return percentage.
* **Intraday Positions**: Active position tracking with real-time profit and loss status.
* **Order Management System**:
  * **Buy Modal**: Add shares to portfolio.
  * **Sell Modal**: Validates order against existing holdings and positions to prevent shorting stocks not owned.
  * **Order History**: Real-time log of executed orders (`BUY` / `SELL`).
* **Visual Analytics**: Interactive portfolio distribution charts rendered using **Chart.js**.
* **Funds & Margins**: Overview of available margin, equity funds, and margin usage calculations.

### 🔒 3. Security & Backend API
* **JWT Authentication**: Cookie-based session tokens for protected user routes.
* **Password Hashing**: Bcrypt encryption for safe credential storage.
* **MongoDB Integration**: Schema-driven persistence for Users, Holdings, Positions, and Orders via Mongoose.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework**: React 19
* **Routing**: React Router DOM (v7)
* **UI Components & Icons**: Material-UI (`@mui/material`, `@mui/icons-material`), Emotion CSS
* **Data Visualization**: Chart.js (`react-chartjs-2`)
* **HTTP Client**: Axios

### **Backend**
* **Runtime**: Node.js
* **Framework**: Express.js (v5)
* **Database**: MongoDB with Mongoose ODM
* **Authentication**: JSON Web Tokens (`jsonwebtoken`), `cookie-parser`, `bcrypt`
* **Development Utilities**: `dotenv`, `cors`, `nodemon`

---

## 📁 Project Structure

```text
Zerodha/
├── backend/
│   ├── controller/      # Auth & User controllers
│   ├── models/          # Mongoose models (User, Holding, Position, Order)
│   ├── Routes/          # Express route definitions (authRoute)
│   ├── utils/           # Helper utilities (SecretToken JWT middleware)
│   ├── .env             # Backend environment variables
│   ├── index.js         # Backend entry point & API endpoints
│   └── package.json
│
├── frontend/
│   ├── public/          # Public assets & static HTML
│   ├── src/
│   │   ├── dashboard/   # Kite trading dashboard components (Holdings, Orders, WatchList, etc.)
│   │   ├── landing_page/# Marketing site components (Home, Pricing, Products, Support, Auth)
│   │   ├── index.css    # Global stylesheet & design tokens
│   │   ├── index.js     # React application entry point & routes
│   │   └── serverUrl.js # API server endpoint configuration
│   └── package.json
│
└── README.md            # Documentation
```

---

## ⚙️ API Endpoints Reference

### **Authentication**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/signup` | Registers a new user account |
| `POST` | `/login` | Authenticates user & sets JWT in http-only cookie |
| `GET` | `/me` | Fetches authenticated user details (Protected) |

### **Trading & Portfolio**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/allHoldings` | Fetches user portfolio holdings |
| `GET` | `/allPositions` | Fetches active intraday positions |
| `GET` | `/allOrders` | Fetches executed order history |
| `POST` | `/newOrder` | Places a new `BUY` or `SELL` order with validation |

---

## 📥 Getting Started

### **Prerequisites**
* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB](https://www.mongodb.com/) (Local server or MongoDB Atlas cluster)
* Git

---

### **1. Clone the Repository**
```bash
git clone https://github.com/TahaCutlery/Zerodha.git
cd Zerodha
```

---

### **2. Setup Backend Server**
Navigate into the `backend` directory, install dependencies, and configure environment variables.

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:
```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/zerodha
TOKEN_KEY=YourSecretJwtKey
URL=http://localhost:3001
NODE_ENV=local
```

Start the backend server using `nodemon`:
```bash
npm start
```
*The backend server will run on `http://localhost:3000`.*

---

### **3. Setup Frontend Application**
Open a new terminal, navigate into the `frontend` directory, and install dependencies.

```bash
cd frontend
npm install
```

Ensure `frontend/src/serverUrl.js` points to your backend URL:
```javascript
let isProduction = false; // Set to false for local development
module.exports.server_url = isProduction ? "https://your-production-url.onrender.com" : "http://localhost:3000";
```

Start the React development server:
```bash
npm start
```
*The application will launch on `http://localhost:3000` (or `http://localhost:3001`).*

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues tab or open a pull request.

---

## 📜 License

This project is open source and available under the [ISC License](LICENSE).
