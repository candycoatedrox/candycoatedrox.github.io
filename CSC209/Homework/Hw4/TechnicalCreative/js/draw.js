// ------ functions ------

function clearCanvas(canvas, ctx) {
    const r = canvas.getBoundingClientRect();
    const w = r.width, h = r.height;
    ctx.clearRect(0, 0, w, h);
}

function drawLine(ctx, startX, startY, endX, endY, color = LINECOLOR) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

// ------ scenes ------

function randomScene(canvas, ctx) {
    console.log("clicked");
    if (PTSSELECT.value != NPTS || EDGESSELECT.value != NEDGES) {
        EDGES_OUTOFRANGE = false;
        if (!setNPtsEdges(PTSSELECT.value, EDGESSELECT.value)) return;
    } else if (EDGES_OUTOFRANGE) {
        return;
    } else {
        PTSERROR.style = "display: none;";
        EDGESERROR.style = "display: none;";
    }
    console.log(`NPTS: ${NPTS}, NEDGES: ${NEDGES}`);

    POINTS.randomize(canvas);
    EDGES.randomize(POINTS);

    updateCoordsAndEdges();
    drawScene(canvas, ctx);
}

function circleScene(canvas, ctx, radius = CIRCLE_RADIUS) {
    if (PTSSELECT.value != NPTS || EDGESSELECT.value != NEDGES) {
        EDGES_OUTOFRANGE = false;
        if (!setNPtsEdges(PTSSELECT.value, EDGESSELECT.value)) return;
    } else if (EDGES_OUTOFRANGE) {
        return;
    } else {
        PTSERROR.style = "display: none;";
        EDGESERROR.style = "display: none;";
    }

    POINTS.circleLayout(canvas, radius);
    EDGES.standard(POINTS);

    updateCoordsAndEdges();
    drawScene(canvas, ctx);
}

function tablesScene(canvas, ctx) {
    if (PTSSELECT.value != NPTS || EDGESSELECT.value != NEDGES) {
        EDGES_OUTOFRANGE = false;
        if (!setNPtsEdges(PTSSELECT.value, EDGESSELECT.value)) return;
    } else if (EDGES_OUTOFRANGE) {
        return;
    } else {
        PTSERROR.style = "display: none;";
        EDGESERROR.style = "display: none;";
    }

    POINTS.tableLayout(canvas);
    EDGES.standard(POINTS);

    updateCoordsAndEdges();
    drawScene(canvas, ctx);
}

function drawScene(canvas, ctx) {
    ctx.lineWidth = LINEWIDTH;

    clearCanvas(canvas, ctx);

    if (SHOW.edges.checked) EDGES.draw(ctx);
    if (SHOW.edges.checked && SHOW.edgeLabs.checked) EDGES.drawLabelConnections(ctx);
    if (SHOW.edgeLabs.checked) EDGES.drawLabels(ctx);

    if (SHOW.points.checked) POINTS.draw(ctx);
    if (SHOW.pointLabs.checked) POINTS.drawLabels(ctx);
}