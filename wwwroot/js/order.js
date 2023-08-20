function checkout(){
    if (sessionStorage.getItem("products_cart") == undefined || sessionStorage.getItem("products_cart") == "[]"){
       alert("The Cart is Empty")
    }
    else{
        window.location.href = "checkout.html"
    }
}