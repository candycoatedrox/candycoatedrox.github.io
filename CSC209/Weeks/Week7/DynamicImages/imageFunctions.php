<?php
function generateImages($filenames, $template) {
    /* for ($i = 0; $i < count($filenames); $i++) {
        echo str_replace('FILENAME', $filenames[$i], $template);
    } */

    foreach ($filenames as $file) {
        echo str_replace('FILENAME', $file, $template);
    }
}
?>