<?php
    include "config.php";

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $username = $_POST['username'];
    $age = $_POST['age'];
    $email = $_POST['email'];

    $sql = "INSERT INTO users (name, surname, username, age, email) VALUES ('$name', '$surname', '$username', $age, '$email')";

    $result = $con->query($sql);

    if ($result === TRUE) {
        header("Location:prova.php");
      } else {
        echo "Error: " . $sql . "<br>" . $con->error;
      }

?>