function initShowBoxes(canvas, ctx) {
    SHOW.points.addEventListener("change", () => drawScene(canvas, ctx));
    SHOW.pointLabs.addEventListener("change", () => drawScene(canvas, ctx));
    SHOW.edges.addEventListener("change", () => drawScene(canvas, ctx));
    SHOW.edgeLabs.addEventListener("change", () => drawScene(canvas, ctx));
}

function setNPtsEdges(pts, edges) {
    console.log(`pts: ${pts}, edges: ${edges}`);
    const ptsChanged = pts !== NPTS, edgesChanged = edges !== NEDGES;

    if (ptsChanged) {
        if (pts < 1 || pts > 16 || pts == "") {
            console.log("pts out of range");
            PTSERROR.style = "";
            EDGESERROR.style = "display: none;";
            return false;
        } else {
            PTSERROR.style = "display: none;";

            let ptsDiff = pts - NPTS;
            NPTS = pts;
            MAXEDGES = Math.floor(pts/2);
            MAXEDGESTEXT.innerHTML = MAXEDGES;

            // adjust points
            if (ptsDiff < 0) { // delete extra points
                POINTS.splice(NPTS, Math.abs(ptsDiff));
            } else { // create new points
                for (let i = 0; i < ptsDiff; i++) {
                    POINTS.push(new Point());
                }
            }

            if (edges < 0 || edges > MAXEDGES || edges == "") {
                console.log("pts in range, edges out of range");
                PTSERROR.style = "display: none;";
                EDGESERROR.style = "";
                EDGES_OUTOFRANGE = true;
                return false;
            } else {
                EDGESERROR.style = "display: none;";

                if (edgesChanged) {
                    let edgesDiff = edges - NEDGES;
                    NEDGES = edges;

                    // adjust edges
                    if (edgesDiff < 0) { // delete extra edges
                        EDGES.splice(NEDGES, Math.abs(edgesDiff));
                    } else { // create new edges
                        for (let i = 0; i < edgesDiff; i++) {
                            EDGES.push(new Edge());
                        }
                    }
                }
            } 
        }

    } else {
        if (edges < 0 || edges > MAXEDGES || edges == "") {
            console.log("edges out of range");
            PTSERROR.style = "display: none;";
            EDGESERROR.style = "";
            return false;
        } else {
            EDGESERROR.style = "display: none;";

            let edgesDiff = edges - NEDGES;
            NEDGES = edges;

            // adjust edges
            if (edgesDiff < 0) {
                EDGES.splice(NEDGES, Math.abs(edgesDiff));
            } else {
                for (let i = 0; i < edgesDiff; i++) {
                    EDGES.push(new Edge());
                }
            }
        }
    }

    return true;
}

function updateCoordsAndEdges() {
    if (POINTS.length <= 8) {
        let html = "";
        for (let i = 0; i < POINTS.length; i++) {
            html += liFromPoint(POINTS[i]);
        }
        COORDSINFO.listA.innerHTML = html;
        COORDSINFO.listB.innerHTML = "";
    } else {
        let htmlA = "";
        for (let i = 0; i < 8; i++) {
            htmlA += liFromPoint(POINTS[i]);
        }
        COORDSINFO.listA.innerHTML = htmlA;

        let htmlB = "";
        for (let i = 8; i < POINTS.length; i++) {
            htmlB += liFromPoint(POINTS[i]);
        }
        COORDSINFO.listB.innerHTML = htmlB;
    }

    if (EDGES.length <= 4) {
        let html = "";
        for (let i = 0; i < EDGES.length; i++) {
            html += liFromEdge(EDGES[i]);
        }
        EDGESINFO.listA.innerHTML = html;
        EDGESINFO.listB.innerHTML = "";
    } else {
        let htmlA = "";
        for (let i = 0; i < 4; i++) {
            htmlA += liFromEdge(EDGES[i]);
        }
        EDGESINFO.listA.innerHTML = htmlA;

        let htmlB = "";
        for (let i = 4; i < EDGES.length; i++) {
            htmlB += liFromEdge(EDGES[i]);
        }
        EDGESINFO.listB.innerHTML = htmlB;
    }
}

function toggleAccordion(info) {
    info.wrap.classList.toggle("hidden");
    if (info.toggle.innerHTML == "(Open)") {
        info.toggle.innerHTML = "(Close)";
    } else {
        info.toggle.innerHTML = "(Open)";
    }
}

function exportCanvas(canvas) {
    window.alert("I missed Tuesday and don't know how to do this! At least the button is here, though...");
}