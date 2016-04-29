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
  $sqlshowHalls="SELECT * FROM halls WHERE name = '".$q."'";
  $result = mysqli_query($conn, $sqlshowHalls);


  echo "<table id='hallsOutput'>
          <tr>
            <th>Halls ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Postcode</th>
          </tr>";
          while ($row = mysqli_fetch_array($result)) {
          echo '<tr>';
          foreach($row as $field) {
              echo '<td>' . htmlspecialchars($field) . '</td>';
          }
          echo '</tr>';
          }
  echo "</table>";
  mysqli_close($conn);
?>

</body>
</html>
