let products = [];
let currentIndex = -1;

document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    if (currentIndex === -1) {
      products.push({ name: productName, price: productPrice }); // Tambah produk baru
    } else {
      products[currentIndex] = { name: productName, price: productPrice }; // Update produk yang ada
      currentIndex = -1; // Reset index setelah edit
    }

    document.getElementById("productForm").reset(); // Reset form
    renderProducts(); // Perbarui tampilan produk
  });

function renderProducts() {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = ""; // Kosongkan isi tabel
  products.forEach((product, index) => {
    const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
                    <button class="btn btn-danger" onclick="deleteProduct(${index})">Hapus</button>
                </td>
            </tr>
        `;
    tbody.innerHTML += row; // Tambahkan baris baru ke tabel
  });
  document.getElementById(
    "productCount"
  ).innerText = `Jumlah Produk: ${products.length}`;
}

function editProduct(index) {
  currentIndex = index; // Simpan indeks produk yang diedit
  document.getElementById("productName").value = products[index].name; // Isi form dengan data produk yang aku inginkan
  document.getElementById("productPrice").value = products[index].price;
}

function deleteProduct(index) {
  products.splice(index, 1); // Hapus produk dari array
  renderProducts(); // Perbarui tampilan produk
}
