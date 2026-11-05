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

    <script src="js/part1.js"></script>

    <?php
        include 'php/part1Lib.php';

        $PATH = "images/SUBFOLDER/*.*";
        $TEMPLATE = "<img src='FILENAME'>";
    ?>
</head>

<body>
    <h1>Dynamic Images with PHP</h1>
    <p><a href="technical.html">Back to Hw6 Technical</a></p>
    <br>

    <select id="subfolder" name="subfolder">
        <option value="art">Art</option>
        <option value="dogs">Dogs</option>
    </select>

    <br><br>

    <div id="art" class="active"></div>
    <div id="dogs"></div>

    <script>
        const SELECT = document.getElementById('subfolder');
        SELECT.addEventListener('change', e => { setActive(e.target.value); });

        const DIVS = document.getElementsByTagName('div');
        const ARTDIV = document.getElementById('art');
        const DOGSDIV = document.getElementById('dogs');

        ARTDIV.innerHTML = <?php echo json_encode(generateImages('art', $PATH, $TEMPLATE)); ?>;
        DOGSDIV.innerHTML = <?php echo json_encode(generateImages('dogs', $PATH, $TEMPLATE)); ?>;
    </script>
</body>
</html>