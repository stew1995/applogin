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
  validate_data($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = strip_tags($data);
    $data = htmlspecialchars($data);
    $data = mysqli_real_escape_string($data);
    return $data;
}

  $name = validate_data($_POST['FName']);
  $surname = validate_data($_POST['LName']);
  $gender = validate_data($_POST['Gender']);
  $dob = validate_data($_POST['DOB']);
  $email = validate_data($_POST['Email']);
  $password = validate_data($_POST['Password']);
  $address = validate_data($_POST['Address']);
  $postcode = validate_data($_POST['Postcode']);
  $homeNumber = validate_data($_POST['HomeNumber']);
  $mobile = validate_data($_POST['Mobile']);
  $course = validate_data($_POST['courseList']);
  $studyYear = validate_data($_POST['yearList']);
  $accom = validate_data($_POST['accomList']);
  $hobbie = validate_data($_POST['Hobbies']);
  $society = validate_data($_POST['Society']);
  $smoke = validate_data($_POST['Smoker']);
  $outgoing = validate_data($_POST['Social']);
  $mess = validate_data($_POST['Mess']);
  $gym = validate_data($_POST['Gym']);


  //Get course ID for table

  $getCourse = "SELECT id FROM course WHERE name ='$course'";
  mysqli_query($conn, $getCourse) or die(mysqli_error($conn));

  $getHobbie = "SELECT id FROM course WHERE name ='$hobbie'";
  mysqli_query($conn, $getHobbie) or die(mysqli_error($conn));

  $getSociety = "SELECT id FROM course WHERE name ='$society'";
  mysqli_query($conn, $getSociety) or die(mysqli_error($conn));


  if($name != '' && $surname != '' && $email != '' && $password != '' && $gender != ''
      && $address != '' && $postcode != ''){
    $sqlregister =
    "INSERT INTO user (fname, lname, gender, email, password, dob, address,
                      postcode, hnumber, mobile, hobbie, society, smoker)
    VALUES ('$name', '$surname', '$gender', '$email', '$password', '$address',
            '$postcode', '$homenumber', '$mobile', '$getHobbie', '$getSociety', '$smoker')";
  }
  //Check if user registered data has been inputted correctly
  mysqli_query($conn, $sqlregister) or die("Cannot insert data to database" . mysqli_error($conn));
  //get id of inserted user
  $userID = "SELECT id FROM user WHERE email ='$email'";

  if($course != ''|| $accom != ''){
    $sqluni =
    "INSERT INTO uni (user_id, course, study, accom)
    VALUES ('$userId', '$getCourse', '$studyYear', '$accom')
    ";
  }
  //Check if user data entered is correct
  mysqli_query($conn, $sqluni) or die(mysqli_error($conn));
}

?>
