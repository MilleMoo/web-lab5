const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add Product" , path: "/admin/add-product"});
});

router.post("/add-product", (req, res) => {
  products.push({
      title: req.body.title,
      img: req.body.img,
      price: req.body.price,
      desc: req.body.desc
    });
  console.log(products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
// "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png"
