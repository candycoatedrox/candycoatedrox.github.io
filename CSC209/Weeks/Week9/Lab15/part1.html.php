<!DOCTYPE html>
<html>
<head>
    <title>Lab 15: Part 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { padding: 0 10px; }
    </style>
    
    <?php include 'php/jsonLib.php' ?>
</head>
<body>
    <h1>Lab 15: Part 1</h1>
    <p><i><a href="lab15.html">Back to lab</a></i></p>

    <br>

    <?php
    var_dump(readJSON('users.json'));
    ?>
</body>
</html>