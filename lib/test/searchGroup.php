<?php
require('conn.php');
if(isset($_GET['search']) && $_GET['search'] != '') {
  $search = $_GET['search'];
  $result = mysqli_query("SELECT * FROM house WHERE name LIKE ('%".$search."%')");
  while($row = mysqli_fetch_array($result)) {
    echo ''. $row['name'] . "\n";
  }
}

//Put each of these files in the searchesec.php file created

 ?>
