/* Create a counter application using HTML + CSS + JavaScript and the Knowledge of DOM.
Create a counter app with 3 buttons. One button will add the +1 each time One Button will subtract -1 each time
they are pressed and One button to reset the counter. */

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("value");

//Increment value
incrementBtn.addEventListener("click", () => {
  const currentValue = Number(displayValue.innerText);
  if (currentValue >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = currentValue + 1;
  }
});

//Decrement value

decrementBtn.addEventListener("click", () => {
  const currentValue = Number(displayValue.innerText);
  if (currentValue > 0) {
    displayValue.innerText = currentValue - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// reset
resetBtn.addEventListener("click", () => {
  const currentValue = Number(displayValue.innerText);
  if (currentValue == 0) {
    alert("Current value is 0");
  } else {
    displayValue.innerText = 0;
  }
});

//-------------------END -----------------------------------------------------------

//2.I Onclick listener
const clickBtn = document.getElementsByClassName("onclick")[0];
clickBtn.addEventListener("click", () => {
  const para = document.getElementById("p-text");
  para.innerText = "Button was Clicked";
  para.style.color = "White";
});

// 2. II Doubleclick

const doubleClick = document.getElementsByClassName("doubleClick")[0];
doubleClick.addEventListener("dblclick", () => {
  //console.log("clicked");
  const para = document.getElementById("p-text-1");
  para.innerText = "Double click Button was Clicked";
  para.style.color = "White";
});

// 2. III Mouseover

const mouseover = document.getElementById("p-text-2");
mouseover.addEventListener("mouseover", () => {
  const sub = document.getElementById("sub-text");
  sub.innerText = "Guys";
  sub.style.color = "Orange";
});

// 2.iv Mouseout
mouseover.addEventListener("mouseout", () => {
  const sub = document.getElementById("sub-text");
  sub.innerText = "";
});

//2. onKeyPress
let inputBox = document.getElementById("input-box");
let display = document.getElementById("display");

inputBox.addEventListener("keypress", function (e) {
  display.innerText = "you have Pressed " + e.key;
});
