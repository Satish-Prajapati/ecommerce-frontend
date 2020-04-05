// component for nav bar
Vue.component("navcomponent", {
	template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container">
		<a class="navbar-brand" href="../index.html">KATANA</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active">
					<a class="nav-link mx-lg-2" href="../index.html">HOME</a>
				</li>
				<li class="nav-item mx-lg-2">
					<a class="nav-link" href="#">PRODUCT</a>
				</li>
				<li class="nav-item mx-lg-2">
					<a class="nav-link" href="#">ABOUT US</a>
				</li>
				<li class="nav-item mx-lg-2">
					<a class="nav-link" href="#">CONTACT US</a>
				</li>
				<li class="nav-item mr-lg-5">
					<a class="nav-link" href="../cart.html"
						><i class="fa fa-shopping-cart"
							><span class="badge"><sup>0</sup></span></i
						></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>`,
});
var vm = new Vue({
	el: "#nav_bar",
});

// component for product list
Vue.component("productcomponent", {
	template: `<div class="container-fluid">
	<div class="text-center mt-5 mb-4">
		<p class="title-sm">BEST SELLER</p>
	</div>
	<div class="row text-center m-sm-auto">
		<div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
			<a href="capri-nuvola.html" class="a-style">
				<div class="card product-card p-1">
					<img
						class="card-img-top"
						src="../images/product/capri-nuvola/1.jpg"
						alt=""
					/>
					<div class="card-body px-1">
						<p class="product-title">
							CAPRI NUVOLA
						</p>
						<p class="product-price">
							248$
						</p>
						<a href="capri-nuvola.html"
							><button class="btn btn-md dark-btn">
								View Product
							</button></a
						>
					</div>
				</div>
			</a>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
			<a href="capri-triple.html" class="a-style">
				<div class="card product-card p-1">
					<img
						class="card-img-top"
						src="../images/product/capri-triple/1.jpg"
						alt=""
					/>
					<div class="card-body px-1">
						<p class="product-title">
							CAPRI TRIPLE
						</p>
						<p class="product-price">
							248$
						</p>
						<a href="capri-triple.html"
							><button class="btn btn-md dark-btn">
								View Product
							</button></a
						>
					</div>
				</div>
			</a>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
			<a href="capri-perla.html" class="a-style">
				<div class="card product-card p-1">
					<img
						class="card-img-top"
						src="../images/product/capri-perla/0.jpg"
						alt=""
					/>
					<div class="card-body px-1">
						<p class="product-title">
							CAPRI PERLA
						</p>
						<p class="product-price">
							248$
						</p>
						<a href="capri-perla.html"
							><button class="btn btn-md dark-btn">
								View Product
							</button></a
						>
					</div>
				</div>
			</a>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-10 mx-auto">
			<a href="capri-fiore.html" class="a-style">
				<div class="card product-card p-1">
					<img
						class="card-img-top"
						src="../images/product/capri-fiore/1.jpg"
						alt=""
					/>
					<div class="card-body px-1">
						<p class="product-title ">
							CAPRI FIORE
						</p>
						<p class="product-price">
							248$
						</p>
						<a href="capri-fiore.html"
							><button class="btn btn-md dark-btn">
								View Product
							</button></a
						>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>`,
});
var vm1 = new Vue({
	el: "#products",
});

// component for footer
Vue.component("footercomponent", {
	template: `<footer class="page-footer grey-bg">
	<div class="container">
		<div class="footer-copyright text-center py-3">
			© 2020 KATANA
		</div>
	</div>
</footer>`,
});
var vm2 = new Vue({
	el: "#footer_component",
});
