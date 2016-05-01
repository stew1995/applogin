<?php
require('conn.php');
//Validate data before putting into database
function  validate_data($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = strip_tags($data);
  $data = htmlspecialchars($data);
  return $data;
}

        
//Get the user email for the ID
$startingEmail = validate_data($_POST['emailID']);
$startingPass = validate_data($_POST['passwordID']);
if(!empty($startingEmail) && ($startingPass)) {
  $getID = "SELECT id FROM user WHERE email='$startingEmail' AND password='$startingPass'";
  $checkID  = mysqli_query($conn, $getID);
  if(!$checkID) {
    die("Can not get user ID" . mysqli_error($conn));
  } while ($row= mysqli_fetch_assoc($checkID)) {
    echo $row ['id'];
  //Edit first and last name
  if(isset($_POST['submitName'])) {
    echo $row ['id'];
    $fname = validate_data($_POST['profileName']);
    $lname = validate_data($_POST['profileLName']);
    if(!empty($fname)) {
      echo $row ['id'];
      $fnamesql = "UPDATE user SET fname='$fname' WHERE id='['id']'";
      mysqli_query($conn, $fnamesql) or die("Cannot change first name data in database" . mysqli_error($conn));

    } else if (!empty($lname)) {
      echo $row ['id'];
      $lnamesql = "UPDATE user SET fname='$lname' WHERE id='['id']'";
      mysqli_query($conn, $lnamesql) or die("Cannot change last nanme data in database" . mysqli_error($conn));

  }

  //Edit password
  if(isset($_POST['submitPassword'])){ 
    echo $row ['id'];
    $oldpassword = validate_data($_POST['oldpassword']);
    $firstPass = validate_data($_POST['newpassword']);
    $retypePass = validate_data($_POST['retypenewpassword']);
    if($oldpassword = $firstPass && !empty($oldpassword) && !empty($firstPass)) {
      echo "Old password and new password match";
    } else {
      if($firstPass != $retypePass) {
        echo "Passwords dont match";
      } else {
        $sql = "UPDATE user SET password='$retypePass' WHERE id='['id']'";
        mysqli_query($conn, $sql) or die("Cannot change password data in database" . mysqli_error($conn));

      }
    }
  }

  if(isset($_POST['submitemail'])) {
    $oldemail = validate_data($_POST['oldemail']);
    $newemail = validate_data($_POST['newemail']);
    $retype = validate_data($_POST['retypeemail']);
    if($oldemail = $newemail && !empty($oldemail) && !empty($newemail)) {
      echo "Emails match";
    } else {
      if ($newemail != $retype) {
        echo "Emails do not match ";
      } else {
        $sql = "UPDATE user SET email='$newemail' WHERE id='[id]'";
        mysqli_query($conn, $sql) or die("Cannot change email data in database" . mysqli_error($conn));

      }
    }
  }

  if(isset($_POST['submitAddress'])) {
    $address = validate_data($_POST['newaddress']);
    if(!empty($address)){
      $sql = "UPDATE user SET address='$address' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change address data in database" . mysqli_error($conn));

    }
  }

  if(isset($_POST['submitpostcode'])) {
    $postcode = validate_data($_POST['newpostcode']);
    if(!empty($postcode)){
      $sql = "UPDATE user SET postcode='$postcode' WHERE id='[id]";
      mysqli_query($conn, $sql) or die("Cannot change postcode data in database" . mysqli_error($conn));

    }
  }

  if(isset($_POST['submitmobile'])) {
    $newmobile = validate_data($_POST['newmobile']);
    $newhome = validate_data($_POST['newhome']);

    if(!empty($newmobile)) {
      $sql = "UPDATE user SET mobile='$newmobile' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change mobile data in database" . mysqli_error($conn));

    }

    if(!empty($newhome)) {
      $sql = "UPDATE user SET homemobile='$newhome' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change home data in database" . mysqli_error($conn));

    }
  }


  //Hobbies
  if(isset($_POST['submithobbie'])) {
    $hobbie =  validate_data($_POST['hobbielist']);
    if(!empty($hobbie)) {
      $sql ="UPDATE user SET hobbie='$searchID' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change hobbie data in database" . mysqli_error($conn));

    }
  }

  //Society
  if(isset($_POST['submitsociety'])) {
    $society = validate_data($_POST['societylist']);
    if(!empty($society)) {
      $sql = "UPDATE user SET society='$searchID' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change society data in database" . mysqli_error($conn));

    }
  }

  //Year
  if(isset($_POST['submityear'])) {
    $year = validate_data($_POST['yearlist']);
    if(!empty($year)){
      $sql = "UPDATE uni SET study='$year' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change year data in database" . mysqli_error($conn));

    }
  }
  //Course
  if(isset($_POST['submitcourse'])) {
    $course = validate_data($_POST['courselist']);
    if(!empty($course)) {
      $sql = "UPDATE uni SET course='$getID' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change course data in database" . mysqli_error($conn));

    }
  }

  //Accomadation
  if(isset($_POST['submitaccom'])) {
    $accom = validate_data($_POST['accomlist']);
    if(!empty($accom)) {
      $sql = "UPDATE uni SET accom='$accom' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change accomodation data in database" . mysqli_error($conn));

    }
  }


  //Smoker 
  if(isset($_POST['submitsmoke'])) {
    $smoke = $_POST['smoke'];
    if(!empty($smoker)) {
      $sql = "UPDATE user SET smoker='$smoke' WHERE id='[id]'";
      mysqli_query($conn, $sql) or die("Cannot change smoker data in database" . mysqli_error($conn));
    }
  }
}
}
}
?>
