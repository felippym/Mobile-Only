function triggle() {
  let el = document.getElementById("rolabosta");
  el.classList.remove("scroll");
  el.classList.add("scroll");

  if (scrollY > 50) {
    el.classList.add("scroll");
  } else {
    el.classList.remove("scroll");
  }
}

document.addEventListener("scroll", triggle);

function triggleMenu() {
  let body = document.getElementById("body");

  if (body.classList == "ismenuclosed") {
    body.classList.remove("ismenuclosed");
    body.classList.add("hiddenscroll");
  } else {
    body.classList.remove("hiddenscroll");

    body.classList.add("ismenuclosed");
  }
}

let openButton = document.querySelector(".open-button");
openButton.addEventListener("click", triggleMenu);
