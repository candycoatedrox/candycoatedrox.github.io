<!DOCTYPE html>
<html>
<head>
    <title>Hw8 Technical: Level 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/level1style.css">
    <script src="js/level1script.js"></script>
    <?php include 'php/jsonLib.php' ?>

    <script>
        let SORTEDCOLUMN;
        let SORTDESCENDING = true;
    </script>
</head>
<body>
    <header>
        <h1>Level 1 (Lab 15)</h1>
    </header>
    <p><i><a href="../technical.html">Back to Hw8 Technical</a></i></p>

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