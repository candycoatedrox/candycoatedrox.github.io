<!DOCTYPE html>
<html>
<head>
    <title>Where Am I?</title>
    <style>
        body { padding: 0 10px; }
    </style>

    <?php
    $FILEPATH = realpath('whereami.html.php');
    $DIRECTORY = dirname($FILEPATH);
    $FOLDERS = explode('\\', $DIRECTORY);
    $WEEKFOLDER = $FOLDERS[count($FOLDERS) - 2];
    $WEEKNRSTRING = substr($WEEKFOLDER, -1);
    $WEEKNR = 0;
    if (is_numeric($WEEKNRSTRING)) $WEEKNR = intval($WEEKNRSTRING);

    $OUTPUT = "File path: $FILEPATH<br>Directory: $DIRECTORY<br>Week folder: $WEEKFOLDER<br>Week number: $WEEKNR";
    ?>
</head>
<body>
    <p id="info"></p>

    <p>This page figures out its whereabouts</p>
    <p><a href="../../../main.html">Back to index</a></p>

    <script>
        document.getElementById('info').innerHTML = <?php echo json_encode($OUTPUT); ?>;
    </script>
</body>
</html>