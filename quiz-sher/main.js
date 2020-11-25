"use strict";

// input에 글씨 하나만 써지면 다음 input box로 자동 넘어가도록 코딩
const blank = document.querySelector(".word");
const allBlank = document.querySelectorAll(".word");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const forth = document.querySelector(".forth");

if (first === "S" && second === "H" && third === "E" && forth === "R") {
  return alert("정답입니다.");
} else {
  return alert("틀렸습니다");
}

// 틀리면 빨간 불이 깜빡이기(진동느낌) & 새로고침 || input안의 글씨 지우기

// 첫 input박스엔 깜빡이는 선 있도록, 클릭하면 사라짐
