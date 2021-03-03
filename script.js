//
let display = document.querySelector("#display");
let btnClear = document.querySelector("#btn-clear");
let btnClaerLastAction = document.querySelector("#btn-clear-last-action");
let btnBackSpace = document.querySelector("#btn-back-space");
let btnDiv = document.querySelector("#btn-div");
let btnMul = document.querySelector("#btn-mul");
let btnMinus = document.querySelector("#btn-minus");
let btnPlus = document.querySelector("#btn-plus");
let btnPn = document.querySelector("#btn-pn");
let btnPonit = document.querySelector("#btn-point");
let btnEquls = document.querySelector("#btn-equls");
let btnNumbers = document.querySelectorAll(".btn-number");
let setPoint = false;
let number1, number2, result;
let setResult = false;
let op = "";

btnPlus.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0.0";
  op = "+";
});
//
btnMinus.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0.0";
  op = "-";
});
//
btnDiv.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0.0";
  op = "/";
});
//
btnMul.addEventListener("click", (e) => {
  number1 = Number(display.textContent);
  display.textContent = "0.0";
  op = "*";
});
//
btnEquls.addEventListener("click", (e) => {
  if (setResult == false) {
    number2 = Number(display.textContent);
  } else {
    number1 = Number(display.textContent);
  }

  switch (op) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "*":
      result = number1 * number2;
      break;
  }
  display.textContent = result;
  setResult = true;
});
//
btnPn.addEventListener("click", (e) => {
  display.textContent = display.textContent * -1;
});
//
btnPonit.addEventListener("click", (e) => {
  if (setPoint == false) {
    display.textContent += ".";
    setPoint = true;
  }
});
//
btnClear.addEventListener("click", (e) => {
  display.textContent = "0.0";
  setPoint = false;
  setResult = false;
  number1 = 0;
  number2 = 0;
});
//
btnBackSpace.addEventListener("click", (e) => {
  let len = display.textContent.length;
  let lastDigit = display.textContent.substr(len - 1, len);
  if (lastDigit == ".") {
    setPoint = false;
  }

  if (len > 1) {
    display.textContent = display.textContent.substr(0, len - 1);
  } else {
    display.textContent = "0.0";
  }
});
//
btnNumbers.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (display.textContent == "0.0") {
      display.textContent = e.target.textContent;
    } else {
      display.textContent += e.target.textContent;
    }
  });
});
