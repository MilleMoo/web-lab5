const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log("shop", products);
  res.render("shop", { pageTitle: "My Shop Mak Mak", products: products , path: '/'});
});

module.exports = router;
