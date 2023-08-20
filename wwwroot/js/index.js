window.addEventListener("load", function () {

    var btn_carts = document.getElementsByClassName("btn-cart");
    for (let btn_cart of btn_carts) {
        btn_cart.addEventListener("click", addToCart);
    }

    var menu_items = document.querySelectorAll(".menu-height > li")
    for(let menu_item of menu_items){
        menu_item.addEventListener("click",function(event){
            
            var submenu = event.target.nextSibling;
            if (submenu.classList.contains("d-none")){
                var submenu_items = document.getElementsByClassName("sub-menu");
                for(submenu_item of submenu_items){
                    if(!submenu_item.classList.contains("d-none")){
                        submenu_item.classList.add("d-none")
                    }
                }

                submenu.classList.remove("d-none")
            }
            else{
                submenu.classList.add("d-none")
            }
        })
    }
})

window.addEventListener("scroll",function(){

    var menu_bar = document.getElementsByClassName("menu-height")[0];
    var menu_items = document.querySelectorAll(".menu-height > li > a");

    if (this.window.scrollY > 100) {
        menu_bar.style.position = "fixed";
        menu_bar.style.zIndex = 999;
        menu_bar.style.marginTop = 0;

        for (let menu_item of menu_items) {

            if (menu_item.getAttribute("href") == "#") {

                menu_item.style.cursor = "pointer";
                menu_item.removeAttribute("href")
            }
        }
    }
    else {

        menu_bar.style.position = "static";
        for (let menu_item of menu_items) {

            if (!menu_item.hasAttribute("href")) {

                menu_item.setAttribute("href","#")
            }
        }
    }
})