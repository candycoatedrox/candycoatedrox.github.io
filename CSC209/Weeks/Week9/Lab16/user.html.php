<!DOCTYPE html>
<html>
<head>
    <title>Lab 16: Logged In</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <?php include 'php/loginLib.php' ?>
</head>
<body>
    <h1>Logged in</h1>
    <p><i><a href="lab16.html">Back to lab</a></i></p>

    <br>

    <p>Welcome <?php echo $_POST["username"] ?></p>
    <p>Your password is: <?php echo $_POST["password"] ?></p>

    <hr>
    <p><i>Return:</i></p>
    <ul>
        <li><a href="part1.html.php">Part 1</a></li>
        <li><a href="part2.html.php">Part 2</a></li>
        <li><a href="part3.html.php">Part 3</a></li>
    </ul>
</body>
</html>