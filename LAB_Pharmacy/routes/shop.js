const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/api/getProducts', (req, res) => {
    const products = getProducts();
    res.json(products)
})

module.exports = router