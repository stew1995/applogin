<html>
<body>

  <textarea id="inputBio" name="bioData" rows="4" cols="50" readonly="textarea"> Enter something about yourself </textarea>
  <p><input type="button" name="completeBioBtn" value="Done" id="doneBio"><input type="button" value="Edit" id="editBio"></p>


  <?php

  if(isset($_POST['completeBioBtn'] && $_POST[])) {
    if(!empty($_POST['bioData'])) {
      $file = fopen("userBio.txt", "a+");

      if(!file_exists($file)) {
        fopen("userBio" . $n = $n + 1 . ".txt", "a+");
      }
      fclose($file);
    }
  }

   ?>

</body>
</html>
