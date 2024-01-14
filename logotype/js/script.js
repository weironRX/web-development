const iconMenu = document.querySelector(".menu__icon")
const background = document.querySelector(".background")
const menuBody = document.querySelector(".menu")

const action = () => {
    document.body.classList.toggle("_locked")

    iconMenu.classList.toggle("_active")
    menuBody.classList.toggle("_active")
    background.classList.toggle("_active")
}


if (iconMenu) {
    
    iconMenu.addEventListener("click", () => action())

    menuBody.addEventListener("click", (e) => e.stopPropagation())

    background.addEventListener("click", () => action())
}