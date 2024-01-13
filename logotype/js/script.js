const iconMenu = document.querySelector(".menu__icon")
const background = document.querySelector(".background")

if (iconMenu) {
    const menuBody = document.querySelector(".menu")
    
    iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_locked")

        iconMenu.classList.toggle("_active")
        menuBody.classList.toggle("_active")
        background.classList.toggle("_active")
    })
}