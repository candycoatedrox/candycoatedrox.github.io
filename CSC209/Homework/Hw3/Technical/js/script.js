function setPalette(type) {
    if (type === 0) {
        document.getElementById("stylesheet").href = "css/paletteA.css";
    } else {
        document.getElementById("stylesheet").href = "css/paletteB.css";
    }
}

function toggleLayout() {
    MAIN.classList.toggle("rightMenu");
    NAVBAR.classList.toggle("rightMenu");
    LAYOUTBUTTONS.classList.toggle("rightMenu");
}

function toggleReadMe() {
    if (READMEBUTTON.innerHTML == "Read me") {
        READMEBUTTON.innerHTML = "Hide";
        READMETEXT.style = "text-align:center;";
    } else {
        READMEBUTTON.innerHTML = "Read me";
        READMETEXT.style = "display:none;";
    }
}

function toggleCredits() {
    if (CREDITSBUTTON.innerHTML == "Show Credits") {
        CREDITSBUTTON.innerHTML = "Hide Credits";
        CREDITSTEXT.style = "";
    } else {
        CREDITSBUTTON.innerHTML = "Show Credits";
        CREDITSTEXT.style = "display:none;";
    }
}

function showDate() {
    const date = new Date();
    DATETEXT.innerHTML = date.toDateString();
    DATETEXT.style = "";
}

function showTable() {
    SHOWBUTTON.style = "display:none;";
    HIDEBUTTON.style = "";
    TOGGLEBUTTONS.style = "";

    if (HIDDENROWS !== 0) {
        HIDDENROWS = 0;
        HIDDENCOUNT.innerHTML = "0";

        TABLE.style = "";
        for (let i = 1; i < ROWS.length; i++) {
            ROWS[i].style = "";
        }
    }
    if (HIDDENCOLS !== 0) {
        for (let i = 0; i < COLUMNS.length; i++) {
            showColumn(i);
        }

        HIDDENCOLS = 0;
    }
}

function hideTable() {
    HIDDENROWS = ROWS.length;
    HIDDENCOUNT.innerHTML = HIDDENROWS;

    SHOWBUTTON.style = "";
    HIDEBUTTON.style = "display:none;";
    TOGGLEBUTTONS.style = "display:none;";
    TABLE.style = "display:none;";
}

function hideRow(i) {
    HIDDENROWS++;
    
    HIDDENCOUNT.innerHTML = HIDDENROWS;
    SHOWBUTTON.style = "";
    ROWS[i].style = "display:none;";
}

function toggleColumn(i) {
    const isHidden = COLUMNTOGGLETEXTS[i].innerHTML == "Show";
    if (isHidden) showColumn(i);
    else hideColumn(i);
}

function showColumn(i) {
    HIDDENCOLS--;
    COLUMNTOGGLETEXTS[i].innerHTML = "Hide";

    const cells = COLUMNS[i];
    for (let j = 0; j < cells.length; j++) {
        cells[j].style = "";
    }

    if (HIDDENCOLS === 0) SHOWBUTTON.style = "display:none;";
    HIDEBUTTON.style = "";
}

function hideColumn(i) {
    HIDDENCOLS++;
    COLUMNTOGGLETEXTS[i].innerHTML = "Show";

    const cells = COLUMNS[i];
    for (let j = 0; j < cells.length; j++) {
        cells[j].style = "display:none;";
    }

    SHOWBUTTON.style = "";
    if (HIDDENCOLS === COLUMNS.length) HIDEBUTTON.style = "display:none;";
}