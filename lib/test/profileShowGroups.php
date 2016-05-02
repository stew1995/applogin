<!DOCTYPE HTML>
<html>
<head>
  <style>

  </style>
</head>
<body>
  <?php
  require('conn.php')
  $user = $_GET['adminOfGroup'];
  $sqlUser = "SELECT id, fname FROM user WHERE fname='$user'";
  $getUser
  $sql = "SELECT * FROM house WHERE user_id='$getUser'";





  echo "<form name='profileGroups'>";
  echo "<p>Created groups by <input type='text' name='adminOfGroup' id='adminOfGroup'></p>";
  echo "<textarea rows='10' cols='50' class='groupContent'>This is where groups that have already been created will go
    (Hide show will be used)</textarea>";
  echo "<input type='submit' name='saveGroup' value='Save'> <input type='submit' name='deleteGroup' value='Delete'>";
   ?>

   <script>
      window.onload = function() {
        var name = document.getElementById("userProfileName");
        var group = document.getElementById("adminOfGroup");

        group.innerHTML = name;
      }
   </script>
 </body>
 </html>
