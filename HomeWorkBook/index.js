const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const cloudinary = require("cloudinary").v2;
const bookRoutes = require("./src/routes/bookRoutes");
const Book = require("./src/models/bookModel"); 
// const  cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongdb connected successfully."))
    .catch((err) => console.error("Mongdb connection error : ", err))

app.use("/api/books", bookRoutes);

app.get("/", async (req, res) => {
    try {
        const books = await Book.find({}); 
        res.render("index", { books: books }); 
    } catch (err) {
        res.status(500).send("Error loading page");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});