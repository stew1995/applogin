<?php // CREATE NOT NULL ON UNIQUE KEY
//INSERT INTO user
if(isset($_POST['checkValidation'])){
  function  validate_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = strip_tags($data);
    $data = htmlspecialchars($data);
    return $data;
}

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

  $name = validate_data($_POST['FName']);
  $surname = validate_data($_POST['LName']);
  $gender = validate_data($_POST['Gender']);
  $dob = validate_data($_POST['DOB']);
  $email = validate_data($_POST['Email']);
  $password = validate_data($_POST['Password']);
  $address = validate_data($_POST['HomeAddress']);
  $postcode = validate_data($_POST['Postcode']);
  $homeNumber = validate_data($_POST['HomeNumber']);
  $mobile = validate_data($_POST['Mobile']);
  $hobbie = $_POST['Hobbies'];
  $society = $_POST['Society'];
  $smoke = validate_data($_POST['Smoker']);

  echo "Data pulled" . mysqli_error($conn);
    $sqlregister =
    "INSERT INTO `user` (`fname`, `lname`, `gender`, `email`, `password`, `dob`, `address`,
                      `postcode`, `hnumber`, `mobile`, `hobbie`, `society`, `smoker`)
    VALUES ('$name', '$surname', '$gender', '$email', '$password', '$dob', '$address',
            '$postcode', '$homeNumber', '$mobile', '$hobbie', '$society', '$smoke')";

  //Check if user registered data has been inputted correctly
  $check = mysqli_query($conn, $sqlregister);
  if(!$check) {
    echo "Data was not inserted" . mysql_error($conn);
  } else {
    echo "Data entered successfully"; 
  }

}
?>
