<!DOCTYPE html>
<html>
<head>
    <title>Hw8 Technical: Level 3</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    
    <link rel="stylesheet" href="css/level3style.css">
    <?php
    include 'php/json.php';
    include 'php/login.php';
    ?>

    <?php
    $DATA = readJSON('users.json');

    $USERERR = $PASSERR = $FORMERR = "";
    $USERNAME = $PASSWORD = "";
    $USERID = -1;
    $VALIDINPUT = false;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $emptyFields = false;

        if (empty($_POST["username"])) {
            $emptyFields = true;
            $USERERR = "Username is required";
        }

        if (empty($_POST["password"])) {
            $emptyFields = true;
            $PASSERR = "Password is required";
        }

        if (!$emptyFields) {
            $USERNAME = htmlspecialchars($_POST["username"]);
            $PASSWORD = htmlspecialchars($_POST["password"]);
            $USERID = validateForm($USERNAME, $PASSWORD);
            $VALIDINPUT = $USERID != -1;

            if ($VALIDINPUT) {
                //echo '<script> location.href = "user.html.php"; </script>';
                //$FORMERR = "successfully logged in"; // temp

                // TEMP COMMENTED OUT writeToUsers('users.json');
            } else {
                $FORMERR = "Incorrect username or password.";
            }
        }
    }
    ?>
</head>
<body>
    <header>
        <h1>Login</h1>
    </header>
    <p><i><a href="../technical.html">Back to Hw8 Technical</a></i></p>

    <br>

    <form id="login" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        Username: <input id="username" type="text" name="username">
        <span class="error">* <?php echo $USERERR ?></span><br>
        Password: <input id="password" type="text" name="password">
        <span class="error">* <?php echo $PASSERR ?></span><br>
        <span class="error"><?php echo $FORMERR ?></span><br>
        <input type="submit">
    </form>


    <?php
    if ($VALIDINPUT) {
        echo "<script>
            const FORM = document.getElementById('login');
            const USERINPUT = document.getElementById('username');
            const PASSINPUT = document.getElementById('password');

            if ($USERID == 0) {
                FORM.setAttribute('action', 'Admin/admin.html.php');
            } else {
                FORM.setAttribute('action', 'User/User$USERID/user.html.php');
            }
            
            USERINPUT.setAttribute('value', '$USERNAME');
            PASSINPUT.setAttribute('value', '$PASSWORD');
            FORM.submit();
        </script>";
    }
    ?>
</body>
</html>