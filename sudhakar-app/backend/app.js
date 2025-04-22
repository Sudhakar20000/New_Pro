const express = require('express');
const app = express();
const port = 3000;

// Sample agricultural products data
const products = [
  { id: 1, name: 'Rice', category: 'Cereal', price: '$1.50/kg' },
  { id: 2, name: 'Wheat', category: 'Cereal', price: '$1.20/kg' },
  { id: 3, name: 'Tomato', category: 'Vegetable', price: '$2.00/kg' },
  { id: 4, name: 'Potato', category: 'Vegetable', price: '$0.80/kg' },
  { id: 5, name: 'Corn', category: 'Cereal', price: '$1.10/kg' }
];

// Serve products as JSON
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`SUDHAKAR app listening at http://localhost:${port}`);
});

