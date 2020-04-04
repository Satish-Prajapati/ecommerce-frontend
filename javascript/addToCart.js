$(document).ready(function() {
	$(".count").prop("disabled", true);
	$(document).on("click", ".plus", function() {
		$(".count").val(parseInt($(".count").val()) + 1);
	});
	$(document).on("click", ".minus", function() {
		$(".count").val(parseInt($(".count").val()) - 1);
		if ($(".count").val() == 0) {
			$(".count").val(1);
		}
	});
});

function updateLS() {
	ls = localStorage.getItem("cart");
	if (ls === null) {
		cart = [];
	} else {
		cart = JSON.parse(ls);
	}
}
function cartAlert() {
	document.getElementById(
		"cart-alert"
	).innerHTML = `<div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Product is added to the cart <a href="/cart.html"><strong> View Cart</strong></a>.
  </div>`;
}

document.getElementById("cart").addEventListener("click", e => {
	e.preventDefault();
	updateLS();
	cartAlert();
	const quantity = Number(e.target.form.qty.value);
	const size = Number(e.target.form.size.value);
	const img = document.getElementById("productImg").src;
	const productName = document.getElementById("product-name").innerText;
	const price = document
		.getElementById("product-price")
		.innerText.replace("$", "");
	// const productPrice = price.replace(/[^-.0-9]/g, "");
	const productPrice = Number(price);
	let flag = 1;
	// console.log(img);
	cart.forEach(item => {
		if (item.productName === productName && item.size === size) {
			item.quantity += quantity;
			item.subTotal = item.quantity * item.productPrice;
			flag = 0;
		}
	});
	if (flag === 1) {
		console.log(flag);
		cart.push({
			id: uuidv4(),
			productName,
			productPrice,
			img,
			size,
			quantity,
			subTotal: productPrice * quantity
		});
	}
	e.target.form.qty.value = 1;
	localStorage.setItem("cart", JSON.stringify(cart));
	cart = JSON.parse(localStorage.getItem("cart"));
	cartCount();
});
