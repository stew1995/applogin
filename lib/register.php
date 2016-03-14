<?php
//define variables and set to empty values
$name = $surname = $DOB = $email = $address = $postcode = $homeNumber = $mobile = "";
//defined error variables
$nameErr = $surnameErr = $DOBErr = $emailErr = $addressErr = $postcodeErr = $mobileErr = "";

if($_SERVER["REQUEST_METHOD"] == "POST") {
  if(empty($_POST["FName"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["FName"]);
  }

  if(empty($_POST["LName"])) {
    $surnameErr = "Surname is required";
  } else {
    $surname = test_input($_POST["LName"]);
  }

  if(empty($_POST["DOB"])) {
    $DOBErr = "Date of Birth is required";
  } else {
    $DOB = test_input($_POST["DOB"]);
  }

  if(empty($_POST["Email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["Email"]);
  }

  if(empty($_POST["HomeAddress"])) {
    $addressErr = "Address is required";
  } else {
    $address = test_input($_POST["HomeAddress"]);
  }

  if(empty($_POST["Postcode"])) {
    $postcodeErr = "Postcode is required";
  } else {
    $postcode = test_input($_POST["Postcode"]);
  }

  if(empty($_POST["HomeNumber"])) {
    $homeNumber = "";
  } else {
    $homeNumber = test_input($_POST["HomeNumber"]);
  }
}

if(empty($_POST["Mobile"])) {
  $mobileErr = "Mobile number is required";
} else {
  $mobile = test_input($_POST["Mobile"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
