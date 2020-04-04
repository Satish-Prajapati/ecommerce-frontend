//Function for calculating subtotal
let cal = () => {
	let total = 0;
	cart.forEach((item) => {
		total += item.subTotal;
	});
	return total;
};

//Function for generating cart html
const htmlgen = () => {
	let gen;
	let cartGen = document.getElementById("cartgen");
	if (cart.length !== 0) {
		cart.forEach((item) => {
			gen += `<div class="row text-center">
			<div class="col-12 col-md-5">
				<div class="row">
					<div class="col-6">
						<img
							src="${item.img}"
							height="160px"
							alt=""
						/>
					</div>
					<div class="col-6 my-auto">
						<h4>${item.productName}</h4>
						<p>Size: ${item.size} <br />Price: ${item.productPrice}$</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-7">
				<div class="row py-sm-5 py-2">
					<div class="col-3 my-auto">
						<h6>Sub Total: ${item.subTotal}$</h6>
					</div>
					<div class="col-5  my-auto text-center">
					Quantity:
					<input data-id="${item.id}" class="quantity" type="number" min=1 value="${item.quantity}" class="px-2"/>
					</div>
					<div class="col-4 my-auto">
						<button data-id="${item.id}" class="btn dark-btn">REMOVE</button>
					</div>
				</div>
				<div id="error"></div>
			</div>
			
		</div>`;
		});
		cartGen.innerHTML =
			gen +
			`<div class="text-right total pt-sm-3">
				<h2>Total: ${cal()}$</h2>
			</div>`;
		bntevntList();
		inpevntList();
	} else {
		cartGen.innerHTML = `<div class="text-center total p-5">
					<h2>Cart Empty, Please add some item in cart</h2>
				</div>`;
	}

	// cartGen.inner += ``;
};

htmlgen();

//Update cart
function updateCart(id, value) {
	const cartIndex = cart.findIndex((item) => {
		return item.id === id;
	});
	cart[cartIndex].quantity = value;
	// subTotal
	cart[cartIndex].subTotal =
		cart[cartIndex].quantity * cart[cartIndex].productPrice;
	localStorage.setItem("cart", JSON.stringify(cart));
	htmlgen();
}
//Remove cart item
function removeCart(id) {
	const cartIndex = cart.findIndex((item) => {
		return item.id === id;
	});
	cart.splice(cartIndex, 1);
	localStorage.setItem("cart", JSON.stringify(cart));
	cartCount();
	htmlgen();
}

function bntevntList() {
	var cartbtn = document.getElementsByClassName("dark-btn");
	for (let i = 0; i < cartbtn.length; i++) {
		var btn = cartbtn[i];
		btn.addEventListener("click", (e) => {
			removeCart(e.target.dataset.id);
			// 	e.target.parentElement.parentElement.parentElement.parentElement.remove()
		});
	}
}

function inpevntList() {
	const qtyip = document.getElementsByClassName("quantity");
	for (let i = 0; i < qtyip.length; i++) {
		var qty = qtyip[i];
		qty.addEventListener("change", (e) => {
			if (e.target.value > 0) {
				updateCart(e.target.dataset.id, e.target.value);
			} else {
				document.getElementById("error").innerText = "Invalid input";
			}
		});
	}
}
