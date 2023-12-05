const express = require('express');
const app = express();
const fibonacci = require('./fibonacci');

app.get('/fibonacci/:position', (req, res) => {
  const position = parseInt(req.params.position);
  const result = fibonacci(position);
  res.json({ position, fibonacciValue: result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
