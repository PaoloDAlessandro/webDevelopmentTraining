<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="addUser.css">
    <title>Document</title>
</head>
<body>

<?php
    include "config.php";
?>

<form action="insertUser.php" id="userForm" method="POST">
    <div class="input_container" id="input_container_name">
        <label for="name">Name:</label>
        <input type="text" placeholder="Your name" name="name" id="input_name" autocomplete="disable">
    </div>

    <div class="input_container" id="input_container_surname">
        <label for="name">Surname:</label>
        <input type="text" placeholder="Your surname" name="surname" id="input_surname" autocomplete="disable">
    </div>

    <div class="input_container" id="input_container_username">
        <label for="name">Username:</label>
        <input type="text" placeholder="Your username" name="username" id="input_username" autocomplete="disable">
    </div>

    <div class="input_container">
        <label for="name">Age:</label>
        <input type="number" placeholder="Your age" name="age" autocomplete="disable" min="14" max="120">
    </div>

    <div class="input_container" id="input_container_email">
        <label for="name">Email:</label>
        <input type="text" placeholder="Your email" id="input_email" name="email" autocomplete="disable">
    </div>
    
    <button type="button" onclick="addUserInputChecker()">add user</button>
</form>

<div class="button_container">
        <a href="prova.php">view users</a>
    </div>
    

<script src="formInputChecker.js"></script>

</body>
</html>
