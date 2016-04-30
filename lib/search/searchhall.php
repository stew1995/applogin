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
  $resulthall = mysqli_query($conn, "SELECT name, location, postcode FROM hall
                                  WHERE name LIKE ('%".$search."%')");
    echo "<table id='searchresulttable'";
      echo "<tr>";
        echo "<th>Name</th>";
        echo "<th>Address</th>";
        echo "<th>Postcode</th>";
      echo "</tr>";
    while($row = mysqli_fetch_array($resulthall)) {
      echo ''. "<tr>";
        echo "<td>". $row['name']. "</td>";
        echo "<td>". $row['location'] . "</td>";
        echo "<td>". $row['postcode'] . "</td>";
        echo "<td>". $row['accom'] . "</td>";
        echo "<td>". $row['study'] . "</td>";
      echo "</tr>";
    }
    echo "</table>" . "\n";
}
?>
