function range(n) {
    return Array.from({ length : n }, (_, i) => i);
}
function range1(n) {
    return Array.from({ length : n }, (_, i) => i+1);
}

function random(a,b) {
    if (b == undefined) { // only max given
        return Math.floor(Math.random() * a);
    } else { // min and max given
        return Math.floor(Math.random() * (b-a)) + a;
    }
}

function randomPoint(canvas) {
    const r = canvas.getBoundingClientRect();
    const w = r.width, h = r.height;
    let x = random(w), y = random(h);
    return [x,y];
}

function midpoint(p,q) {
    let x = (p.x + q.x) / 2;
    let y = (p.y + q.y) / 2;
    return [x,y];
}

// algorithm pulled from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function randomOrderForRange(n) {
    let arr = range(n);
    let currentIndex = n;

    while (currentIndex > 0) {
        let randIndex = random(currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randIndex]] = [arr[randIndex], arr[currentIndex]];
    }

    return arr;
}

function liFromPoint(p) {
    return `<li>(${Math.floor(p.x)}, ${Math.floor(p.y)})</li>`;
}

function liFromEdge(e) {
    const h = POINTS.indexOf(e.head);
    const t = POINTS.indexOf(e.tail);
    return `<li>[${h}, ${t}]</li>`;
}