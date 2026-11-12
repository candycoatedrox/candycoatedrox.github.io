<!DOCTYPE html>
<html>
<head>
    <title>Lab 15: Part 3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
    <?php include 'php/jsonLib.php' ?>

    <script>
        let SORTEDCOLUMN;
        let SORTDESCENDING = true;
    </script>
</head>
<body>
    <header>
        <h1>Lab 15: Part 3</h1>
    </header>
    <p class="return"><a href="lab15.html">Back to lab</a></p>

    <br>

    <div class="center">
        <?php echo createTable('users.json'); ?>
    </div>


    <script>
        const TABLE = document.getElementById("table");
        const HEADERS = document.getElementsByTagName("th");
        const ARROWS = document.getElementsByClassName("arrow");

        for (let i = 0; i < HEADERS.length; i++) {
            HEADERS[i].addEventListener("click", () => sortTableByColumn(i));
        }

        sortTableByColumn(0);
    </script>

<!-- arrows: ▷ ▼ ▲ -->

<!-- look for PHP multisorting functions -->
 <!-- don't need to be able to sort ON THE CLIENT yet!! just make it sortable within the code!! -->
  
<!-- insertBefore? -->
</body>
</html>