// const btnAC = document.querySelector(".btnAC");
// const btnNeg = document.querySelector(".btnNeg");
// const btnPercent = document.querySelector(".btnPercent");
// const btnDivision = document.querySelector(".btnDivision");

// const btn7 = document.querySelector(".btn7");
// const btn8 = document.querySelector(".btn8");
// const btn9 = document.querySelector(".btn9");
// const btnStar = document.querySelector(".btnStar");

// const btn4 = document.querySelector(".btn4");
// const btn5 = document.querySelector(".btn5");
// const btn6 = document.querySelector(".btn6");
// const btnMinus = document.querySelector(".btnMinus");

// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// const btnPlus = document.querySelector(".btnPlus");

// const btn0 = document.querySelector(".btn0");
// const btnDot = document.querySelector(".btnDot");
// const btnEqual = document.querySelector(".btnEqual");

const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

const operators = ["btn+", "btn-", "btn*", "btn/", "btn%"];

let digit = 0;
let digitStr = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    digit = button.innerHTML;

    console.log(`btn${digit}`);

    switch (e.target.id) {
      case `btn${digit}`:
        screen.innerHTML = `${digit}`;
        console.log(operators);
        // while (e.target.id !== operators) {
        //   digitStr += +`${digit}`;
        //   console.log(digitStr);
        // }

        break;
      default:
        break;
    }
  });
});
