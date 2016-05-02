<?php
//Establish Connection with server
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "web";
//Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
session_start();
//Storing session
$user_check = $_SESSION['login_user'];
//SQL query to fetch complete information of user
$ses_sql = mysqli_query("SELECT * FROM login WHERE email = '$user_check'", $conn);
$rows = mysqli_fetch_assoc($ses_sql);
$login_session = $rows['username'];
if(!isset($login_session)){
  mysqli_close($conn);
  header('Location: index.html')
}
?>
