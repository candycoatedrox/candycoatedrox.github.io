<!DOCTYPE html>
<html>
<body>

<h1>Global and local scope</h1>

<h2>Global scope</h2>
<?php
$x = 5; // GLOBAL scope

function globalTest() {
    echo "Variable x inside function is: $x<br>";
}

globalTest();
echo "Variable x outside function is: $x";
?>

<h2>Local scope</h2>
<?php
function localTest() {
    $y = 10; // LOCAL scope
    echo "Variable y inside function is: $y<br>";
}

localTest();
echo "Variable y outside function is: $y";
?>

<h2>Static scope</h2>
<?php
function staticTest() {
    static $s = 0; // static, local scope
    echo "Value of s: $s";
    $s++;
}

staticTest();
echo "<br>";
staticTest();
echo "<br>";
staticTest();
?>

<h2>Global keyword</h2>
<?php
$a = 5;
$b = 10; // GLOBAL scope

echo "Variable a: $a; variable b: $b<br>";

function globalKeywordTest() {
    global $a, $b;
    $b = $a + $b;
}

globalKeywordTest();
echo "Variable b: $x";
?>

<p><a href="../../main.html">Back to index</a></p>

</body>
</html>
