const express = require("express");
const router = express.Router();
const path = require("path");

let products = [
  {
    id: 1,
    name: "Paracetamol",
    price: 10,
    stock: 100,
    description: "ยาแก้ปวดลดไข้",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.3Nhf2ALeCKZg73AnSr1lSQHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function getProducts() {
  return products;
}

module.exports = {
  router: router,
  products: products,
  getProducts: getProducts,
};
