let carrier = document.getElementById("carrier")
fetch("https://dummyjson.com/products")
    .then(result => result.json())
    .then(data => {
        let products = data.products
        let productHTML = '';
        products.forEach(prod => {
            productHTML += ` <div class="prod">
            <div id="root">
             <img src ="${prod.thumbnail}" width="180" height="120"
             <div><p id="color">${prod.brand}</p></div>
             </div>
            </div>`
        });
        carrier.innerHTML += productHTML;
        console.log(productHTML);
    })