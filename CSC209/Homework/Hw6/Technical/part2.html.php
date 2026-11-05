<!DOCTYPE html>
<html>
<head>
    <title>Slideshow with PHP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/slideshow.css">

    <script src="js/part2.js"></script>
    <script>
        let ACTIVEFOLDER;
        let ACTIVESLIDE;
    </script>

    <?php
        include 'php/part2Lib.php';

        $PATH = "images/SUBFOLDER/*.*";
        $DIVTEMPLATE = '<div class="slideshow" id="SUBFOLDER">';
        $SLIDETEMPLATE = '<div class="slide FOLDERSLIDE"><div class="numbertext"><a class="arrow prev">◀</a> XX / YY <a class="arrow next">▶</a></div><div class="imgContainer"><img class="slideImage" src="FILENAME"></div><div class="caption">CAPTION</div></div>';
    ?>
</head>

<body>
    <header>
        <h1>Slideshow with PHP</h1>
        <p><a href="technical.html">Back to Hw6 Technical</a></p>
    </header>
    <br>

    <div class="slideshowContainer">
        <div class="dropdown">
            <select id="subfolder" name="subfolder">
                <option value="dogs">Dogs</option>
                <option value="art">Art</option>
            </select>
        </div>

        <div id="wrap"></div>
    </div>

    

    <script>
        const SELECT = document.getElementById('subfolder');
        SELECT.addEventListener('change', e => { setFolder(e.target.value); });

        const WRAP = document.getElementById("wrap");
        WRAP.innerHTML = <?php echo "'" . generateImages('dogs', $PATH, $DIVTEMPLATE, $SLIDETEMPLATE) . generateImages('art', $PATH, $DIVTEMPLATE, $SLIDETEMPLATE) . "'"; ?>;

        const SLIDESHOWS = document.getElementsByClassName("slideshow");
        const DOGSLIDES = document.getElementsByClassName("dogsSlide");
        const ARTSLIDES = document.getElementsByClassName("artSlide");
        const NEXTARROWS = document.getElementsByClassName("next");
        const PREVARROWS = document.getElementsByClassName("prev");

        for (let i = 0; i < NEXTARROWS.length; i++) {
            NEXTARROWS[i].addEventListener("click", () => nextSlide());
            PREVARROWS[i].addEventListener("click", () => prevSlide());
        }

        setFolder('dogs');
        setSlide('dogs', 0);
        setSlide('art', 0)
    </script>

<!-- captions should be file names -->
<!-- ◀ ▶ -->
</body>
</html>