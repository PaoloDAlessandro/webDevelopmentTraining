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

<div class="container">
        <div class="column-20"></div>
        
        <div class="column-60">
        
            <form action="insertUser.php" id="userForm" method="POST">
    
                <div class="input_container" id="input_container_username">
                    <label for="name">Username:</label>
                    <input type="text" placeholder="Your username" name="username" id="input_username" autocomplete="disable">
                </div>

                <div class="input_container" id="input_container_email">
                    <label for="name">Email:</label>
                    <input type="text" placeholder="Your email" id="input_email" name="email" autocomplete="disable">
                </div>
                
                <button type="button" onclick="loginInputChecker()">log-in</button>
            </form>

        </div>

        <div class="column-20">
            <div class="button_container">
                    <a href="prova.php">view users</a>
            </div>
        </div>

    

<script src="formInputChecker.js"></script>

</body>
</html>
