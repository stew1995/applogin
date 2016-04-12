<!DOCTYPE html>
<html>
<body>
<?php
  $q = interval($_GET['q']);
  $conn = mysqli_connect('localhost', 'root', 'root', 'web');
  if(!conn){
    die('Could not connect: '. mysqli_error($conn));
  }

  mysqli_select_db($conn, "web");
  $sql="SELECT * FROM halls WHERE id = '".$q."'";
  $result = mysqli_query($conn, $sql);

  echo "<table id="hallsOutput">
          <tr>
            <th>Halls ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Postcode</th>
          </tr>";
          while($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>". $row['hall_id'] . "</td>";
            echo "<td>". $row['name'] . "</td>";
            echo "<td>". $row['location'] . "</td>";
            echo "<td>". $row['postcode'] . "</td>";
            echo "</tr>";
          }
  echo "</table>";
  mysqli_close($conn);
?>

</body>
</html>
