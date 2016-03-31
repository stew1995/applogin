<?php

$servername = "130.211.85.219";
$username = "up703451";
$password = "amber1995";

// Create connection
$conn = mysqli_connect($servername, $username, $password, 8080);
//Check connection
if(!$conn) {
  die("Connection to database failed: ". mysqli_connect_error());
}

//Create database
$sql = "CREATE DATABASE web";
if(mysqli_query($conn, $sql)) {
  echo "Database was succesfully created";
} else {
  echo "Error creating database: ". mysqli_error($conn);
}

mysqli_close($conn);
?>
