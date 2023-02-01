window.addEventListener("DOMContentLoaded", function() {
    let products = document.querySelectorAll(".product"),
    buttons = document.querySelectorAll("button"),
    openBtn = document.querySelector(".open"),
    shop = this.document.querySelector(".shop");

    function createCart(){
        let cart = document.createElement("div"),
            text = document.createElement("h2"),
            field = document.createElement("div"),
            closeBtn = document.createElement("button")
        
        cart.classList.add("cart")
        field.classList.add("cart-field")
        closeBtn.classList.add("close")

        // cart.style.display = "block";

        text.textContent = "My own new korzina"
        closeBtn.textContent = "Closing"

        document.body.appendChild(cart)
        cart.appendChild(text)
        cart.appendChild(field)
        cart.appendChild(closeBtn)
    }
    createCart()

    let cart = document.querySelector(".cart")
    let field = document.querySelector(".cart-field")
    let closeBtn = document.querySelector(".close")
    openBtn.addEventListener("click", function(){
        cart.style.display = "block"
    })
    closeBtn.addEventListener("click", function(){
        cart.style.display = "none";
    })

    buttons.forEach(function(thing, i){
        thing.addEventListener("click", function(){
            let cloneThing = products[i].cloneNode(true);
            let btn = cloneThing.querySelector("button")

            btn.remove();
            products[i].remove();
            field.appendChild(cloneThing);

            cloneThing.addEventListener("click", function(){
                cloneThing.remove();
                shop.appendChild(products[i])
            })
        })
    })
})