<?php
require('conn.php');
if(isset($_GET['search'] && $_GET['search'] != '')) {
  $search = $_GET['search'];
  $result = mysqli_query("SELECT * FROM hall WHERE name LIKE ('%".$search."%')");
    echo "<table id='searchresulttable'";
      echo "<tr>";
        echo "<th>Name</th>";
        echo "<th>Address</th>";
        echo "<th>Postcode</th>";
      echo "</tr>";
    while($row =mysqli_fetch_array($result)) {
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
