<?php

  //Database Variables
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

  
if(isset($_GET['groupAdd'])) {
  if(!get_magic_quotes_gpc()) {
    $groupName = addslashes($_GET['groupName']);
    $groupDesc = addslashes($_GET['groupDesc']);
  } else {
    $groupName = $_GET['groupName'];
    $groupDesc = $_GET['groupDesc'];
  }

  $sqlcheck = "SELECT * FROM house WHERE name = '$groupName'";
  $check = mysqli_query($sqlcheck, $conn);

  if(!$check) {
  $sql = "INSERT INTO house (name, description) VALUES('$groupName', '$groupDesc')";
  $retval = mysqli_query($sql, $conn);

  if(!$retval) {
    die('Could not enter data: ' . mysqli_connect_error());
  }

  echo "Data entered successfully\n";
} else {
  echo "Name of group already taken";
}




if(isset($_GET['addWho']) && $_GET['addWho'] != '') {
  $search = $_GET['addWho'];
  $result = mysqli_query("SELECT * FROM user WHERE fname AND lname LIKE ('%".$search."%')");
  while($row = mysqli_fetch_array($result)) {
    echo ''. $row['name'] . "\n";
    }

  if(isset($_GET['friendAdd'])) {
    $groupName = $_GET['groupName'];
    $add = $_GET['addWho'];
    $getUserID = "SELECT id FROM user WHERE name='$add'";
    $checkUser = mysqli_query($getUserID, $conn);
    if(!$checkUser) {
      die "Could not get user ID";
    }
    $getGroupID = "SELECT id FROM house WHERE name='$groupName'";
    $checkID = mysqli_query($getGroupID, $conn);
    if(!$checkID) {
      die "Could not get group ID";
    } else {
      $setUserGroup = "UPDATE house SET user_id = '$checkUsers' WHERE group_id='$checkID'";
      $check = mysqli_query($check, $conn);
      if(!$check) {
        die "Cannot add user to group";
      }
    }
  }
}
  mysqli_close($conn);
}


 ?>
