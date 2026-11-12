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
                let xVal = +x.innerHTML, yVal = +y.innerHTML;
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
            } else if (colNum === 3) { // interpret minuteslogged as a sum of the sessions
                let xVal = sumJSON(x.innerHTML), yVal = sumJSON(y.innerHTML);
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

// takes a JSON-encoded string representing an array of integers and returns the sum of its values
function sumJSON(jsonString) {
    let str = jsonString.slice(1, -1);
    let vals = str.split(',');
    return vals.reduce((total, val) => total + Number.parseInt(val), 0);
}