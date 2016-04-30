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
  $result = mysqli_query($conn, "SELECT fname, lname, gender, course, accom, study, smoker
                                FROM user
                                INNER JOIN uni
                                ON user.id = uni.user_id
                                WHERE smoker = 'TRUE'
                                AND fname LIKE ('%".$search."%')");
  echo "<table id='searchresulttable'";
    echo "<tr>";
      echo "<th>Name</th>";
      echo "<th>Gender</th>";
      echo "<th>Course</th>";
      echo "<th>Accomodation</th>";
      echo "<th>Study Year</th>";
      echo "<th>Smoker</th>";
    echo "</tr>";
  while($row = mysqli_fetch_array($result)) {
    echo ''. "<tr>";
      echo "<td>". $row['fname']. " ". $row['lname'] . "</td>";
      echo "<td>". $row['gender'] . "</td>";
      echo "<td>". $row['course'] . "</td>";
      echo "<td>". $row['accom'] . "</td>";
      echo "<td>". $row['study'] . "</td>";
      echo "<td>". $row['smoker'] . "</td>";
    echo "</tr>";
  }
  echo "</table>" . "\n";
}
?>
