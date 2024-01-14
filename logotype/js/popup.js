const signUpbutton = document.querySelector(".button__sign-up")
const popup = document.querySelector(".custom-popup")
const popupBody = document.querySelector(".custom-popup__body")
const closeIcon = document.querySelector(".custom-popup__icon")

function toggle() {
    document.body.classList.toggle("_locked")
    popup.classList.toggle("_active")
}

signUpbutton.addEventListener("click", () => toggle())
popup.addEventListener("click", () => toggle())
closeIcon.addEventListener("click", () => toggle())
popupBody.addEventListener("click", (e) => e.stopPropagation())
