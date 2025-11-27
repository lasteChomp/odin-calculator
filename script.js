import { add, subtract, multiply, divide } from "./operations.js";

const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

const numButtons = [];
const operationButtons = [];
const specialButtons = [];

let currentNum = null;
let previousNum = null;
let operation = null;
let special = null;
let shouldResetInput = false;

const operate = (x, y, operation) => {
  if (operation === "+") {
    return add(x, y);
  }
  if (operation === "−") {
    return subtract(x, y);
  }
  if (operation === "×") {
    return multiply(x, y);
  }
  if (operation === "÷") {
    return divide(x, y);
  }
};

buttons.forEach((button) => {
  if (!isNaN(Number(button.textContent))) {
    numButtons.push(button);
  } else if (
    button.textContent === "C" ||
    button.textContent === "." ||
    button.textContent === "="
  ) {
    specialButtons.push(button);
  } else {
    operationButtons.push(button);
  }
});

operationButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    previousNum = currentNum;
    shouldResetInput = true;
    operation = e.target.textContent;
  });
});

specialButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    special = e.target.textContent;

    if (special === "C") {
      input.value = "";
      currentNum = null;
      operation = null;
      previousNum = null;
    }
  });
});

numButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (shouldResetInput) {
      input.value = "";
      shouldResetInput = false;
    }

    input.value += e.target.textContent;
    currentNum = Number(input.value);

    console.log(`Current num: ${currentNum}`);
    console.log(`Previous num: ${previousNum}`);
  });
});
