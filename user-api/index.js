const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const userRoutes = require("./src/routes/userRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongdb connected successfully."))
    .catch((err) => console.error("Mongdb connection error : ", err))

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})