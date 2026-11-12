<!DOCTYPE html>
<html>
<head>
    <title>Lab 16: Part 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <?php include 'php/loginLib.php' ?>

    <?php
    $DATA = readJSON('users.json');

    $USERERR = $PASSERR = $FORMERR = "";
    $USERNAME = $PASSWORD = "";
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
            $VALIDINPUT = validateForm($USERNAME, $PASSWORD);

            if ($VALIDINPUT) {
                //echo '<script> location.href = "user.html.php"; </script>';
                //$FORMERR = "successfully logged in"; // temp
            } else {
                $FORMERR = "Incorrect username or password.";
            }
        }
    }
    ?>
</head>
<body>
    <h1>Lab 16: Part 2</h1>
    <p><i><a href="lab16.html">Back to lab</a></i></p>

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
            console.log('validInput');
            const FORM = document.getElementById('login');
            const USERINPUT = document.getElementById('username');
            const PASSINPUT = document.getElementById('password');

            FORM.setAttribute('action', 'user.html.php');
            USERINPUT.setAttribute('value', '$USERNAME');
            PASSINPUT.setAttribute('value', '$PASSWORD');
            FORM.submit();
        </script>";
    }
    ?>
</body>
</html>