allProducts = JSON.parse(localStorage.getItem('allProducts'));
var counter = document.createElement('h1');

counter.innerText = "Total Products: " + allProducts.length;
counter.setAttribute("id", "counter")
document.getElementById('container').append(counter);

allProducts.forEach((element,i) => {
    var card = document.createElement('div');

    var name = document.createElement('h3');
    name.innerText = element.name;

    var image = document.createElement('img');
    image.setAttribute("src", element.imageUrl);

    var price = document.createElement('p');
    price.innerText = "$ " + element.price;

    var category = document.createElement('p');
    category.innerText = "Category: " + element.category;

    var gender = document.createElement("p");
    gender.innerText = "Gender: " + element.gender;

    var removeBT = document.createElement("button");
    removeBT.setAttribute("id", "remove");
    removeBT.innerText = "Remove";
    removeBT.addEventListener("click",function(){
        allProducts.splice(i,1);
        localStorage.setItem("allProducts",JSON.stringify(allProducts));
        location.reload();
    });
    var soldBT = document.createElement("button");
    soldBT.setAttribute("id", "sold");
    soldBT.innerText = "Sold";
    if (element.sold == false) soldBT.style.backgroundColor="green";
    else soldBT.style.backgroundColor="red";
    soldBT.addEventListener("click",function(){
        if(element.sold===false){
            element.sold=true;
            soldBT.style.backgroundColor = "red";
        }
        else {
            element.sold=false;
            soldBT.style.backgroundColor = "green";
        }
    })

    card.append(image, name, category, price, gender, removeBT, soldBT);

    document.getElementById('container').append(card);

});