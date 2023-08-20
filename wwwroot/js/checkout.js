window.addEventListener("load", function(){
    var table_checkout = document.getElementById("table-checkout");
    var order_product;
    var new_product_obj;
    for(let cart_product of JSON.parse(sessionStorage.getItem("products_cart"))){

        var tr = document.createElement("tr");
        order_product = products.find(product => product.id === parseInt(cart_product.id));
        var total = "$" + parseInt(order_product.price.split("$")[1]) * cart_product.quantity;
        new_product_obj = {name: order_product.name, quantity: cart_product.quantity, price: order_product.price, total: total}
        
        for (var key in new_product_obj){
            
            var td = document.createElement("td");
            td.textContent = new_product_obj[key];
            tr.appendChild(td);
        }

        table_checkout.appendChild(tr);
    
    }

    var tr_footer = document.createElement("tr");
    var td_text = document.createElement("td");
    td_text.textContent = "Total: "
    td_text.colSpan = "3";
    var td_total = document.createElement("td");
    td_total.textContent = "$" + sessionStorage.getItem("cart_price");
    tr_footer.appendChild(td_text);
    tr_footer.appendChild(td_total);
    table_checkout.appendChild(tr_footer);
})

function checkoutNext(e) {
    var current_form = e.target.parentNode.parentNode;
    var next_form = current_form.nextElementSibling;
    current_form.classList.add("d-none");
    next_form.classList.remove("d-none");
}

function checkoutBack(e) {
    var current_form = e.target.parentNode.parentNode;
    var previous_form = current_form.previousElementSibling;
    current_form.classList.add("d-none");
    previous_form.classList.remove("d-none");
}

function checkoutSubmit(){
    sessionStorage.removeItem("products_cart");
}