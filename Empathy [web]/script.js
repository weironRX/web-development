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
} else {
    document.body.classList.add("_pc")
}


/* for burger menu */

const menuIcon = document.querySelector(".menu__icon")

if (menuIcon) {
    const menuBody = document.querySelector(".menu__body")

    menuIcon.addEventListener("click", () => {
        document.body.classList.toggle("_locked")

        menuIcon.classList.toggle("_active")
        menuBody.classList.toggle("_active")
    })
}
