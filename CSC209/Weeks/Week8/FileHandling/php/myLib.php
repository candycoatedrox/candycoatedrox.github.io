<?php
function extractFolderNumber($path) {
    $filepath = realpath($path);
    $directory = dirname($filepath);
    $folders = explode('\\', $directory);
    $weekfolder = $folders[count($folders) - 2];
    $weeknrstring = substr($weekfolder, -1);
    $weeknr = 0;
    if (is_numeric($weeknrstring)) $weeknr = intval($weeknrstring);

    return $weeknr;
}
?>