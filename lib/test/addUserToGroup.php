<?php

require('conn.php');
if(isset($_GET['addWho'])$_GET['addWho'] != '') {
  $search = $_GET['addWho'];
  $result = mysqli_query("SELECT * FROM user WHERE fname AND lname LIKE ('%".$search."%')");
  while($row = mysqli_fetch_array($result)) {
    echo ''. $row['name'] . "\n";
    }
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


 ?>
