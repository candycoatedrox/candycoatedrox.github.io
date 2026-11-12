<!DOCTYPE html>
<html>
<head>
    <title>Hw8 Technical: Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="../css/level3style.css">
    <script src="js/admin.js"></script>
    <?php
    include '../php/json.php';
    include '../php/login.php';
    ?>

    <?php $DATA = readJSON('../users.json'); ?>

    <script>
        let SORTEDCOLUMN;
        let SORTDESCENDING = true;
    </script>
</head>
<body>
    <header>
        <h1>Admin</h1>
    </header>

    <br>

    <div class="center">
        <?php echo createAdminTable('../users.json'); ?>
    </div>

    <br><br>

    <button onclick="location.href = '../login.html.php';">Logout</button>
    <!-- UPDATE WITH THE FORM IN USER.HTML.PHP -->


    <script>
        const TABLE = document.getElementById("table");
        const HEADERS = document.getElementsByTagName("th");
        const ARROWS = document.getElementsByClassName("arrow");

        for (let i = 0; i < HEADERS.length; i++) {
            HEADERS[i].addEventListener("click", () => sortTableByColumn(i));
        }

        sortTableByColumn(0);
    </script>
</body>
</html>