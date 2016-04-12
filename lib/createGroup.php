<?php
if(isset($_POST['submitCreateGroup'])) {
  //Database Variables
  $servername = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "web";
  //Create connection
  $conn = mysqli_connect($servername, $username, $password, $dbname);
  //Check connection
  if(!$conn) {
    die("Connection to database failed: ". mysqli_connect_error());
  }

  if(!get_magic_quotes_gpc()) {
    $groupName = addslashes($_POST['createGroupName']);
    $groupDesc = addslashes($_POST['groupDescription']);
    //$addUser = addslashes($_POST['addToGroup']);
  } else {
    $groupName = $_POST['createGroupName'];
    $groupDesc = $_POST['groupDescription'];
    //$addUser = $_POST['addToGroup'];
  }

  $sql = "INSERT INTO house (name, description) VALUES('$groupName', '$groupDesc')";
  $retval = mysqli_query($sql, $conn);

  if(!$retval) {
    die('Could not enter data: ' . mysqli_error());
  }

  echo "Data entered successfully\n";
  mysqli_close($conn);
}
 ?>
