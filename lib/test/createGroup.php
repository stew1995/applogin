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
    $noteName = addslashes($_POST['noteName']);
    $noteDesc = addslashes($_POST['houseNotesDesc']);
  } else {
    $noteName = $_POST['noteName'];
    $noteDesc = $_POST['houseNotesDesc'];
  }

  $sqlcheck = "SELECT * FROM note WHERE name = '$groupName'"

  $sql = "INSERT INTO note (name, data) VALUES('$noteName', '$noteDesc')";
  $retval = mysqli_query($sql, $conn);

  if(!$retval) {
    die('Could not enter data: ' . mysqli_connect_error());
  }

  echo "Data entered successfully\n";
  mysqli_close($conn);
}


 ?>
