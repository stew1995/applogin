<?php // CREATE NOT NULL ON UNIQUE KEY
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

//INSERT INTO user
if(isset($_POST['checkValidation'])){
  $name = $_POST['FName'];
  $surname = $_POST['LName'];
  $gender = $_POST['Gender'];
  $dob = $_POST['DOB'];
  $email = $_POST['Email'];
  $password = $_POST['Password'];
  $address = $_POST['Address'];
  $postcode = $_POST['Postcode'];
  $homeNumber = $_POST['HomeNumber'];
  $mobile = $_POST['Mobile'];
  $course = $_POST['courseList'];
  $studyYear = $_POST['yearList'];
  $accom = $_POST['accomList'];
  $hobbie = $_POST['Hobbies'];
  $society = $_POST['Society'];
  $smoke = $_POST['Smoker'];
  $outgoing = $_POST['Social'];
  $mess = $_POST['Mess'];
  $gym = $_POST['Gym'];

  if($name != ''||$surname != ''||$email != ''){
    $sql =
    "INSERT INTO user (fname, lname, gender, email, password, dob, address,
                      postcode, hnumber, mobile, hobbie, society, smoker)
    VALUES ('$name', '$surname', '$gender', '$email', '$password', '$address',
            '$postcode', '$homenumber', '$mobile', '$hobbie', '$society', '$smoker')";
  }
  //Check if user registered data has been inputted correctly
  mysqli_select_db("web");
  if(mysqli_query($conn, $sql)) {
    die("Could not enter data: ". mysqli_connect_error());
  } else {
    echo "Entered data successfully";
  }

  if($course != ''|| $accom != ''){
    $sql =
    "INSERT INTO uni (course, study, accom)
    VALUES ('$course', '$studyYear', '$accom')";
  }
  //Check if user data entered is correct
  mysqli_select_db("web");
  if(mysqli_query($conn, $sql)) {
    die("Could not enter data: ". mysqli_connect_error());
  } else {
    echo "Entered data successfully";
  }
}

?>
