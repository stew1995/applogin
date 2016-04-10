<?php
session_start();
if(session_destroy()){ //destroy all sessions
  header('location: index.html'); //redirect to hompage
}

 ?>
