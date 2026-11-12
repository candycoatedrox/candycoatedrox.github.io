function sortTableByColumn(colNum) {
    console.log("running sortTableByColumn(" + colNum + ")");

    // determine direction of sorting and adjust arrows in headers
    if (SORTEDCOLUMN === colNum) {
        SORTDESCENDING = !SORTDESCENDING;

        if (SORTDESCENDING) {
            ARROWS[colNum].innerHTML = "▼";
        } else {
            ARROWS[colNum].innerHTML = "▲";
        }
    } else {
        if (SORTEDCOLUMN !== undefined) ARROWS[SORTEDCOLUMN].innerHTML = "▷";
        ARROWS[colNum].innerHTML = "▼";

        SORTEDCOLUMN = colNum;
        SORTDESCENDING = true;
    }

    // bubble sort!
    // algorithm adapted from https://www.w3schools.com/howto/howto_js_sort_table.asp
    let switching = true;
    let rows, shouldSwitch, i, x, y;
    while (switching) {
        switching = false;
        rows = TABLE.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            
            x = rows[i].children[colNum], y = rows[i+1].children[colNum]; // get values from current and next rows
            if (colNum === 2) { // interpret loggedtimes as numbers
                let xVal = + x.innerHTML, yVal = + y.innerHTML;
                console.log(`xVal: ${xVal}, yVal: ${yVal}`);
                if (SORTDESCENDING) {
                    if (xVal > yVal) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (xVal < yVal) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else { // interpret username, password as strings
                console.log(`xVal: ${x.innerHTML.toLowerCase()}, yVal: ${y.innerHTML.toLowerCase()}`);
                if (SORTDESCENDING) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }

        if (shouldSwitch) {
            switching = true;
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]); // swap rows
        }
    }
}