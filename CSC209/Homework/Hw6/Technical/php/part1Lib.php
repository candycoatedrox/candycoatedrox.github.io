<?php
function generateImages($subfolder, $dir, $template) {
    $filenames = glob(str_replace('SUBFOLDER', $subfolder, $dir));

    $html = '';
    foreach ($filenames as $file) {
        $html .= str_replace('FILENAME', $file, $template);
    }

    return $html;
}
?>