<!DOCTYPE html>
<html>
<head>
    <title>Hw8 Technical: Logged out</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="css/level3style.css">
    <?php
    include 'php/json.php';
    include 'php/login.php';
    ?>

    <?php
    $DATA = readJSON('users.json');

    $USERID = $SESSIONTIME = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $USERID = $_POST["userID"];
        $SESSIONTIME = $_POST["timeLoggedIn"];
    }
    ?>
</head>
<body>
    <header>
        <h1>Logged out</h1>
    </header>
    <p><i><a href="login.html.php">Back to login</a></i></p>
    <p><i><a href="../technical.html">Back to Hw8 Technical</a></i></p>

    <br>

    <p>User ID: <?php echo $USERID ?></p>
    <p>Session time: <?php echo $SESSIONTIME ?></p>
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") echo "<p>a</p>"; // ????
    ?>
</body>
</html>