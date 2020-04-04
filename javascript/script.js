let cart;
let ls = localStorage.getItem("cart");
if (ls === null) {
	cart = [];
} else {
	cart = JSON.parse(ls);
}

function cartCount() {
	document.getElementsByClassName("badge")[0].innerText = `(${cart.length})`;
}
cartCount();

//Script for changing broken images
$("img").on("error", function () {
	$(this).attr("src", "http://satishprajapati.tech/asserts/broken-link.jpg");
});
