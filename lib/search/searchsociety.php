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
  $result = mysqli_query($conn, "SELECT name
                                FROM society
                                WHERE name LIKE ('%".$search."%')");
  echo "<table id='searchresulttable'";
    echo "<tr>";
      echo "<th>Name</th>";
    echo "</tr>";
  while($row = mysqli_fetch_array($result)) {
    echo ''. "<tr>";
      echo "<td>". $row['name']. "</td>";
    echo "</tr>";
  }
  echo "</table>" . "\n";
}
?>
