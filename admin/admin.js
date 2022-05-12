if (localStorage.getItem('allProducts') == undefined) var allProducts = [];
else allProducts = JSON.parse(localStorage.getItem('allProducts'));
function Product(name, category, imageUrl, price, gender, sold = false) {
    this.name = name;
    this.category = category;
    this.imageUrl = imageUrl;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

document.getElementById('addP').addEventListener("submit", function () {
    event.preventDefault();
    var prod = new Product(document.getElementById('name').value,
        document.getElementById('category').value,
        document.getElementById('image').value,
        document.getElementById('price').value,
        document.getElementById("gender").value,
    )
    allProducts.push(prod);
    console.log(allProducts);
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
})