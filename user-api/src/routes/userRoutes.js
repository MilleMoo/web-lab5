const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middleware/upload");

router.post("/", upload.single("avatar"), userController.createUser);

module.exports = router;