const express = require("express");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRoutes = require("./src/routes/taskRouter");

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Mongdb connected successfully."))
    .catch((err) => console.error("Mongdb connection error : ", err))

app.use("/api/tasks", taskRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})