function nextSlide() {
    ACTIVESLIDE++;
    if (ACTIVEFOLDER == "dogs") {
        if (ACTIVESLIDE >= DOGSLIDES.length) ACTIVESLIDE = 0;
    } else if (ACTIVEFOLDER == "art") {
        if (ACTIVESLIDE >= ARTSLIDES.length) ACTIVESLIDE = 0;
    }

    setSlide(ACTIVEFOLDER, ACTIVESLIDE);
}

function prevSlide() {
    ACTIVESLIDE--;
    if (ACTIVESLIDE < 0) {
        if (ACTIVEFOLDER == "dogs") ACTIVESLIDE = DOGSLIDES.length - 1;
        else if (ACTIVEFOLDER == "art") ACTIVESLIDE = ARTSLIDES.length - 1;
    }
    
    setSlide(ACTIVEFOLDER, ACTIVESLIDE);
}

function setSlide(subfolder, n) {
    if (subfolder == "dogs") {
        for (let i = 0; i < DOGSLIDES.length; i++) {
            if (i === n) DOGSLIDES[i].classList.add('active');
            else DOGSLIDES[i].classList.remove('active');
        }
    } else if (subfolder == "art") {
        console.log("a");
        for (let i = 0; i < ARTSLIDES.length; i++) {
            if (i === n) ARTSLIDES[i].classList.add('active');
            else ARTSLIDES[i].classList.remove('active');
        }
    }
}

function setFolder(subfolder) {
    if (ACTIVEFOLDER == subfolder) return;

    ACTIVEFOLDER = subfolder;
    ACTIVESLIDE = 0;
    setSlide(subfolder, 0);

    for (let i = 0; i < SLIDESHOWS.length; i++) {
        SLIDESHOWS[i].classList.remove('active');
    }

    document.getElementById(subfolder).classList.add('active');
}