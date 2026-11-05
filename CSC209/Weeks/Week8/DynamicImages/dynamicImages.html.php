<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Images with PHP</title>
    <style>
        body { padding: 0 10px; }
        img { max-height: 500px; }

        div {
            display: none;
            max-width: 100%;
        }

        div.active { display: block; }
    </style>

    <script src="script.js"></script>

    <?php
        include 'imageFunctions.php';

        $PATH = "images/SUBFOLDER/*.*";
        $TEMPLATE = "<img src='FILENAME'>";
    ?>
</head>

<body>
    <h1>Dynamic Images with PHP</h1>
    <p><a href="../../../main.html">Back to index</a></p>
    <br>

    <button onclick="setActive('art')">Art</button>
    <button onclick="setActive('dogs')">Dogs</button>

    <br><br>

    <div id="art" class="active"></div>
    <div id="dogs"></div>

    <script>
        const DIVS = document.getElementsByTagName('div');
        const ARTDIV = document.getElementById('art');
        const DOGSDIV = document.getElementById('dogs');

        ARTDIV.innerHTML = <?php echo json_encode(generateImages('art', $PATH, $TEMPLATE)); ?>;
        DOGSDIV.innerHTML = <?php echo json_encode(generateImages('dogs', $PATH, $TEMPLATE)); ?>;
    </script>
</body>
</html>