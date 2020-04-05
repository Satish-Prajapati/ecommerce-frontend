//Jquery spinner
$(document).ready(function () {
	$(".count").prop("disabled", true);
	$(document).on("click", ".plus", function () {
		$(".count").val(parseInt($(".count").val()) + 1);
	});
	$(document).on("click", ".minus", function () {
		$(".count").val(parseInt($(".count").val()) - 1);
		if ($(".count").val() == 0) {
			$(".count").val(1);
		}
	});
});

// Function to update localstorage everytime when a product is added to cart
// This solves the issue of data sync between tabs
function updateLS() {
	ls = localStorage.getItem("cart");
	if (ls === null) {
		cart = [];
	} else {
		cart = JSON.parse(ls);
	}
}

//Function to generate alert after a product is added to cart
function cartAlert() {
	document.getElementById(
		"cart-alert"
	).innerHTML = `<div class="alert alert-success alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Product is added to the cart <a href="../cart.html"><strong> View Cart</strong></a>.
  </div>`;
}

// Adding products to cart
document.getElementById("cart").addEventListener("click", (e) => {
	e.preventDefault();
	//Update localstorage
	updateLS();
	//Create a alert
	cartAlert();
	//Getting all the required values
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
	cart.forEach((item) => {
		//Check if product already exist with same size
		//If product already exist with same size then just update quantity and subtotal
		if (item.productName === productName && item.size === size) {
			item.quantity += quantity;
			item.subTotal = item.quantity * item.productPrice;
			//set flag to 0 when product already exist with same size
			flag = 0;
		}
	});
	//Add new product or product with different size
	if (flag === 1) {
		console.log(flag);
		cart.push({
			//Assign each product a unique ID
			id: uuidv4(),
			productName,
			productPrice,
			img,
			size,
			quantity,
			subTotal: productPrice * quantity,
		});
	}
	e.target.form.qty.value = 1;
	//Saving cart values to localstorage
	localStorage.setItem("cart", JSON.stringify(cart));
	cart = JSON.parse(localStorage.getItem("cart"));
	//Update cart count badge
	cartCount();
});
