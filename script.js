let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let Started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (Started == false) {
    console.log("Game Started");
    Started = true;

    leveUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function leveUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInd = Math.floor(Math.random() * 3);
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randInd);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(ind) {
  // console.log("current level : ", level);
  if (userSeq[ind] === gameSeq[ind]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(leveUp, 1000);
    }
  } else {
    h2.innerText = `Game Over ! Press Any Key To Restart`;
    reset();
  }
}

function btnPress() {
  let btn = this;
  console.log(this);
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  Started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
