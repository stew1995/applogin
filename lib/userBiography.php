<html>
  <script>
    //Makes textarea readOnly and editable
    //true and false

    document.getElementById('editBio').onclick = function() {
       document.getElementById('inputBio').readOnly = false;
    };
    
    document.getElementById("doneBio").onclick = function() {
      document.getElementById("inputBio").readOnly = true;
    };

  </script>
<body>

  <textarea id="inputBio" name="bioData" rows="4" cols="50" readonly="textarea"> Enter something about yourself </textarea>
  <p><input type="button" name="completeBioBtn" value="Done" id="doneBio"><input type="button" value="Edit" id="editBio"></p>


  <?php

  if(isset($_POST['completeBioBtn'] && $_POST[])) {
    if(!empty($_POST['bioData'])) {
      $file = fopen("userBio.txt", "a+");

      if(!file_exists($file)) {
        fopen("userBio" . $n = $n + 1 . ".txt", "a+");
        file_put_contents('lib/bio/userBio' . $n . ".txt" . $file);
      }
      fclose($file);
    }
  }

   ?>

</body>
</html>


