<!DOCTYPE html>
<html>
  <head>
    <style>
      table {
          width: 100%;
          border-collapse: collapse;
      }
      table, td, th {
          border: 1px solid black;
          padding: 5px;
      }
      th {text-align: left;}
    </style>
  </head>
  <body>

    <?php
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
    if(isset($_POST['viewGroups'])) {
    $sql="SELECT group_id, name, description, datecreated FROM house";
    $result = mysqli_query($conn,$sql);
    echo "<table>
    <tr>
    <th>Group ID</th>
    <th>Name</th>
    <th>Description</th>
    <th>Date Created</th>
    </tr>";
      // output data of each row
      while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['group_id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['description'] . "</td>";
        echo "<td>" . $row['datecreated'] . "</td>";
        echo "</tr>";
    
  }
    echo "</table>";
    mysqli_close($conn);
  }
    ?>
  </body>
</html>
