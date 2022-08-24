<?php
    $username = "root";
    $password = "";
    $host = "localhost";
    $database = "training";

    $con = new mysqli($host, $username, $password, $database) or die("Server error");
    if($con -> connect_error){
        echo "Connection to " .$database. " database failed";
    }

?>