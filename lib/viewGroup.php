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
    if(isset($_POST['viewGroupsBtn'])) {
     // CREATE NOT NULL ON UNIQUE KEY
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

    $sql="SELECT group_id, name, description, datecreated FROM house";
    $result = mysqli_query($conn,$sql);
        if(mysqli_query($conn, $sql)) {
      echo "Error viewing groups". mysqli_error($conn);;
    }

    echo "<table>
    <tr>
    <th>Group ID</th>
    <th>Name</th>
    <th>Description</th>
    <th>Date Created</th>
    </tr>";
    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['group_id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['description'] . "</td>";
        echo "<td>" . $row['datecreated'] . "</td>";
        echo "</tr>";
    }
  }
  echo "</table>"
    mysqli_close($conn);
  }
    ?>
  </body>
</html>
