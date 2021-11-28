const body = document.querySelector("main");
const btn = document.querySelector(".skift");

function skift() {
  body.classList.toggle("hide");
}

btn.addEventListener("click", skift);
