<?php
  session_start(); // Start Session
  $error = ''; // Variable to store error message
  if(isset($_POST['login'])) {
    if(empty($_POST['username']) || empty($_POST['password'])) {
      $error = "Username or Password is invalid";
    } else {
      //Define $username and $password, server and db
      $username = $_POST['username'];
      $password = $_POST['password'];
      $servername = "localhost";
      $username = "root";
      $password = "root";
      $dbname = "web";
      //Connection to server by passing server name, user_id and password as parameter
      $conn = mysqli_connect($servername, $username, $password);
      //Stop SQL Injection
      $username = stripslashes($username);
      $password = stripslashes($password);
      $username = mysql_real_escape_string($username);
      $password =mysql_real_escape_string($password);
      //Database
      $db = mysqli_select_db($dbname, $conn);
      //SQL Query to fetch information from registered users and find a match
      $query = mysqli_query("SELECT * FROM login WHERE password = '$password' AND email = '$username'", $conn);
      $rows = mysqli_num_rows($query);
      if($rows == 1) {
        $_SESSION['login_user']=$username; //Initializing Session
        header['location: index.html'] //Redirecting to another page - need to look into if this is right
      } else {
        $error = "Username or Password is invalid";
      }
      mysqli_close($conn); // Close Connection
      }
    }
  }
 ?>
