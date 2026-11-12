<?php
function readJSON($path) {
    $json = file_get_contents($path);
    $data = json_decode($json, true);
    return $data;
}

// used in Part 2
function validateForm($username, $password) {
    global $DATA;
    foreach ($DATA as $user) {
        if ($user["username"] == $username and $user["password"] == $password) {
            return true;
        }
    }
    return false;
}

// used in Part 3
function validateFormWithIncrement($username, $password) {
    global $DATA;
    foreach ($DATA as &$user) {
        if ($user["username"] == $username and $user["password"] == $password) {
            $user["loggedtimes"]++;
            return true;
        }
    }
    unset($user);
    return false;
}

function writeToUsers($path) {
    global $DATA;
    $file = fopen($path, 'w');
    fwrite($file, json_encode($DATA));
}
?>