//Plus Button event listener

document.getElementById("plus-button").addEventListener("click", function () {
  plusBtn("item-number", "item-price", 1219);
});
//plus button event listener 2
document.getElementById("plus-button-2").addEventListener("click", function () {
  plusBtn("item-number-2", "item-price-2", 59);
});

//Minus Button Event Listener

document.getElementById("minus-button").addEventListener("click", function () {
  minusBtn("item-number", "item-price", 1219);
});

//Minus Button Event Listener 2

document
  .getElementById("minus-button-2")
  .addEventListener("click", function () {
    minusBtn("item-number-2", "item-price-2", 59);
  });

// plus Button functionality

function plusBtn(id, priceId, priceValue) {
  const currentItem = document.getElementById(id).value;

  const currentItemNumber = parseInt(currentItem);

  const itemNumber = currentItemNumber + 1;
  document.getElementById(id).value = itemNumber;

  const itemPrice = priceValue * itemNumber;
  document.getElementById(priceId).innerText = itemPrice;

  if (priceValue === 1219) {
    const subtotal = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseFloat(subtotal);
    const newSubtotal = subtotalNumber + priceValue;
    document.getElementById("subtotal-price").innerText = newSubtotal;
  } else {
    const subtotal = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseFloat(subtotal);
    const newSubtotal = subtotalNumber + 59;
    document.getElementById("subtotal-price").innerText = newSubtotal;
  }
  const totalPrice = document.getElementById("subtotal-price").innerText;
  document.getElementById("total-price").innerText = totalPrice;
}

//Minus Button Functionality

function minusBtn(id, priceId, priceValue) {
  const currentItem = document.getElementById(id).value;
  const currentItemNumber = parseInt(currentItem);
  if (currentItemNumber <= 0) {
    document.getElementById(id).value = 0;
  } else {
    const itemNumber = currentItemNumber - 1;
    document.getElementById(id).value = itemNumber;

    const itemPrice = priceValue * itemNumber;
    document.getElementById(priceId).innerText = itemPrice;

    if (priceValue === 1219) {
      const subtotal = document.getElementById("subtotal-price").innerText;
      const subtotalNumber = parseFloat(subtotal);
      const newSubtotal = subtotalNumber - priceValue;
      document.getElementById("subtotal-price").innerText = newSubtotal;
    } else {
      const subtotal = document.getElementById("subtotal-price").innerText;
      const subtotalNumber = parseFloat(subtotal);
      const newSubtotal = subtotalNumber - 59;
      document.getElementById("subtotal-price").innerText = newSubtotal;
    }

    const totalPrice = document.getElementById("subtotal-price").innerText;
    document.getElementById("total-price").innerText = totalPrice;
  }
}
