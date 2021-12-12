"use strict";

const btn = document.getElementById("btn");

const changeBtnColor = function () {
  const textInput = document.getElementById("text");
  const input = textInput.value;

  btn.style.backgroundColor = input;
};

btn.addEventListener("click", changeBtnColor);

document.getElementById("e_btn").style.display = "none";

const range = document.getElementById("range");

const changeCircleSize = function (event) {
  const span = document.getElementById("range-span");

  const circle = document.getElementById("circle");
  console.log(event);

  span.textContent = event.target.value;

  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
};

range.addEventListener("input", changeCircleSize);
