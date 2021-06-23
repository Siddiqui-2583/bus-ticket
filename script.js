const plus1 = document.getElementById("fir");
// const unitPrice1 = getUnitPrice("noOfProduct1","price1");
// const unitPrice2 = getUnitPrice("noOfProduct2","price2");
// console.log(unitPrice2);
plus1.addEventListener("click", function () {
  updatePrice("noOfProduct1", "price1", 1, 1219);
});
minus1.addEventListener("click", function () {
  updatePrice("noOfProduct1", "price1", -1, 1219);
});
clearButton1.addEventListener("click", function () {
  clearProduct("noOfProduct1", "price1");
});
plus2.addEventListener("click", function () {
  updatePrice("noOfProduct2", "price2", 1, 59);
});
minus2.addEventListener("click", function () {
  updatePrice("noOfProduct2", "price2", -1, 59);
});
clearButton2.addEventListener("click", function () {
  clearProduct("noOfProduct2", "price2");
});

function updatePrice(noOfProductId, priceId, sign, unitPrice) {
  const noOfProduct = getInputNumber(noOfProductId);
  const productPrice = getSpanNumber(priceId);
  const subtotal = getSpanNumber("subtotal");
  //var unitPrice=0;
  // const unitPrice = getUnitPrice(noOfProductId,priceId);
  // if(priceId = "price1"){
  //     unitPrice = unitPrice1;
  // }
  // if(priceId = "price2"){
  //     unitPrice = unitPrice2;
  // }

  document.getElementById(noOfProductId).value = noOfProduct + sign;
  document.getElementById(priceId).innerText = productPrice + sign * unitPrice;
  document.getElementById("subtotal").innerText = subtotal + sign * unitPrice;
  document.getElementById("total").innerText = subtotal + sign * unitPrice;
}
function getInputNumber(id) {
  const String = document.getElementById(id).value;
  const number = parseFloat(String);
  return number;
}

function getSpanNumber(id) {
  const String = document.getElementById(id).innerText;
  const number = parseFloat(String);
  return number;
}
function clearProduct(noOfProductId, priceId) {
  const noOfProduct = getInputNumber(noOfProductId);
  const productPrice = getSpanNumber(priceId);
  const subtotal = getSpanNumber("subtotal");

  document.getElementById(noOfProductId).value = 0;
  document.getElementById(priceId).innerText = 0;
  document.getElementById("subtotal").innerText = subtotal - productPrice;
  document.getElementById("total").innerText = subtotal - productPrice;
}
