// graphics defaults
var POINTCOLOR = "blue";
var POINTRADIUS = 15;
var LABELFONT = "16px Arial";

var LINECOLOR = "black";
var LINEWIDTH = 2;

// layout constants
var CIRCLE_RADIUS = 250;

var TABLES_STARTX = 100;
var TABLES_STARTY = 100;
var TABLES_GAPX = 175;
var TABLES_GAPY = 150;
var TABLES_TABLEGAP = 225;

var TABLES_XVALS = [100, 275, 500, 675];

// numbers of points and edges to draw
var NPTS = 11;
var NEDGES = 0;

// ------ classes ------

class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    drawC(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    drawSq(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        ctx.strokeStyle = color;
        ctx.strokeRect(this.x-radius, this.y-radius, radius*2, radius*2);
    }

    draw(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        this.drawC(ctx, color, radius);
    }

    drawLabel(ctx, lab, radius = POINTRADIUS, font = LABELFONT) {
        ctx.textAlign = "center";
        ctx.font = font;
        ctx.fillText(lab, this.x, this.y+radius/3);
    }

}

class Points extends Array {

    drawC(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(ctx, color, radius);
        }
    }

    drawSq(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        for (let i = 0; i < this.length; i++) {
            this[i].drawSq(ctx, color, radius);
        }
    }

    draw(ctx, color = POINTCOLOR, radius = POINTRADIUS) {
        this.drawC(ctx, color, radius);
    }

    drawLabels(ctx, labs, radius = POINTRADIUS, font = LABELFONT) {
        for (let i = 0; i < this.length; i++) {
            this[i].drawLabel(ctx, labs[i], radius, font);
        }
    }

}

class Edge {

    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    draw(ctx, color = LINECOLOR) {
        drawLine(ctx, this.head.x, this.head.y, this.tail.x, this.tail.y, color);
    }

}

class Edges extends Array {

    draw(ctx, color = LINECOLOR) {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(ctx, color);
        }
    }

}

// ------ functions ------

function drawLine(ctx, startX, startY, endX, endY, color = LINECOLOR) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function randomPoint(canvas) {
    const r = canvas.getBoundingClientRect();
    const w = r.width, h = r.height;
    let x = Math.floor(Math.random() * w);
    let y = Math.floor(Math.random() * h);
    return new Point(x,y);
}

// ------ scenes ------

function randomScene(canvas, ctx) {
    ctx.lineWidth = LINEWIDTH;

    for (let i = 0; i < NPTS; i++) {
        let POINT = randomPoint(canvas);
        POINT.draw(ctx);
        POINT.drawLabel(ctx, i+1);
    }

    PTSDIV.innerHTML = NPTS;
    EDGESDIV.innerHTML = NEDGES;
}

function circleScene(canvas, ctx, radius = CIRCLE_RADIUS) {
    ctx.lineWidth = LINEWIDTH;

    const r = canvas.getBoundingClientRect();
    const w = r.width, h = r.height;
    const centerX = w/2, centerY = h/2;

    let angle = -Math.PI/2; // first point is placed at the top of the circle
    const angleIncrement = (2*Math.PI)/NPTS;
    for (let i = 0; i < NPTS; i++) {
        let x = (radius * Math.cos(angle)) + centerX;
        let y = (radius * Math.sin(angle)) + centerY;

        let point = new Point(x,y);
        point.draw(ctx);
        point.drawLabel(ctx, i+1);

        angle += angleIncrement;
    }

    PTSDIV.innerHTML = NPTS;
    EDGESDIV.innerHTML = NEDGES;
}

function tablesScene(canvas, ctx) {
    ctx.lineWidth = LINEWIDTH;

    for (let i = 0; i < NPTS; i++) {
        let x = TABLES_XVALS[i%4];
        let y = TABLES_STARTX + (TABLES_GAPY * Math.floor(i/4))
        
        let point = new Point(x,y);
        point.draw(ctx);
        point.drawLabel(ctx, i+1);
    }

    PTSDIV.innerHTML = NPTS;
    EDGESDIV.innerHTML = NEDGES;
}