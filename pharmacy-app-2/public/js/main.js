document.addEventListener("DOMContentLoaded", () => {
  const cartCountSpan = document.getElementById("cart-count");

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    const productGrid = document.querySelector(".product-grid");

    function fetchAndRenderProducts() {
      fetch("/api/products")
        .then((res) => res.json())
        .then((products) => {
          productGrid.innerHTML = "";
          products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                            <img src="${product.imageUrl}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p><strong>${product.price} บาท</strong></p>
                            <button class="add-to-cart" data-id="${product.id}">เพิ่มลงตะกร้า</button>
                        `;
            productGrid.appendChild(productCard);
          });
        });
    }

    fetchAndRenderProducts();
  }
  if(window.location.pathname === "/admin" ||
    window.location.pathname === "/admin/"
  ){
    const adminTableBody = document.querySelector("#admin-table tbody");

    function fetchAndRenderAdminProducts(){
      fetch("/admin/api/products")
        .then((res) => res.json())
        .then((products) => {
          adminTableBody.innerHTML = "";
          products.forEach((product) => {
            const productCard = document.createElement("tr");
            productCard.innerHTML = `
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.price} บาท</td>
                            <td>${product.stock}</td>
                            <td>
                              <button class="add-btn" data-id="${product.id}">แก้ไข</button>
                              <button class="delete-btn" data-id="${product.id}">ลบ</button>
                            </td>
                        `;
            adminTableBody.appendChild(productCard);
          });
        });
    }
    fetchAndRenderAdminProducts();
  }
});
