<?php
function generateImages($subfolder, $dir, $divtemplate, $slidetemplate) {
    $filenames = glob(str_replace('SUBFOLDER', $subfolder, $dir));

    $nFiles = count($filenames);
    $output = str_replace('SUBFOLDER', $subfolder, $divtemplate);
    for ($i = 0; $i < $nFiles; $i++) {
        $file = $filenames[$i];
        $folders = explode("/", $file);
        $filenameparts = explode(".", $folders[count($folders) - 1]);
        $caption = $filenameparts[0];

        $html = "" . str_replace('FOLDERSLIDE', $subfolder . 'Slide', $slidetemplate);
        $html = str_replace('XX', $i+1, $html);
        $html = str_replace('YY', $nFiles, $html);
        $html = str_replace('FILENAME', $file, $html);
        $html = str_replace('CAPTION', $caption, $html);

        $output .= $html;
    }

    $output .= '</div>';
    return $output;
}
?>