var prodList = "";
var prod = document.getElementById("list");
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger"); //trigger cart
var products = [
        {
            name: "Iphone10",
            brand: "Apple",
            price: "$1280",
            img : "img/products/iphoneX.png",
            description : "iPhone X introduces a revolutionary design with a stunning all-screen display that precisely follows the curve of the device, clear to the elegantly rounded corners."
        },
        {
            name: "Iphone11",
            brand: "Apple",
            price: "$1300",
            img : "img/products/iphone11.png",
            description : "iPhone 11 in September 2019, and while Apple's flagship lineup two years later now consists of the iPhone 13, 13 Pro, 13 mini, and 13 Pro Max, the iPhone 11 is still sold as a lower-cost option priced starting at $499."
        },
        {
            name: "Iphone12",
            brand: "Apple",
            price: "$1480",
            img : "img/products/iphone12.png",
            description : "The iPhone 12 and iPhone 12 Mini (stylized and marketed as iPhone 12 mini) are a range of smartphones designed, developed, and marketed by Apple Inc."
        },
        {
            name: "Iphone13",
            brand: "Apple",
            price: "$1580",
            img : "img/products/iphone13.png",
            description : "The iPhone 13 is the replacement for the iPhone 12. Both of the new iPhone 13 models are nearly identical in design to the iPhone 12 models, featuring flat edges, an aerospace-grade aluminum enclosure, a glass back, and a slight increase in thickness (7.65mm)."
        },
        {
            name: "Apple watch 3",
            brand: "Apple",
            price: "$500",
            img : "img/products/apple-watch-3.png",
            description : "Apple Watch Series 3 brings built-in cellular, powerful new health and fitness enhancements. The freedom to go with just your watch. ... Apple Watch Series 3 comes in two models, one with GPS and cellular, and one with GPS, both featuring a 70 percent faster dual-core processor and new wireless chip."
        },
        {
            name: "Apple watch 4",
            brand: "Apple",
            price: "$600",
            img : "img/products/apple-watch-4.png",
            description : "The Apple Watch Series 4 runs Apple's new WatchOS 5 operating system. It comes along with a variety of improvements."
        },
        {
            name: "Apple watch 5",
            brand: "Apple",
            price: "$700",
            img : "img/products/apple-watch-5.png",
            description : "Apple Watch Series 5 · Released 2019, September · 47.8g, 10.7mm thickness · watchOS 6.0, up to 8.0 · 32GB storage."
        },
        {
            name: "Apple watch 6",
            brand: "Apple",
            price: "$800",
            img : "img/products/apple-watch-6.png",
            description : "Our original house roast is unmistakably Union: bold intensity infused with a deep natural sweetness. Expertly blended and roasted for your early morning filter brew."
        },
    ];


window.onload = function() {
    console.log("open window.onload")

    for (var i=0; i < products.length; i++) {
    	prodList += `<div class="card">
        <div class="card-header">
            <img 
				id="img-product-list"
                class="img-card"
                src="${products[i].img}"
                >
        </div>
        <div id="card" class="card-body">
            <p class="prodName name" id="title-body-card">&nbsp;&nbsp;
            ${products[i].name}</p>
            <br/>
            <div class="inline-btn">
            <p class="prodPrice price" id="price-product-card">  ${products[i].price}</p>
           
            </div>
        </div>
        <button class="buttonAddToCart buttonRadius addToCart">Order</button> <br>
    </div>`;
    	prod.innerHTML = prodList;
    }

    //ADD TO CART
    ready()

} //end


// ADD TO CART FUNCTIONS
function ready() {
console.log("Ready")
var addToCartButtons = document.getElementsByClassName('addToCart')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
    }
}

function addToCartClicked(event) {
var button = event.target

var shopItem = button.parentElement
console.log(shopItem)
console.log(shopItem.getElementsByClassName('prodName')[0].innerText)
var title = shopItem.getElementsByClassName('prodName')[0].innerText
var price = shopItem.getElementsByClassName('prodPrice')[0].innerText
var imageSrc = shopItem.getElementsByClassName('img-card')[0].src
// var desc = shopItem.getElementsByClassName('prodDesc')[0].innerText
addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc) {
var cartRow = document.createElement('div')
cartRow.classList.add('cartRow')
var cartItems = document.getElementsByClassName('cart-items')[0]

var cartRowContents = `
    <img class="cartItemImg" src="${imageSrc}">
    <p>
    <span class="cartTitleDescPrice" style="font-weight: bold;">Item Name</span><br>
    ${title}<br><br>
    </p>
    <p><span class="cartTitleDescPrice" style="font-weight: bold;">Price</span><br>
    ${price}<br><br>
    <button class="btnRemove buttonRadius">Remove</button></p>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)

    alert(title +" successfully added in your cart!");
}
	

//MODAL
var modal = document.getElementById("myModal"); //Get the modal
var btn = document.getElementById("myBtn"); //Get the cart button that opens the modal
var span = document.getElementsByClassName("close")[0]; //Get the <span> element that closes the modal

btn.onclick = function() { //onclick event get modal
  modal.style.display = "block";
}

span.onclick = function() { //when user clicks on ](x), close modal
  modal.style.display = "none";
}

window.onclick = function(event) { //when user clicks anywhere outside of modal, close modal
  if (event.target == modal) {
    modal.style.display = "none";
  }
}