<!DOCTYPE html>
<html>
<head>
    <title>Hw8 Technical: Logged in</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">

    <link rel="stylesheet" href="../../css/level3style.css">
    <?php
    include '../../php/json.php';
    include '../../php/login.php';
    ?>
    <script src="../js/user.js"></script>

    <script>
        const LOGINTIME = Date.now();
    </script>
</head>
<body>
    <header>
        <h1>Logged in</h1>
    </header>

    <br>

    <p>Welcome <?php echo $_POST["username"] ?></p>
    <p>Your password is: <?php echo $_POST["password"] ?></p>

    <br>
    <hr>

    <button id="logoutButton">Logout</button>

    <form id="logout" action="../../logout.html.php">
        <input id="userID" type="hidden" name="userID" value="<?php echo extractFolderNumber('user.html.php') ?>">
        <input id="timeLoggedIn" type="hidden" name="timeLoggedIn">
        <input style="display:none" type="submit">
    </form>

    <script>
        const FORM = document.getElementById('logout');
        const TIMELOGGED = document.getElementById('timeLoggedIn');
        const BUTTON = document.getElementById('logoutButton');

        BUTTON.addEventListener('click', () => {
            console.log(LOGINTIME);
            let sessionTime = getMillisecondsSince(LOGINTIME); // getMinutesSince(LOGINTIME);
            console.log(sessionTime);
            TIMELOGGED.setAttribute('value', sessionTime);
            console.log(TIMELOGGED.getAttribute('value'));
            FORM.submit(); // doesn't count as post???
            //console.log('time logged in: ' + getMinutesSince(LOGINTIME));
        });
    </script>
</body>
</html>