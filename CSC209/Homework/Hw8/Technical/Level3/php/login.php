<?php
function validateForm($username, $password) {
    global $DATA;
    //foreach ($DATA as &$user) {
    for ($i = 0; $i < count($DATA); $i++) {
        $user = $DATA[$i];
        if ($user["username"] == $username and $user["password"] == $password) {
            if ($username != "admin") $DATA[$i]["loggedtimes"]++;
            return $i;
        }
    }
    unset($user);
    return -1;
}

function extractFolderNumber($path) {
    $filepath = realpath($path);
    $directory = dirname($filepath);
    $folders = explode('\\', $directory);
    $userfolder = $folders[count($folders)-1];
    $usernrstring = substr($userfolder, -1);
    $usernr = 0;
    if (is_numeric($usernrstring)) $usernr = intval($usernrstring);

    return $usernr;
}
?>