<!DOCTYPE html>
<html>
</body>
          
<div class="profileRight">
          <h3>Housing group</h3>
          <p style="text-decoration: underline;">Group Name:
            <form name="groupCreate">
              <input id="inputGroupName" type="text" name="groupName">
              <input id="groupNext" type="button" value="Next" name="groupAdd"></p>
            </form>
            <div id="hideWhoAdd">
              <p style="text-decoration: underline;">Who to add to <span id="groupNameValue"> </span></p>
              <p><input type="text" name="addWho" id="groupFriendInput"><input type="button" value="Add" name="friendAdd" id="addHousemate"></p>
            </div>
            <form name="housematesInGroup">
              <textarea id="groupAdding" rows="4" cols="50" class="groupContent"> </textarea>
            </form>
          <input id="saveGroup" type="submit" name="saveGroup" value="Save">

          <h3>Created Groups</h3>
          <input type="button" value="Show" id="showCreatedGroups">

          <div id="createdGroups">
            <textarea rows="10" cols="50" class="groupContent">This is where groups that have already been created will go
              (Hide show will be used)</textarea>
            <input type="submit" name="saveGroup" value="Save"> <input type="submit" name="deleteGroup" value="Delete">
          </div>

          <p style="margin-top: 40%;">To get information about estate agents in the area click <a href="#">here</a></p>

          <h3>Notes</h3>
          <p>Here you can write notes down to remind you about assignments or other commitments that you may have coming up</p>
            <form name="saveNote" id="createNoteForm" method="post" action="">
              <p>Create a Note: <input type="text" name="noteName" value=""></p>
              <p><textarea id="createNote" name="noteData" col="15" rows="10" value=""> </textarea></p>
              <p><input type="button" name="submitSave" value="Create Note" id="createNoteBtn"><p>
            </form>
            <form name="openNote" method="post" action="">
              <p>Open Note: <input type="text" name="noteName" value=""></p>
              <p><input type="button" name="submitOpen" value="Load Note"></p>
            </form>
          <div id="notesContent"> </div>

        </div>
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
          }
          ?>
        </body>
        </html>
