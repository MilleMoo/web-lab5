const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

app.use(express.json());
app.use(express.urlencoded({extened: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});