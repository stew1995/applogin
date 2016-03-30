<?php
//including database file to the databse


//define variables and set to empty values
$name = $surname = $DOB = $email = $password = $address = $postcode = $homeNumber = $mobile = "";
//defined error variables
$nameErr = $surnameErr = $DOBErr = $emailErr = $passwordErr = $addressErr = $postcodeErr = $mobileErr = "";
if($_SERVER["REQUEST_METHOD"] == "POST") {
  if(empty($_POST["FName"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["FName"]);
    //Check if there is only letters and spaces
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  };

  if(empty($_POST["LName"])) {
    $surnameErr = "Surname is required";
  } else {
    $surname = test_input($_POST["LName"]);
    //Check if there is only letters and spaces
    if (!preg_match("/^[a-zA-Z ]*$/",$surname)) {
      $surnameErr = "Only letters and white space allowed";
    }
  };

  if(empty($_POST["DOB"])) {
    $DOBErr = "Date of Birth is required";
  } else {
    $DOB = test_input($_POST["DOB"]);
    if (!preg_match("/([0-9]{2})\/([0-9]{2})\/([0-9]{3})/", $DOB)) {
      $DOBErr = "Enter date of birth";
    }
  };


  if(empty($_POST["Email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["Email"]);
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid Email Format";
    }
  };

  if(empty($_POST["Password"])) {
    $emailErr = "Password is required";
  } else {
    $email = test_input($_POST["Password"]);
    if(!preg_match("//", $password)) {
      $passwordErr = "Invalid password format";
    }
  }


  if(empty($_POST["HomeAddress"])) {
    $addressErr = "Address is required";
  } else {
    $address = test_input($_POST["HomeAddress"]);
	  if(!preg_match("[0-9] [a-zA-Z]/")) { //Check this so that a house with a name can be put in
      $addressErr = "Enter a valid address";
	}
  };


  if(empty($_POST["Postcode"])) {
    $postcodeErr = "Postcode is required";
  } else {
    $postcode = test_input($_POST["Postcode"]);
      if(!preg_match("/^[A-Z]{1,2}[0-9]{2,3}[A-Z]{2}$/",$postcode) ||
            !preg_match("/^[A-Z]{1,2}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{2}$/",$postcode) ||
            !preg_match("/^GIR0[A-Z]{2}$/",$postcode)) {
              $postcodeErr = "Invalid postcode, please enter a new one";
    }
  };


  if(empty($_POST["HomeNumber"])) {
    $homeNumber = "";
  } else {
    $homeNumber = test_input($_POST["HomeNumber"]);
    if (!preg_match("/^[1-9][0-9]{0,15}$/", $homeNumber)) {

    }
  };

  if(empty($_POST["Mobile"])) {
    $mobileErr = "Mobile number is required";
  } else {
    $mobile = test_input($_POST["Mobile"]);
	  if(!preg_match("/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/", $mobile)) {
      $mobileErr = "Enter a valid mobile number";
    }
  }
};

//Variables for univesity section of registration
$course = $yearOfStudy = $accom = "";
//Error Variables
$courseErr = $yearOfStudyErr = $accomErr = "";

if(empty($_POST["Course"])) {
  $courseErr = "Please enter the course you will studying";
} else {
  $course = test_input($_POST["Course"]);
  if(!preg_match("", $course)) {
    $courseErr = "Enter your course name";
  }
};

if(empty($_POST["StudyYear"])) {
  $yearOfStudyErr = "Please enter your study year";
} else {
  $course = test_input($_POST["StudyYear"]);
  if(!preg_match("/^[1-4]$/", $yearOfStudy)) {
    $yearOfStudyErr = "Enter the correct year you will be attending";
  }
};

if(empty($_POST["Halls"])) {
  $accomErr = "Select where you will be staying";
} else {
  $accom = test_input($_POST["Halls"]);
};

if(empty($_POST["House"])) {
  $accomErr = "Select where you will be staying";
} else {
  $accom = test_input($_POST["House"]);
};

//About yourself validation - variables
$hobbie = $interest = $society = "";
//Error variables
$hobbieErr = $interestErr = $societyErr = "";


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

