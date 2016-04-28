<!DOCTYPE html>
<html>
  <style>
    #hallsOuput {
      border: 1px solid black;
    }
    #hallsOuput th {
      background: red;
    }
  </style>
<body>
<?php
  $q = intval($_GET['q']);
  $conn = mysqli_connect('localhost', 'root', 'root', 'web');
  if(!$conn){
    die('Could not connect: '. mysqli_error($conn));
  }
  mysqli_select_db($conn, "web");
  $sqlshowHalls="SELECT * FROM halls WHERE id = '".$q."'";
  $result = mysqli_query($conn, $sqlshowHalls);
  if (!$result) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}

  echo "<table id='hallsOutput'>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Postcode</th>
          </tr>";
          while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
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
