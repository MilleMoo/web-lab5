<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        #nullcal{
            border-style: dashed;
            border-color: gainsboro;
            border-radius: 10px;
        }
        #Slog{
            background-color: rgb(255, 255, 231);
        }
        #listItem{
            background-color: rgb(247, 247, 247);
        }
        #boxTotal{
            background-color: rgb(191, 245, 242);
        }
        body{
            background-color: rgb(231, 247, 255);
        }
        #cart{
            background-color: rgb(241, 250, 252);
        }
    </style>
</head>
<body >
    <div class="row me-5 ms-5 justify-content-center align-self-center">
    <header class="container">
        <h1 class="text-center mt-5">Store Simulator</h1>
    </header>

        <div class=" col mt-3">
            <div class="row-col">
                <div class="card col ps-3 pt-2" id="product-container">
                    <h2>
                        <span>📦 คลังสินค้า</span>
                    </h2>
                    <table class="table" >
                        <thead>
                            <tr>
                                <th class="px-2 py-3 text-sm" id="cart">ID</th>
                                <th class="px-2 py-3 text-sm" id="cart">Name</th>
                                <th class="px-2 py-3 text-sm" id="cart">Price</th>
                                <th class="px-2 py-3 text-sm" id="cart">Stock</th>
                            </tr>
                        </thead>
                        <tbody id="products-table" class="bg-white divide-slate-200 divide-y ">
                            <tr>
                                <td class="px-4 py-3 text-sm">ID1</td>
                                <td class="px-4 py-3 text-sm">name1</td>
                                <td class="px-4 py-3 text-sm">23</td>
                                <td class="px-4 py-3 text-sm">23</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">ID2</td>
                                <td class="px-4 py-3 text-sm">name1</td>
                                <td class="px-4 py-3 text-sm">23</td>
                                <td class="px-4 py-3 text-sm">23</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">ID3</td>
                                <td class="px-4 py-3 text-sm">name1</td>
                                <td class="px-4 py-3 text-sm">23</td>
                                <td class="px-4 py-3 text-sm">23</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">ID4</td>
                                <td class="px-4 py-3 text-sm">name1</td>
                                <td class="px-4 py-3 text-sm">23</td>
                                <td class="px-4 py-3 text-sm">23</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">ID5</td>
                                <td class="px-4 py-3 text-sm">name1</td>
                                <td class="px-4 py-3 text-sm">23</td>
                                <td class="px-4 py-3 text-sm">23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card col mt-4 p-3">
                    <h2 class="mb-3">
                        <span>🛒 ตะกร้าสินค้าของ K.สมศักดิ์</span>
                    </h2>
                    <table class="table" >
                        <thead>
                            <tr >
                                <th class="px-2 py-3 text-sm" id="cart">Product</th>
                                <th class="px-2 py-3 text-sm" id="cart">Quantity</th>
                            </tr>
                        </thead>
                        <tbody id="userBuy">
                            <tr>
                                <td class="px-4 py-3 text-sm">Product1</td>
                                <td class="px-4 py-3 text-sm">quantity1</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">Product2</td>
                                <td class="px-4 py-3 text-sm">quantity2</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">Product3</td>
                                <td class="px-4 py-3 text-sm">quantity3</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">Product4</td>
                                <td class="px-4 py-3 text-sm">quantity4</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm">Product5</td>
                                <td class="px-4 py-3 text-sm">quantity5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <button class="btn btn-primary btn-lg" id="button1">ประมวลผลคำสั่งซื้อ</button>
            </div>
        </div>
        <div class="container card col ms-3 mt-3 me-5" id="cal">
            <div class="text-center m-3 align-content-baseline justify-content-xxl-center p-5" id="nullcal">
                    <h4>ผลลัพธ์การประมวลผล</h4>
                    <p>ผลลัพธ์จะแสดงที่นี่หลังจากกดปุ่ม "ประมวลผลคำสั่งซื้อ"</p>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 101, name: 'หูฟังบลูทูธ Sony', category: 'Electronics', price: 4590, stock: 15 },
        { id: 102, name: 'คีย์บอร์ด Mechanical', category: 'Electronics', price: 2800, stock: 8 },
        { id: 201, name: 'หนังสือ The Pragmatic Programmer', category: 'Books', price: 850, stock: 30 },
        { id: 202, name: 'หนังสือ Clean Code', category: 'Books', price: 799, stock: 0 },
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

    const productsTableBody = document.getElementById("products-table");
    const UserProducts = document.getElementById("userBuy");
    const buttonCal = document.getElementById("button1");
    const resultBox = document.getElementById("cal");

    const loadData = () => {
        productsTableBody.innerHTML = products.map(
            (item) =>
                `<tr>
                    <th>${item.id}</th>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td class="${item.stock === 0 ? 'text-danger fw-bold' : ''}">${item.stock}</td>
                </tr>`
        ).join("");

        UserProducts.innerHTML = user.shoppingCart.map((item) => {
            return `<tr>
                        <td>${item.productId}</td>
                        <td>${item.quantity}</td>
                    </tr>`;
        }).join("");
    };

    buttonCal.addEventListener("click", () => {
    let total = 0;
    let outOfStockItems = [];
    
    if (buttonCal.innerText === "เริ่มใหม่") {
        location.reload();
        return;
    }
    

    let systemLogHTML = `
        <h5 class="mt-4 ms-2 fw-semibold">ใบสรุปคำสั่งซื้อของคุณ สมศักดิ์</h5>
        <hr>
        <h6>System Log:</h6>
    `;

    let purchaseHTML = `
        <h6 class="mt-3">รายการสินค้าที่พร้อมจัดส่ง:</h6>
    `;

    let availableItems = [];
    user.shoppingCart.forEach(cartItem => {
        const product = products.find((p) => p.id === cartItem.productId);
        if (product) {
            if (product.stock >= cartItem.quantity) {
                availableItems.push({
                    name: product.name,
                    price: product.price,
                    quantity: cartItem.quantity,
                    total: product.price * cartItem.quantity
                });
            } else {
                outOfStockItems.push(product.name);
            }
        }
    });

    availableItems.sort((a, b) => b.price - a.price);

    availableItems.forEach(item => {
        total += item.total;
        purchaseHTML += `
            <li class="border rounded-2 d-flex justify-content-between m-1 p-2" id="listItem">
                <div>
                    <span class="fw-semibold">${item.name}</span><br>
                    <p class="text-secondary">${item.price.toLocaleString()} X ${item.quantity}</p>
                </div>
                <span class="fw-semibold align-content-center">${item.total.toLocaleString()} บาท</span>
            </li>
        `;
    });

    const allItemsOver1000 = user.shoppingCart.every(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        return product && product.price > 1000;
    });

    const HasBookStock = user.shoppingCart.some(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        return product && product.name.includes("หนังสือ");
    });


    purchaseHTML += `
    <div class="row">
        <div class="col border m-3 p-2 rounded-2 align-content-center" id="boxTotal">
            <p class="text-center fw-semibold text-primary-emphasis">ยอดรวมสุทธิ</p>
            <h2 class="text-center text-primary-emphasis"><strong>${total.toLocaleString()} บาท</strong></h2>
        </div>
        <div class="col border m-3 p-2 text-center rounded-2 align-content-center">
        <h6>Cart Insights</h6>
        <div class="text-start mt-3">
            <p>
                สินค้าทุกชิ้นราคาตั้งแต่ 1,000 บาทขึ้นไป:
                <span class="${allItemsOver1000 ? 'text-success fw-bold' : 'text-danger fw-bold'}">
                    ${allItemsOver1000 ? 'ใช่' : 'ไม่ใช่'}
                </span>
            </p>
            <p>
                มีสินค้าหมวดหนังสือหรือไม่:
                <span class="${HasBookStock ? 'text-success fw-bold' : 'text-danger fw-bold'}">
                    ${HasBookStock ? 'ใช่' : 'ไม่ใช่'}
                </span>
            </p>
        </div>
    </div>

    </div>
    `;

    if (outOfStockItems.length > 0) {
        systemLogHTML += `
            <div class="text-blcack border-start p-2 border-warning border-3 text-warning-emphasis" id="Slog">
                ⚠️สินค้า "${outOfStockItems.map(name => ` ${name}`).join("<br>")}" ไม่พร้อมจำหน่าย (อาจจะหมดสต็อก)
            </div>
        `;
    } else {
        systemLogHTML += `<p class="text-success">ทำรายการสำเร็จ ไม่มีสินค้าหมด</p>`;
    }
    buttonCal.innerText = "เริ่มใหม่";
    const resultHTML = systemLogHTML + purchaseHTML;
    resultBox.innerHTML = resultHTML;
    });

    loadData();
});
</script>

</body>
</html>
