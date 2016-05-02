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

//Edit Group Name
if(isset($_POST['editGroupBtn'])) {
  if(isset($_POST['submitGroupEdit'])){
    if(isset($_POST['editGroupNameChk'])) {
        $name = $_POST['editGroupName'];
        $oldName = $_POST['groupName'];
        $sql = "UPDATE house SET name='$name', WHERE name='$oldName'"
        $check = mysqli_query($sql, $conn);
        if(!$check) {
          die('Could not edit group name')
        }
    }


//Edit Group Description
    if(isset($_POST['editDescGroupChk'])){
      $desc = $_POST['userNameGroupInput'];
      $oldname = $_POST['groupName'];
      $sql  = "UPDATE house SET description='$desc', WHERE = name'$oldname";
      $check = mysqli_query($sql, $conn);
      if(!$check) {
        die('Could not edit description data')
      }
    }
  //Edit User, needs search bar in it for it to work

  }
}

//Remove Group
if(isset($_POST['rvmGroupBttn'])) {
  if(isset($_POST['submitGroupEdit'])){
      $groupName = addslashes($_POST['groupName']; // Add into the rest of the inputs
      $sql = "DELETE FROM house WHERE name = '$groupName'";
      $check = mysqli_query($sql, $conn);
      if(!$check) {
        die('Could not delete: ' . $groupName);
      }
    }
  }

?>
