const users = [
    {id: 1, name: 'John', email: 'john.sn@gmail.com'},
    {id: 2, name: 'Mary', email: 'Mary.sn@gmail.com'},
    {id: 3, name: 'Clark', email: 'Clark.sn@gmail.com'},
    {id: 4, name: 'Somsri', email: 'somsri.sn@gmail.com'},
];

for (let index = 0; index < users.length; index++) {
    console.log("id\t"+ users[index].id +"\tname\t"+ users[index].name + "\temail\t"+ users[index].email)    
}
console.log("----------------------------------------");

for (const user of users) {
    console.log("id\t"+ user.id +"\tname\t"+ user.name + "\temail\t"+ user.email)    
}
console.log("----------------------------------------");

users.forEach((users) => {
    console.log("id\t"+ users.id +"\tname\t"+ users.name + "\temail\t"+ users.email)    
})
console.log("----------------------------------------");
const userName = users.map(users => users.name);
console.log(userName);
console.log("----------------------------------------");
const products = [
    {name: 'ข้าวมันไก่', price: 20, quantity: 15},
    {name: 'ข้าวขาหมู', price: 50, quantity: 12},
    {name: 'สบู่', price: 8, quantity: 60},
    {name: 'PS5', price: 119, quantity: 5},
]
const cheapItems = products.filter((item) => item.price < 50);
console.log(cheapItems);
console.log("----------------------------------------");
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].price * products[index].quantity    
}
console.log("total "+totalPrice+" บาท");
totalPrice = products.reduce((total, products) => {
    return total + products.price * products.quantity
},0)
console.log(`อีกที, มูลค่ารวมคือ ${totalPrice} บาท`);
console.log("----------------------------------------");

const findItem = products.find((item) => item.name === 'PS5');
console.log(findItem);
console.log("----------------------------------------");

const sortItem = products.sort((a,b) => a.price - b.price);
console.log(sortItem);
console.log("----------------------------------------");
const someOne = products.some(products => products.quantity < 10);
console.log(someOne)
console.log("----------------------------------------");
const everyOne = products.every((products) => products.quantity > 10);
console.log(everyOne);
console.log("----------------------------------------");
const highProduct = products.filter((product) => product.price > 10).sort((a,b) => b.quantity - a.quantity)
.map((product) => product.name)
console.log(highProduct)

