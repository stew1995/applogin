<?php
include('conn.php');
if(isset($_GET['search']) && $_GET['search'] != '') {
  $search = $_GET['search'];
  $result = mysqli_query($conn, "SELECT * FROM user WHERE fname LIKE ('%".$search."%')");
  while($row = mysqli_fetch_array($result)) {
    echo ''. $row['fname'] . $row['lname'] . "\n";
  }
}
?>
