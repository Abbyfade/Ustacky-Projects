var pic = document.getElementById('pricing1');
var item = document.getElementById('price1');
var addcart = document.getElementById('add-cart1');
var itemno = document.getElementById('item-no');
var itemcount = document.getElementById('item-count');
var ima = document.getElementById("cart");

pic.onmouseover = function(){
    item.style.display = "block";
}

pic.onmouseleave = function(){
    item.style.display = "none";
}

addcart.onclick = function(){
    itemcount.innerText = parseInt(itemno.innerText, 10) + 1;

}

