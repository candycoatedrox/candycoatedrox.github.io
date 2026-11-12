<!DOCTYPE html>
<html>
<head>
    <title>Level 2: Logged In</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/level2style.css">
    <?php include 'php/loginLib.php' ?>
</head>
<body>
    <h1>Logged in</h1>
    <p><i><a href="../technical.html">Back to Hw8 Technical</a></i></p>

    <br>

    <p>Welcome <?php echo $_POST["username"] ?></p>
    <p>Your password is: <?php echo $_POST["password"] ?></p>

    <hr>
    <p><i><a href="login.html.php">Return to login</a></i></p>
</body>
</html>