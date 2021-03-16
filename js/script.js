let toggleBtn = document.querySelector(".nav__button");
let navBar = document.querySelector(".nav__list");

function handleClick() {
    navBar.classList.toggle("nav-toggle");

    this.classList.toggle("open")
}

toggleBtn.addEventListener("click", handleClick);   