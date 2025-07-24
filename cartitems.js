const products = [
  { id: 101, name: 'หูฟังบลูทูธ Sony', category: 'Electronics', price: 4590, stock: 15 },
  { id: 102, name: 'คีย์บอร์ด Mechanical', category: 'Electronics', price: 2800, stock: 8 },
  { id: 201, name: 'หนังสือ The Pragmatic Programmer', category: 'Books', price: 850, stock: 30 },
  { id: 202, name: 'หนังสือ Clean Code', category: 'Books', price: 799, stock: 0 }, // สินค้าหมด
  { id: 301, name: 'แก้วกาแฟ Starbucks', category: 'Lifestyle', price: 550, stock: 25 }
];

const user = {
  name: 'สมศักดิ์',
  shoppingCart: [
    { productId: 101, quantity: 1 }, 
    { productId: 201, quantity: 2 }, 
    { productId: 102, quantity: 1 }, 
    { productId: 202, quantity: 1 }, 
  ]
};  

function processOrder(customer, productList){
    console.log(" ");
    console.log(`============= เริ่มสำรวจตระกร้า ${customer.name} ===============`);
    const enrichedCart = customer.shoppingCart.map((item) => {
        const productDetails = productList.find((p) => p.id === item.productId);
            if(productDetails.stock < item.quantity){
                console.log(`สินค้า ${productDetails.name} ไม่พร้อมจำหน่าย อาจหมดสต็อก`)
                return null;
            }else{
                console.log(productDetails)
                return{
                    ...productDetails,
                    quantity: item.quantity,
                    subtotal: productDetails.price * item.quantity,
                }
            }
        });
        const availableItems = enrichedCart.filter((item) => item !== null).sort((a,b) => b.price - a.price);
        const totalPrice = availableItems.reduce((total, item) => total + item.subtotal,0)
        availableItems.forEach(element => {
            console.log(`${element.name} x ${element.quantity} | ราคา ${element.price} บาท`)
        });
        console.log("-------------------------------------------------------------")
        console.log(`ราคาร่วมทั้งหมด ${totalPrice} บาท`)
        console.log("-------------------------------------------------------------")
        // console.log(enrichedCart)
}

processOrder(user, products);