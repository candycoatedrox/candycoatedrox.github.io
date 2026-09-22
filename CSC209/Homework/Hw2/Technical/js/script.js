function setLayout(type) {
    if (type === 0) {
        document.getElementById("stylesheet").href = "css/greyPalette.css";
    } else {
        document.getElementById("stylesheet").href = "css/bluePalette.css";
    }
}

function toggleReadMe() {
    let button = document.getElementById("readme");
    let text = document.getElementById("readmeText");

    if (text.innerHTML == "") {
        button.innerHTML = "Hide";
        text.innerHTML = 'Logical connectives are used to build more complex ("molecular") logical statements out of small ("atomic") statements.';
    } else {
        button.innerHTML = "Read me";
        text.innerHTML = "";
    }
}