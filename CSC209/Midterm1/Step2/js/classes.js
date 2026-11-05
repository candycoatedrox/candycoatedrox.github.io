// ------ classes ------

class Point {

    constructor(x,y) {
        if (x == undefined) x = 0;
        if (y == undefined) y = 0;

        this.x = x;
        this.y = y;
    }

    set(x,y) {
        this.x = x;
        this.y = y;
    }

    get coords() {
        return [this.x, this.y];
    }
    set coords(c) {
        this.x = c[0];
        this.y = c[1];
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

    constructor(nPts) {
        if (nPts == undefined) nPts = 0;

        super(nPts);
        for (let i = 0; i < this.length; i++) {
            this[i] = new Point();
        }
    }

    // scenes
    randomize(canvas) {
        for (let i = 0; i < this.length; i++) {
            this[i].coords = randomPoint(canvas);
        }
    }

    circleLayout(canvas, radius = CIRCLE_RADIUS) {
        const r = canvas.getBoundingClientRect();
        const w = r.width, h = r.height;
        const centerX = w/2, centerY = h/2;

        let angle = -Math.PI/2; // first point is placed at the top of the circle
        const angleIncrement = (2*Math.PI)/NPTS;
        for (let i = 0; i < this.length; i++) {
            let x = (radius * Math.cos(angle)) + centerX;
            let y = (radius * Math.sin(angle)) + centerY;
            this[i].set(x,y);

            angle += angleIncrement;
        }
    }

    tableLayout(canvas) {
        for (let i = 0; i < this.length; i++) {
            let x = TABLES_XVALS[i%4];
            let y = TABLES_STARTX + (TABLES_GAPY * Math.floor(i/4))
            this[i].set(x,y);
        }
    }

    // draw
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
        if (labs == undefined) labs = range1(this.length);

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

    drawLabelConnection(ctx, color = LINECOLOR) {
        // draw a dashed line between the edge and its label
        let mp = midpoint(this.head, this.tail);
        drawLine(ctx, mp[0], mp[1], mp[0], mp[1]-3, color);
        drawLine(ctx, mp[0], mp[1]-5, mp[0], mp[1]-8, color);
    }

    drawLabel(ctx, lab, font = LABELFONT) {
        ctx.textAlign = "center";
        ctx.font = font;

        let mp = midpoint(this.head, this.tail);
        ctx.fillText(lab, mp[0], mp[1]-10);
    }

}

class Edges extends Array {

    constructor(nEdges) {
        if (nEdges == undefined) nEdges = 0;

        super(nEdges);
        for (let i = 0; i < this.length; i++) {
            this[i] = new Edge();
        }
    }

    // scenes
    randomize(pts) {
        let edgeOrder = randomOrderForRange(pts.length);
        for (let i = 0; i < this.length; i++) {
            let a = edgeOrder[i*2], b = edgeOrder[(i*2)+1];
            let p = pts[a], q = pts[b];
            this[i].head = p;
            this[i].tail = q;
        }
    }

    standard(pts) {
        for (let i = 0; i < this.length; i++) {
            let p = pts[i*2], q = pts[(i*2)+1];
            this[i].head = p;
            this[i].tail = q;
        }
    }

    // draw
    draw(ctx, color = LINECOLOR) {
        for (let i = 0; i < this.length; i++) {
            this[i].draw(ctx, color);
        }
    }

    drawLabelConnections(ctx, color = LINECOLOR) {
        for (let i = 0; i < this.length; i++) {
            this[i].drawLabelConnection(ctx, color);
        }
    }

    drawLabels(ctx, labs, font = LABELFONT) {
        if (labs == undefined) labs = range1(this.length);

        for (let i = 0; i < this.length; i++) {
            this[i].drawLabel(ctx, labs[i], font);
        }
    }

}