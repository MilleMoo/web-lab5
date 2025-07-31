const express = require("express");
const app = express();
const Port = 3000;

app.listen(Port, () => {
    console.log(`Server is running on PORT: ${Port}`)
})

app.use(express.json())

let product = [
    {id: 1, name: "ปากกา", price: 25, stock: 100},
    {id: 2, name: "ยางลบ", price: 40, stock: 80},
    {id: 3, name: "ดินสอ", price: 8, stock: 200},
    {id: 4, name: "สีเทียน", price: 90, stock: 50},
];

//GET
app.get("/api/products", (req, res) => {
    res.json(product);
});

//เรียกตาม id
app.get("/api/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const products = product.find(p => p.id === id);
    if(products){
        res.json(products);
    }else{
        res.status(404).send("Product not found")
    }  
})

//Post
app.post("/api/products", (req, res)=> {
    const newProduct = {
        id: product.length> 0 ? Math.max(...product.map(p => p.id)) + 1: 1,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
    };
    product.push(newProduct);
    res.status(201).json(newProduct)
});

//PUT
app.put("/api/products/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = product.findIndex(p => p.id === id);

    if(productIndex !== -1){
        const updatedProduct = {...product[productIndex], ... req.body}
        product[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }else{
        res.status(404).send("Product not found");
    }
});


//Delete
app.delete("/api/products/:id",(req, res)=> {
    const id = parseInt(req.params.id);
    const initialLength = product.length;
    product = product.filter(p => p.id !== id);

    if(product.length < initialLength){
        res.status(204).send();
    }else{
        res.status(404).send("Product not found")
    }
})

app.listen(Port, () => {
    console.log(`Server is running on "http://localhost:${Port}/"`)
})
