<?php
function readJSON($path) {
    $json = file_get_contents($path);
    $data = json_decode($json, true);
    return $data;
}

function createTable($path) {
    $data = readJSON($path); // get JSON data

    $html = '<table>';
    
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
            $html .= "<td>$val</td>";
        }
        $html .= '</tr>';
    }

    $html .= '</table>';
    return $html;
}
?>