<?php
function readJSON($path) {
    $json = file_get_contents($path);
    $data = json_decode($json, true);
    return $data;
}

function writeToUsers($path) {
    global $DATA;
    $file = fopen($path, 'w');
    fwrite($file, json_encode($DATA));
}

function createAdminTable($path) {
    $data = readJSON($path); // get JSON data

    $html = '<table id="table">';
    
    $firstRow = true;
    foreach ($data as $user) {
        if ($firstRow) {
            $firstRow = false;
            $html .= '<tr>';
            foreach ($user as $field => $val) {
                $html .= '<th>' . ucfirst($field) . ' <span class="arrow">▷</span></th>';
            }
            $html .= '</tr>';
        }

        $html .= '<tr>';
        foreach ($user as $field => $val) {
            if (gettype($val) == 'array') {
                $html .= "<td class=\"" . $field . "Cell\">" . json_encode($val) . "</td>";
            } else {
                $html .= "<td class=\"" . $field . "Cell\">$val</td>";
            }
        }
        $html .= '</tr>';
    }

    $html .= '</table>';
    return $html;
}
?>