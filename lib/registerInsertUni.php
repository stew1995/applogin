<?php // CREATE NOT NULL ON UNIQUE KEY
//INSERT INTO uni
if(isset($_POST['submitUniInfoBtn'])){ // needs new button
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


    $email = validate_data($_POST['retypeEmail']);
    $course = $_POST['courseList'];
    $studyYear = $_POST['StudyYear'];
    $accom = validate_data($_POST['accomList']);

    //get id of inserted user
    $userID = "SELECT id FROM user WHERE email ='$email'";
    $userCheck = mysqli_query($conn, $userID);
    if(!$userCheck) {
      echo "Could not find email linked to ID in database" . mysqli_error($conn);
    } else {
        $sqluni =
        "INSERT INTO uni (user_id, course, study, accom)
        VALUES ('$userCheck','$course', '$studyYear', '$accom')";

        //Check if user data entered is correct
          $check = mysqli_query($conn, $sqluni);
            if(!$check) {
              echo "Data was not inserted" . mysqli_error($conn);
            } else {
              echo "Data entered successfully";
            }
      }
}
?>
