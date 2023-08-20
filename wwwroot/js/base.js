function addToCart() {

    var products_cart = [];
    var product_index;

    var product_id = this.getAttribute("data-id");

    if ("products_cart" in sessionStorage) {
        products_cart = JSON.parse(sessionStorage.getItem("products_cart"));
        product_index = products_cart.findIndex(product => {
            return product.id === product_id;
        })

        if (product_index !== -1) {
            products_cart[product_index].quantity = products_cart[product_index].quantity + 1;
        }

        else {
            products_cart.push({ id: product_id, quantity: 1 });
        }
    }

    else {
        products_cart.push({ id: product_id, quantity: 1 });
    }

    sessionStorage.setItem("products_cart", JSON.stringify(products_cart));
    console.log(sessionStorage.getItem("products_cart"))
}

function deleteFromCart(){

    var product_price = parseInt(this.getAttribute("data-price").split("$")[1]);
    var product_quantity = parseInt(this.getAttribute("data-quantity"));
    var product_id = this.getAttribute("data-id"); // get delete id
    var order_product_dom = this.parentNode; // get order_product box
    order_product_dom.remove() 

    products_cart = JSON.parse(sessionStorage.getItem("products_cart"));
    products_cart =  products_cart.filter((product_cart) => {
        return product_cart.id != product_id;
    }); // filter out the deleted one

    sessionStorage.setItem("products_cart", JSON.stringify(products_cart));

    var total_price = document.getElementById("total_price");
    var cart_price = sessionStorage.getItem("cart_price") - (product_price * product_quantity);
    total_price.textContent = "Total Price: $" + cart_price;
    
    sessionStorage.setItem("cart_price", cart_price);

}

function displayCategoryProducts(){

    var category_id;
    if (isNaN(parseInt(this.getAttribute("data-id")))){
        category_id = this.getAttribute("data-id");
    }
    else{
        category_id = parseInt(this.getAttribute("data-id"));
    }

    var shopping_page = document.getElementById("products-container");
    var display_products;
    var each_product;
    var row_container;

    // featured products
    if(category_id == "ft"){
        display_products = featured_products;
    }

    // bestseller products
    else if(category_id == "bs"){
        display_products = bestseller_products;
    }

    // recent products
    else if(category_id == "rc"){
        display_products = recent_products;
    }

    // overall products
    else if (category_id == "ap") {
        display_products = products;
    }
    
    // specific products
    else{
        display_products = products.filter((product) => 
            product.category_id === category_id
        );
    }

    shopping_page.innerHTML = "";

    for (let [index, value] of display_products.entries()) {

        if(value.category_id === undefined){
            each_product = products.find(product => product.id === value); // value here is id
        }
        else{
            each_product = value; // value here is whole obj
        }

        if (index % 3 == 0) {

            row_container = document.createElement("div");
            row_container.classList.add("row-container", "d-flex", "flex-row", "align-items-center");
        }

        var product_box_container = document.createElement("div");
        product_box_container.classList.add("shopping-product-box-container", "d-flex", "flex-column", "align-items-center");

        var product_box = document.createElement("div");
        product_box.classList.add("product-box", "d-flex", "flex-column", "align-items-center");

        var product_img = document.createElement("img");
        product_img.src =  each_product.img;
        product_img.width =  each_product.resolution[0];
        product_img.height =  each_product.resolution[1];

        var product_content = document.createElement("div")
        product_content.classList.add("content");

        var product_name = document.createElement("h4");
        product_name.textContent =  each_product.name;

        var product_description = document.createElement("p");
        product_description.textContent =  each_product.desc;

        var product_price = document.createElement("h5");
        product_price.textContent =  each_product.price;

        var product_button = document.createElement("button");
        product_button.classList.add("btn-cart", "btn", "btn-primary", "w-100");
        product_button.setAttribute("data-id",  each_product.id)
        product_button.textContent = "Add to Cart";

        product_content.appendChild(product_name);
        product_content.appendChild(product_description);
        product_content.appendChild(product_price);

        product_box.appendChild(product_img);
        product_box.appendChild(product_content);
        product_box.appendChild(product_button);
        
        product_box_container.appendChild(product_box)

        row_container.appendChild(product_box_container);

        if (index % 3 == 1 || index == display_products.length - 1) {
            shopping_page.appendChild(row_container);
        }

    }

    var btn_carts = document.getElementsByClassName("btn-cart");
    for (let btn_cart of btn_carts) {
        btn_cart.addEventListener("click", addToCart);
    }
}