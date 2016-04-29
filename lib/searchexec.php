<?php
ini_set('display_errors', FALSE);
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "web";
//Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
//Check connection
if(!$conn) {
  die("Connection to database failed: ". mysqli_connect_error());
}if(isset($_GET['search']) && $_GET['search'] != '') {
  $search = $_GET['search'];
  $result = mysqli_query($conn, "SELECT * FROM user WHERE fname LIKE ('%".$search."%')");
  while($row = mysqli_fetch_array($result)) {
    echo ''. $row['fname'] . "\n" . $row['lname'] . "\n";
  }
}
?>
