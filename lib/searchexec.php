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
//                  AND study LIKE ";

//echo "<table id='searchresulttable'";
  //  echo "<tr>";
    //  echo "<th>Name</th>";
      //echo "<th>Course</th>";
//      echo "<th>Accomodation</th>";
  //    echo "<th>Year</th>";
  //  echo "</tr>";
  //while($row = mysqli_fetch_array($studyyearsql)) {
  //  echo "<tr>";
  //    echo "<td>" . $row['fname']. " ". $row['lname'] . "</td>";
  //    echo "<td>" . $row['course']. "</td>";
  //    echo "<td>" . $row['accom']. "</td>";
  //    echo "<td>" . $row['study']. "</td>";
  //  echo "</tr>";
  //  }
  //echo "</table>";
  //$result = mysqli_query($conn, "SELECT * FROM user WHERE fname LIKE ('%".$search."%')");
  
  //Halls search needed 
  //$hallsql = "SELECT * FROM hall WHERE name LIKE ('%".$search."%')";
  
  //echo "<table id='searchresulttable'";
  //  echo "<tr>";
    //  echo "<th>Name</th>";
      //echo "<th>Address</th>";
  //  echo "</tr>";
  //while($row = mysqli_fetch_array($studyyearsql)) {
  //  echo "<tr>";
    //    echo "<td>" . $row['name']. "</td>";
  //    echo "<td>" . $row['location']. " ". $row['postcode'] . "</td>";
  //  echo "</tr>";
  //  }
  //echo "</table>";
  
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
     echo "<th>Course</th>";
     echo "<th>Accomodation</th>";
    echo "<th>Study Year</th>";
    echo "</tr>";
  while($row = mysqli_fetch_array($result)) {
     echo ''. "<tr>";
   echo "<td>". $row['fname']. " ". $row['lname'] . "</td>";
     echo "<td>". $row['course'] . "</td>";
     echo "<td>". $row['accom'] . "</td>";
     echo "<td>". $row['study'] . "</td>";
     echo "</tr>"  . "\n";
     // echo ''. "<tr> <td>" . $row['fname'] . " ". $row['lname'] . "</td><td>" . $row['course'] . "</td><td>" . $row['accom'] . "</td><td>" . $row['study'] . "</td></tr>" . "\n";
  }
  echo "</table>";
}
?>
