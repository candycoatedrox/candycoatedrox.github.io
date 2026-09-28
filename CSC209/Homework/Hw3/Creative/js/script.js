function drawScene() {
    console.log("drawing scene");

    // red
    CTX.fillStyle = COLORS[0] ? "red" : "#4D4D4D";
    CTX.beginPath();
    CTX.arc(375, 325, 275, 0, Math.PI, true);
    CTX.fill();
    
    // orange
    CTX.fillStyle = COLORS[1] ? "orange" : "#AEAEAE";
    CTX.beginPath();
    CTX.arc(375, 325, 240, 0, Math.PI, true);
    CTX.fill();
    
    // yellow
    CTX.fillStyle = COLORS[2] ? "yellow" : "#E3E3E3";
    CTX.beginPath();
    CTX.arc(375, 325, 205, 0, Math.PI, true);
    CTX.fill();
    
    // green
    CTX.fillStyle = COLORS[3] ? "#19ba17" : "#787878";
    CTX.beginPath();
    CTX.arc(375, 325, 170, 0, Math.PI, true);
    CTX.fill();
    
    // blue
    CTX.fillStyle = COLORS[4] ? "blue" : "#1C1C1C";
    CTX.beginPath();
    CTX.arc(375, 325, 135, 0, Math.PI, true);
    CTX.fill();
    
    // purple
    CTX.fillStyle = COLORS[5] ? "#a40dc6" : "#4F4F4F";
    CTX.beginPath();
    CTX.arc(375, 325, 100, 0, Math.PI, true);
    CTX.fill();

    // cutout in center
    CTX.fillStyle = "skyblue";
    CTX.beginPath();
    CTX.arc(375, 325, 65, 0, Math.PI, true);
    CTX.fill();

    // clouds
    CTX.fillStyle = "white";
    // left
    CTX.beginPath();
    CTX.arc(105, 330, 50, 0, 2*Math.PI, true);
    CTX.arc(165, 335, 50, 0, 2*Math.PI, true);
    CTX.fill();
    CTX.beginPath();
    CTX.arc(225, 330, 50, 0, 2*Math.PI, true);
    CTX.arc(285, 335, 50, 0, 2*Math.PI, true);
    CTX.fill();

    CTX.beginPath();
    CTX.arc(75, 370, 50, 0, 2*Math.PI, true);
    CTX.arc(135, 380, 50, 0, 2*Math.PI, true);
    CTX.arc(195, 370, 50, 0, 2*Math.PI, true);
    CTX.arc(255, 380, 50, 0, 2*Math.PI, true);
    CTX.arc(315, 370, 50, 0, 2*Math.PI, true);
    CTX.fill();
    
    // right
    CTX.beginPath();
    CTX.arc(645, 330, 50, 0, 2*Math.PI, true);
    CTX.arc(585, 335, 50, 0, 2*Math.PI, true);
    CTX.fill();
    CTX.beginPath();
    CTX.arc(525, 330, 50, 0, 2*Math.PI, true);
    CTX.arc(465, 335, 50, 0, 2*Math.PI, true);
    CTX.fill();

    CTX.beginPath();
    CTX.arc(675, 370, 50, 0, 2*Math.PI, true);
    CTX.fill();
    CTX.beginPath();
    CTX.arc(615, 380, 50, 0, 2*Math.PI, true);
    CTX.arc(555, 370, 50, 0, 2*Math.PI, true);
    CTX.fill();
    CTX.beginPath();
    CTX.arc(495, 380, 50, 0, 2*Math.PI, true);
    CTX.arc(435, 370, 50, 0, 2*Math.PI, true);
    CTX.fill();
}

function toggleColor(i) {
    if (COLORS[i]) setColor(i, false);
    else setColor(i, true);

    // all colors are enabled
    if (COLORS.every(v => v)) {
        ADDBUTTON.style = "display: none;";
    } else {
        ADDBUTTON.style = "";
    }

    // all colors are disabled
    if (!COLORS.some(v => v)) {
        REMOVEBUTTON.style = "display: none;";
    } else {
        REMOVEBUTTON.style = "";
    }

    drawScene();
}

function setColor(i, val) {
    COLORS[i] = val;
    ADDREMOVETEXT[i].innerHTML = val ? "Remove" : "Add";
}

function setAllColors(val) {
    for (let i = 0; i < COLORS.length; i++) {
        setColor(i, val);
    }

    if (val) {
        ADDBUTTON.style = "display: none;";
        REMOVEBUTTON.style = "";
    } else {
        ADDBUTTON.style = "";
        REMOVEBUTTON.style = "display: none;";
    }

    drawScene();
}