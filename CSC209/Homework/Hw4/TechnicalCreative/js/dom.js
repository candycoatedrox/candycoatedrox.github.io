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
            if (ptsDiff < 0) {
                POINTS.splice(NPTS, Math.abs(ptsDiff));
            } else {
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
                    if (edgesDiff < 0) {
                        EDGES.splice(NEDGES, Math.abs(edgesDiff));
                    } else {
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
        COORDSA.innerHTML = html;
        COORDSB.innerHTML = "";
    } else {
        let htmlA = "";
        for (let i = 0; i < 8; i++) {
            htmlA += liFromPoint(POINTS[i]);
        }
        COORDSA.innerHTML = htmlA;

        let htmlB = "";
        for (let i = 8; i < POINTS.length; i++) {
            htmlB += liFromPoint(POINTS[i]);
        }
        COORDSB.innerHTML = htmlB;
    }

    if (EDGES.length <= 4) {
        let html = "";
        for (let i = 0; i < EDGES.length; i++) {
            html += liFromEdge(EDGES[i]);
        }
        EDGESA.innerHTML = html;
        EDGESB.innerHTML = "";
    } else {
        let htmlA = "";
        for (let i = 0; i < 4; i++) {
            htmlA += liFromEdge(EDGES[i]);
        }
        EDGESA.innerHTML = htmlA;

        let htmlB = "";
        for (let i = 4; i < EDGES.length; i++) {
            htmlB += liFromEdge(EDGES[i]);
        }
        EDGESB.innerHTML = htmlB;
    }
}