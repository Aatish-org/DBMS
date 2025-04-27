const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// API to fetch products
app.get('/api/products', (req, res) => {
  const query = `
    SELECT Products.id, Products.name, Categories.name AS category, Products.price, Products.stock
    FROM Products
    JOIN Categories ON Products.category_id = Categories.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching products');
    } else {
      res.json(results);
    }
  });
});

// API to fetch cart items
app.get('/api/cart', (req, res) => {
  const query = `
    SELECT Cart.id, Products.name, Cart.quantity, Products.price
    FROM Cart
    JOIN Products ON Cart.product_id = Products.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching cart items');
    } else {
      res.json(results);
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});