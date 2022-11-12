let ctr_btn = document.querySelectorAll(".ctr");
let inputs = document.querySelectorAll(".inp");
let notif = document.querySelector(".notif");
let cart = document.querySelector(".cart");
let howMuch = document.querySelector(".how_much");
let item = document.querySelector(".item");
let bought = document.querySelector(".btn_buy");
let buy_now = document.querySelector(".open_cart");
let number = 0;

ctr_btn.forEach((ctrButton) => {
	ctrButton.addEventListener("click", () => {
		let parentCtr = ctrButton.parentElement;
		let child = parentCtr.children[1];
		if (ctrButton.className == "ctr plus") {
			if (child.value === "") {
				child.value = "1";
			} else {
				child.value++;
			}
		} else {
			if (child.value > "1") {
				child.value--;
			} else {
				child.value = null;
			}
		}
		if (child.value >= "1") {
			notif.style.display = "inline";
			cart.addEventListener("click", () => {
				window.open("../Pages/buynow.html", "_self");
			});
			buy_now.addEventListener("click", () => {
				window.open("../Pages/buynow.html", "_self");
			});
			buy_now.style.transform = `translateY(0%)`;
		} else {
			notif.style.display = "none";
			buy_now.style.transform = `translateY(300%)`;
		}
		if (child.value >= "1") {
			number++;
			localStorage.setItem("number", number);
		}
	});
});

const replace = () => {
	let num = localStorage.getItem("number");
	if (num == 1) {
		item.textContent = "item";
	} else item.textContent = "items";
	howMuch.textContent = num;
};

const rem = () => {
	localStorage.removeItem("number");
};

if (bought)
	bought.addEventListener("click", () => {
		bought.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
		setTimeout(() => {
			window.open("../Pages/thanks.html", "_self");
		}, 3000);
	});
