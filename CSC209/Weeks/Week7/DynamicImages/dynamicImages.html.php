<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Images with PHP</title>
    <style>
        body { padding: 0 10px; }
        img { max-height: 500px; }
    </style>

    <?php
        include 'imageFunctions.php';

        $DIR = "images/";
        $TEMPLATE = "<img src='FILENAME'>";
        
        $FILENAMES = glob($DIR . '*.*');
    ?>
</head>

<body>
    <h1>Dynamic Images with PHP</h1>
    <p><a href="../../../main.html">Back to index</a></p>
    <br>

    <div style="max-width:100%">
        <?php generateImages($FILENAMES, $TEMPLATE); ?>
    </div>
</body>
</html>