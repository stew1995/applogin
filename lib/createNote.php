<!DOCTYPE html>
<html>
<body>
  <form name="saveNote" id="createNoteForm" method="post" action="lib/createNote.php">
    <p>Create a Note: <input type="text" name="noteName" value=""></p>
    <p><textarea id="createNote" name="noteData" col="15" rows="10" value=""> </textarea></p>
    <p><input type="button" name="submitS ave" value="Create Note" id="createNoteBtn"><p>
  </form>
  <form name="openNote" method="post" action="lib/loadNote.php">
    <p>Open Note: <input type="text" name="noteName" value=""></p>
    <p><input type="button" name="submitOpen" value="Load Note"></p>
  </form>
<?php
if(isset($_POST)){
  if($_POST['submitSave'] == "Create Note" && !empty($_POST['noteName'])){
    if(!file_exists($_POST['noteName'] . ".txt")){
      $file = tmpfile();
    }
    $file = fopen($_POST['noteName'] . ".txt", "a+");
    while(!feof($file)){
      $old = $old . "<p>" . fgets($file) . "</p>";
  }
  $text = $_POST["noteData"];
  file_put_contents($_POST['noteName'] . ".txt" . $old . $text);
  fclose($file);
}

  if($_POST['submitOpen'] == "Load Note") {
    if(!file_exists($_POST['noteName'] . ".txt")){
      exit("Error: Note does not exist");
    }

    $file = fopen($_POST['noteName'] . ".txt", "r");
    while(!feof($file)){
      echo "<p>" . fgets($file) . "</p>";
    }
    fclose($file);
  }
?>
</body>
</html>
