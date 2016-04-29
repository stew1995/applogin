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
  
  //Need to use if statements for the multisearch, with the last being this if nothing is selected, look at rest of search code 
  //Do statement for study yeart 
//  $studyyearsql = "SELECT fname, lname, course, study 
//                  FROM user 
 //                 INNER JOIN uni 
//                  ON user.id = uni.user_id
//                  WHERE fname LIKE ('%".$search."%')
//                  AND course LIKE ";
  //$result = mysqli_query($conn, "SELECT * FROM user WHERE fname LIKE ('%".$search."%')");
  
  //Halls search needed 
  //group search 
  //smoker true or false 
  //about yourself questions 
  //else {
  $result = mysqli_query($conn, "SELECT fname, lname, course, accom, study 
                                FROM user  
                                INNER JOIN uni  
                                ON user.id = uni.user_id 
                                WHERE fname LIKE ('%".$search."%')");
  echo "<table id='searchresulttable'";
    echo "<tr>";
      echo "<th>Name</th>";
      echo "<th>Accomodation</th>";
      echo "<th>Year</th>";
    echo "</tr>";
  while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
      echo "<td>" . $row['fname']. " ". $row['lname'] . "</td>";
      echo "<td>" . $row['accom']. "</td>";
      echo "<td>" . $row['study']. "</td>";
    echo "</tr>";
      //echo ''. $row['fname'] . " ". $row['lname'] . "\n";
  }
  echo "</table>";
}
?>
