<!DOCTYPE html>
<html>
<head>
    <title>Lab 15: Part 3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    
    <?php include 'php/jsonLib.php' ?>
</head>
<body>
    <header>
        <h1>Lab 15: Part 3</h1>
    </header>
    <p class="return"><a href="lab15.html">Back to lab</a></p>

    <br>

    <div class="center">
        <?php
        echo createTable('users.json');
        ?>
    </div>

<!-- arrows: ▷ ▼ ▲ -->

<!-- look for PHP multisorting functions -->
 <!-- don't need to be able to sort ON THE CLIENT yet!! just make it sortable within the code!! -->
  
</body>
</html>