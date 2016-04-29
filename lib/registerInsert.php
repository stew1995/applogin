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

  if($course != ''|| $accom != ''){
    $sqluni =
    "INSERT INTO uni (course, study, accom)
    VALUES ('$getCourse', '$studyYear', '$accom')";
  }
  //Check if user data entered is correct
  mysqli_query($conn, $sqluni) or die(mysqli_error($conn));
}

?>
