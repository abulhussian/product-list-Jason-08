"use strict";
const main = document.querySelector(".main-cont");
const dessertsBill = document.querySelector(".desserts-bill");
const confirmedOrder = document.querySelector(".confirmed-order");

const newOrderBtn = document.querySelector(".new-order-btn");
const orderConfirmCard = document.querySelector(".confirm-order-card");
const emptyCart = document.querySelector(".empty-cart");
const billCart = document.querySelector(".bill-cart");
const confirmOrderBtn = document.querySelector(".confirm-order-btn");
const billCartCountDisplay = document.querySelector(".bill-cart-count");
const grandTotal = document.querySelector(".grandtotal");
const orderConfirmTotal = document.querySelector(".order-confirm-total");
const body = document.querySelector("body");

const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    id: 1,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    id: 2,
  },

  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    id: 3,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    id: 4,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    id: 5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    id: 6,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    id: 7,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    id: 8,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    id: 9,
  },
];

let row = "";
let desserts = "";
let dessertsOrder = "";

data.forEach((product) => {
  row += `<div class="flex flex-col w-full">
          <div class="flex flex-col justify-center items-center">
            <div class="dImg-${product.id} overflow-hidden rounded-md mImg-${
    product.id
  }">
              <img src="${product.image.desktop}"
                class="rounded-md hover:scale-110 border-2 transition-all duration-700 ease-in-out md:block hidden ">
              <img src="${product.image.mobile}"
                class=" rounded-md hover:scale-110 border-2 transition-all duration-700 ease-in-out md:hidden block ">
            </div>
            <!-- cart button -->
            <div
              class="add-to-cart-${
                product.id
              } flex flex-row gap-2 cursor-pointer -translate-y-1/2 text-xs bg-white border border-red-600 text-Rose500 rounded-full px-2 py-2 w-2/3 justify-center items-center ">
              <button id="btn-cart" class="flex items-center gap-1 ">
                <!-- cart svg -->
                <img src="./assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart" class="w-3 h-3">
                Add to cart
              </button>
            </div>

            <!-- quantity button -->
            <button
              class=" quantity-btn-${
                product.id
              } hidden bg-Red flex  flex-row justify-between px-2 items-center  gap-2 -translate-y-1/2 text-white text-xs cursor-pointer   rounded-full  py-2 w-2/4   ">
              <!-- button -->
              <div class="minus-${
                product.id
              } border  border-white w-4 h-4 rounded-full flex justify-center items-center">
                <!-- decrement -->
                <img src="./assets/images/icon-decrement-quantity.svg" alt="" class="${
                  product.id
                } rounded-full w-2 h-2">
              </div>
              <p class="qty-number-${product.id} text-white ">0</p>
              <div class="plus-${
                product.id
              } border border-white w-4 h-4 rounded-full flex justify-center items-center">
                <!-- increment -->
                <img src="./assets/images/icon-increment-quantity.svg" alt="" class="${
                  product.id
                } rounded-full w-2 h-2">
              </div>
            </button>
          </div>
          <!-- name -->
          <p class="${product.id} text-Rose300 text-xs">${product.category}</p>
          <!-- heading -->
          <h1 class="${product.id} text-Rose500 text-sm font-semibold">${
    product.name
  }</h1>
          <!-- price -->
          <p class="${
            product.id
          } text-Red text-sm"> <span>$</span>  ${product.price.toFixed(2)}</p>
        </div>`;

  desserts += ` <!-- item -1 -->
            <div class="adding-to-bill-${
              product.id
            } hidden item-1 flex flex-row justify-between mt-4 max-w-xl  ">
              <div class="quantity-${product.id} flex flex-col">
                <!-- item name -->
                <h1 class="text-Rose900 text-sm md:text-md font-semibold">${
                  product.name
                }</h1>

                <div class="price flex flex-row gap-5 mt-3 ">
                  <!-- quntity -->
                  <p class="qty-number-bill-${product.id} text-Red">0x</p>
                  <!-- price for 1 -->
                  <p class="items-selected-${
                    product.id
                  } text-Rose300">@$${product.price.toFixed(2)}</p>
                  <!-- total price -->
                  <p class="totalPrice-${product.id} text-Rose500">$0.00</p>
                </div>
              </div>
              <!-- cancel svg -->
              <div
                class="image ml-auto w-6 h-6 rounded-full border cancel-img-${
                  product.id
                } hover:border-Rose900 border-Rose500 flex justify-center items-center">
                <!-- img cancel svg -->
                <img src="./assets/images/icon-remove-item.svg" alt="" class="${
                  product.id
                } hover:stroke-Rose900 w-3 h-3">
              </div>
              <!-- line hr -->
            <hr class="mt-3">
            </div>          
 `;
  dessertsOrder += `<div class=" hidden addingto-confirm-${
    product.id
  } flex flex-row justify-between mt-3 ">
  <div class="image-content-${product.id} flex flex-row gap-5 ">
          <!-- image  -->
          <img
            src="${product.image.thumbnail}"
            alt="" class="rounded-md w-14 h-14">
          <div class="quantity-${product.id} flex flex-col">
            <!-- item name -->
            <h1 class=" text-Rose900 text-sm font-semibold">${product.name}</h1>

            <div class="price-${product.id} flex flex-row gap-5 mt-3">
              <!-- quntity -->
              <p class=" number-order-confirm-${product.id} text-Red">0x</p>
              <!-- price for 1 -->
              <p class="order-confirm-price-${
                product.id
              } text-Rose300">@$${product.price.toFixed(2)}</p>

            </div>
          </div>
        </div>
        <div class="price">
          <!-- total price -->
          <p class="confirm-order-total-${product.id} text-Rose500">$0.00</p>
        </div>
      </div>
 `;
});

main.innerHTML = row;
dessertsBill.innerHTML = desserts;
confirmedOrder.innerHTML = dessertsOrder;

let grandTotalValue = 0;
function UpdateGrandTotal() {
  if (grandTotalValue > 0) {
    emptyCart.classList.add("hidden");
    billCart.classList.remove("hidden");
  } else {
    emptyCart.classList.remove("hidden");
    billCart.classList.add("hidden");
  }
  grandTotal.textContent = `$${grandTotalValue.toFixed(2)}`;
  orderConfirmTotal.textContent = `$${grandTotalValue.toFixed(2)}`;
}
function ActionItems(item) {
  const dImg = document.querySelector(`.dImg-${item.id}`);
  const mImg = document.querySelector(`.mImg-${item.id}`);
  const addToCartBtn = document.querySelector(`.add-to-cart-${item.id}`);
  const qtyBtn = document.querySelector(`.quantity-btn-${item.id}`);
  const minusBtn = document.querySelector(`.minus-${item.id}`);
  const plusBtn = document.querySelector(`.plus-${item.id}`);
  // console.log(plusBtn);
  const qtyNumberBill = document.querySelector(`.qty-number-bill-${item.id}`);
  const itemPrice = document.querySelector(`.totalPrice-${item.id}`);
  // console.log(itemPrice);
  const number = document.querySelector(`.qty-number-${item.id}`);
  const addingToBill = document.querySelector(`.adding-to-bill-${item.id}`);
  const addingToConfirmOrder = document.querySelector(
    `.addingto-confirm-${item.id}`
  );
  const closeBtn = document.querySelector(`.cancel-img-${item.id}`);
  console.log(closeBtn);
  const orderConfirmNumber = document.querySelector(
    `.number-order-confirm-${item.id}`
  );
  const confirmOrderPrice = document.querySelector(
    `.confirm-order-total-${item.id}`
  );
  let incerment = 0;
  let itemTotal = 0;
  // const totoalItems = [];

  addToCartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    qtyBtn.classList.remove("hidden");
    addToCartBtn.classList.add("hidden");
    dImg.classList.add("active");
    mImg.classList.add("active");

    // console.log(dImg);
  });
  // const arrayItemBill = [];

  function UpdateTotal(value) {
    const previousTotal = itemTotal;
    itemTotal = value * item.price;
    console.log(itemTotal);
    grandTotalValue += itemTotal - previousTotal;
    console.log(grandTotalValue);
    UpdateGrandTotal();
  }

  function DisplayTotal(value) {
    // console.log(value);
    itemPrice.textContent = `$${(value * item.price).toFixed(2)}`;
    confirmOrderPrice.textContent = `$${(value * item.price).toFixed(2)}`;

    console.log(grandTotalValue);
    number.textContent = value;
    qtyNumberBill.textContent = `${value}x`;
    orderConfirmNumber.textContent = `${value}x`;
    UpdateTotal(value);
  }

  plusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    incerment++;
    DisplayTotal(incerment);
    if (incerment > 0) {
      addingToBill.classList.remove("hidden");
      addingToConfirmOrder.classList.remove("hidden");
      emptyCart.classList.add("hidden");
      billCart.classList.remove("hidden");
    }
  });

  minusBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (incerment > 0) {
      incerment--;

      if (incerment === 0) {
        dImg.classList.remove("active");
        mImg.classList.remove("active");
        addingToBill.classList.add("hidden");
        addingToConfirmOrder.classList.add("hidden");
        emptyCart.classList.remove("hidden");
        billCart.classList.add("hidden");
        addToCartBtn.classList.remove("hidden");
        qtyBtn.classList.add("hidden");
      }
      DisplayTotal(incerment);
    }
  });
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("hello");
    addToCartBtn.classList.remove("hidden");
    qtyBtn.classList.add("hidden");
    addingToConfirmOrder.classList.add("hidden");
    addingToBill.classList.add("hidden");
    dImg.classList.remove("active");
    mImg.classList.remove("active");
    grandTotalValue -= itemTotal;
    number.textContent = 0;
    UpdateGrandTotal();
    incerment = 0;
    itemTotal = 0;
  });
}

data.forEach((item) => ActionItems(item));
body.classList.remove("overflow-hidden");
confirmOrderBtn.addEventListener("click", function (e) {
  billCart.classList.add("hidden");
  orderConfirmCard.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});
newOrderBtn.addEventListener("click", function (e) {
  window.location.reload();
});
