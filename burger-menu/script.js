"use strict"

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if (detectMob()) {
    document.body.classList.add("_touch")

    const menuArrows = document.querySelectorAll(".menu__arrow")

    if (menuArrows.length) {
        menuArrows.forEach(arrow => 
            arrow.addEventListener("click", () => {
                menuArrows.forEach(e => {
                    if (e != arrow) {
                        e.parentElement.classList.remove("_active")
                    }
                })
                arrow.parentElement.classList.toggle("_active")
            })
        )
    }
} else {
    document.body.classList.add("_pc")
}

const iconMenu = document.querySelector(".menu__icon")

if (iconMenu) {
    const menuBody = document.querySelector(".menu__body")
    
    iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_locked")

        iconMenu.classList.toggle("_active")
        menuBody.classList.toggle("_active")
    })
}