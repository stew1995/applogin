<?php
  $target_dir = "lib/profilePictures/";;
  $target_file = $target_dir . basename($_FILES["inputFileToLoad"]["name"]);

  $uploadOk = 1;
  $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

  //Check if the file is an image or fake

  if(isset($_POST["submitPhoto"])) {
    $check = getimagesize($_FILES["inputFileToLoad"]["tmp_name"]);
    if($check !== false) {
      echo "File is an Image - " . $check["mime"] . ".";
      $uploadOk = 1;
    } else {
      echo "File is not an image.";
      $uploadOk = 0;
    }
  }

  //Check if the file already exists
  if(file_exists($target_file)) {
    echo "This file already exists";
    $uploadOk = 0;
  }

  //Limit file size
  if($_FILES["inputFileToLoad"]["size"] > 500000) {
    echo "This image is too large to be uploaded";
    $uploadOk = 0;
  }

  //File Formats
  if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
    echo "Only JPG, JPEG, PNG, GIF files are allowed";
    $uploadOk = 0;
  }

  //Check to see if $uploadOk has been set to 0 by error
  if($uploadOk = 0) {
    echo "the file was no uploaded";
  } else {
    if (move_uploaded_file($_FILES["inputFileToLoad"]["tmp_name"], $target_file)) {
      echo "The file " . basename($_FILES["inputFileToLoad"]["name"]) . "has been uploaded.";
    } else {
      echo "There was an error uploading your file";
    }
  }
?>
