<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Document</title>
</head>
<body>

    <?php
        include "config.php";

        $sql = "SELECT * FROM users";
        $result = $con -> query($sql);

        if($result->num_rows > 0){
            echo '<table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>username</th>
                            <th>age</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>';
            while($row = $result->fetch_assoc()){
                echo '<tr>
                        <td>' .$row['id']. '</td>
                        <td>' .$row['name']. '</td>
                        <td>' .$row['surname']. '</td>
                        <td>' .$row['username']. '</td>
                        <td>' .$row['age']. '</td>
                        <td>' .$row['email']. '</td>
                    </tr>';
            }
            echo '</tbody></table>';
        }
    ?>

    <div class="button_container">
        <a href="addUser.php">add user</a>
    </div>
    
</body>
</html>
