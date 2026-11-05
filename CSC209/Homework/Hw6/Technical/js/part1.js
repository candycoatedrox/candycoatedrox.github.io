function setActive(subfolder) {
    for (let i = 0; i < DIVS.length; i++) {
        DIVS[i].classList.remove('active');
    }

    document.getElementById(subfolder).classList.add('active');
}