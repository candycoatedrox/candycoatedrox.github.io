<!DOCTYPE html>
<html>
<head>
    <title>PHP Filesystem Functions</title>
    <style>
        body { padding: 0 10px; }
    </style>
</head>
<body>
    <h1>PHP Filesystem Functions</h1>
    <p><i><a href="tutorials.html">Back to Hw6 Tutorials</a></i></p>

    <br>

    <h3>Open & Close</h3>
    <p>
        <?php
        /* fopen() modes:
            - r: READ only
                - file pointer at the BEGINNING OF FILE
            - w: WRITE only
                - ERASES CURRENT CONTENTS OF FILE or creates it if it doesn't exist
            - a: WRITE only
                - file pointer at the END OF FILE
                - creates the file if it doesn't exist
            - x: WRITE only
                - creates a new file
                - returns FALSE and an error if file already exists
            - c: WRITE only
                - file pointer at the BEGINNING OF FILE
                - creates the file if it doesn't exist
        (note: add + to the end of any mode to make it read/write)
        */

        $file = fopen('testFile.txt', 'r'); // read only mode, start at beginning of file

        // output lines until end of file
        while (!feof($file)) { // feof() checks if end of file has been reached
            $line = fgets($file); // gets next line of file
            echo $line . '<br>';
        }

        fclose($file); // closes the open file
        ?>
    </p>

    <br>

    <h3>Write</h3>
    <p>
        <?php
        $file = fopen('testWriteFile.txt', 'w');
        echo 'Characters written: ' . fwrite($file, 'Hello world!') . '<br>'; // fwrite() returns # of characters written
        fclose($file); // close in write-only mode

        echo '<u>File contents:</u><br>';
        $file = fopen('testWriteFile.txt', 'r'); // open in read-only from the start
        while (!feof($file)) {
            $line = fgets($file);
            echo $line . '<br>';
        }

        fclose($file);
        ?>
    </p>

    <br>

    <h3>Read</h3>
    <p>
        <?php
        $file = fopen('testFile.txt', 'r');
        echo 'Read 10 bytes: ' . fread($file, 10);
        fclose($file);
        ?>
    </p>

    <br>

    <h3>Check if a file exists</h3>
    <p>
        <?php
        $existsTrue = file_exists("testFile.txt");
        $existsFalse = file_exists("fakeTestFile.txt");
        echo 'File "testFile.txt" exists: ';
        var_dump($existsTrue);
        echo '<br>File "fakeTestFile.txt" exists: ';
        var_dump($existsFalse);
        ?>
    </p>

    <br>

    <h3>List files in a directory</h3>
    <p>
        <?php
        echo 'Files in this directory:<br>';
        print_r(glob('*.*'));
        ?>
    </p>
    
    <br>

    <h3>Moving the pointer</h3>
    <p>
        <?php
        $file = fopen('testFile.txt', 'r');
        echo 'First line of file: ' . fgets($file) . '<br>';
        echo '<i>Rewinding to beginning of file...</i><br>';
        rewind($file);
        echo 'Next line of file: ' . fgets($file) . '<br>';
        echo '<i>Setting pointer to byte 8...</i><br>';
        fseek($file, 8);
        echo 'Current position in file: ' . ftell($file) . '<br>';
        echo 'Next line of file: ' . fgets($file) . '<br>';
        echo '<i>Moving pointer forward by 5 bytes...</i><br>';
        fseek($file, 5, SEEK_CUR);
        echo 'Next line of file: ' . fgets($file);
        ?>
    </p>

</body>
</html>