// document.forms[0].addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert(document.querySelector("#text-input").value)
// });

//2
// let body = document.querySelector("body");
// document.querySelector("button").addEventListener("click", function (event) {
//   body.style.background = document.querySelector("#colorInput").value;
// });

//3
let p;
let outp = document.querySelectorAll("li");
let a = document.querySelectorAll("input");
//
for (let i = 0; i < a.length; i++) {
  a[i].value = "sad@sad";
}
//
for (let i = 0; i < outp.length; i++) {
  [i];
}

document.forms[0].addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelector(".modal").style.display = "block";

  let inp = document.querySelectorAll("input");
  for (let i = 0; i < 4; i++) {
    outp[i].innerHTML += inp[i].value;
  }
});
document.querySelector(".close").addEventListener("click", function (event) {
  document.querySelector(".modal").style.display = "none";
  for (let i = 0; i < 4; i++) {
    outp[i].innerHTML = inp[i].value;
  }
});
document
  .querySelector("#cancel-btn")
  .addEventListener("click", function (event) {
    document.querySelector(".modal").style.display = "none";
  });
