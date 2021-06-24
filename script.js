firstClassPlus.addEventListener("click", function () {
  updateCost("firstClass",1);
})
firstClassMinus.addEventListener("click", function () {
  if (getValueById("firstClass")) {
    updateCost("firstClass", -1);
  }
});
economyPlus.addEventListener("click", function () {
  updateCost("economy", 1);
});
economyMinus.addEventListener("click", function () {
  if (getValueById("economy")) {
    updateCost("economy", -1);
  }
});

function updateCost(ticketClass, sign) {
  let unitPrice = 0;
  document.getElementById(ticketClass).value = getValueById(ticketClass) + sign;
  if (ticketClass == "firstClass") {
    unitPrice = 150;
  } else {
    unitPrice = 100;
  }
  let subtotal = getInnerTextById("subtotal");
  document.getElementById("subtotal").innerText = subtotal + sign * unitPrice;
  document.getElementById("vat").innerText = getInnerTextById("subtotal") * 0.1;
  document.getElementById("total").innerText = getInnerTextById("subtotal") + getInnerTextById("vat")
}

function getValueById(id) {
  const String = document.getElementById(id).value;
  const number = parseFloat(String);
  return number;
}

function getInnerTextById(id) {
  const String = document.getElementById(id).innerText;
  const number = parseFloat(String);
  return number;
}
