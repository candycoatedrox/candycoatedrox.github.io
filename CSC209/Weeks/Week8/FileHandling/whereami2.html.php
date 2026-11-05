<!DOCTYPE html>
<html>
<head>
    <title>Where Am I?</title>
    <style>
        body { padding: 0 10px; }
    </style>

    <?php
    include 'php/myLib.php';

    $TITLE = 'This is an exercise for week ' . extractFolderNumber('whereami2.html.php');
    ?>
</head>
<body>
    <h2 id="info"></h2>

    <p>This page figures out its whereabouts</p>
    <p><a href="../../../main.html">Back to index</a></p>

    <script>
        document.getElementById('info').innerHTML = <?php echo json_encode($TITLE); ?>;
    </script>
</body>
</html>