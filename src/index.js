const express = require('express');
const bodyParser = require('body-parser');

const marketDataController = require('./marketData/marketData-controller')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/api/v1/data/news/:ticker/', marketDataController); // Get ticker news
// app.get('/api/v1/data/stock/:ticker/', marketDataController) // Get ticker data (Advanced plan)

// Listen 
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))