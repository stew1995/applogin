<?php
include('lib/login.php'); // Includes Login Script

if(isset($_SESSION['login_user'])){
header("location: index.php");
}
?>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="CSS\navigation.css">
  <link rel="stylesheet" type="text/css" href="CSS\template.css">
  <link rel="stylesheet" type="text/css" href="CSS\profile.css">
  <link rel="stylesheet" type="text/css" href="CSS\registration.css">
  <link rel="stylesheet" type="text/css" href="CSS\login.css">
</head>
  <div class="navigation">
  <nav>
    <ul class="firstnav"> <!-- first unordered list -->
      <li id="searchbar"><a>&#128269</a></li>
      <li id ="showHouse"><a>House</a>

        <ul>
            <li><a href="#">House Group</a></li>

            <li><a href="#">Estate Agency</a></li>
        </ul>

      </li>

      <li id="showHalls"><a>Halls</a>
        <ul>
          <li><a href="#">Building</a></li>
          <li><a href="#">Flat</a></li>
          <li><a href="#">Your Room</a></li>
        </ul>
      </li>
      <li id="showProfile"><a>Profile</a>
        <ul class="dropdown_content">
          <li><a href="#">View Profile</a></li>
          <li><a href="#">Edit Profile</a></li>
        </ul>
      </li>
      <li id="socialPad"><a>Social Pad &rang;</a></li>
      <div id="navSocial">
        <li id="showMessage"><a>Messages</a></li>
        <li id="showLive"><a>Live Feed</a></li>
      </div>

     <div id="rightnav">
      <li id="showSupport"><a>Support</a>
        <ul>
          <li><a href="#">Maps</a></li>
          <li><a href="#">Contact Information</a></li>
          <li><a href="#">Site Map</a></li>
        </ul>
      </li>
      <li id="showRegister"><a>Register</a></li>
      <div id="user"><li><a><input type="text" value="username"><input type="button" value="->" id="nextLogin"></a></li></div>
      <div id="pass"><li><a><input id="password" type="text" value="password"><input type="button" value="->" id="closeLogin"></a></li></div>
      <li id="navLog"><a>Login</a></li> <!-- Change this so when the user clicks the button username and then password will show -->
    </div>
  </nav>
</div>

    <div class="navSearch" id="topSearch">
       <form>
         <input class="search_box" type="text" name="search">
         <input type="checkbox" name="advancesearch" id='advance'><span class="advance">Advanced Search</span>
      </form>
  </div>

    <div id="searchContent">
      <div class="buttons">
      <input style="float: right;" type="button" value="Clear" id="chkClear">  <input type="button" value="Done" id="chkDone">
      </div>

      <div class="advsearchwrap">
        <form name="advancedSearch" action="checkboxes.asp">
          <p>Male<input type="checkbox" name="checklist"></p>
          <p>Female<input type="checkbox" name="checklist"></p>
          <p>Non-Smoker<input type="checkbox" name="checklist"></p>
          <p>Smoker<input type="checkbox" name="checklist"></p>
        </form>
    </div>
  </div>

    <div id="containor">
    <div class="sidemenuwrap">
      <div class="sidemenu">
        <div id="sideText">
          <div id="loadUpText">
            <h1> Student Finder </h1>
            <p>This application allows you to find students to live with during your
              studies at university. If you are currently or will be staying in Halls
              of Residents then you will be able to see who you will be living with.</p>
            <p>If you will be staying in private accomodation then you will be able to
              search for other students also looking for housing <p>




                    <div class="longInfo">
                      <h3>Create a profile</h3>
                    </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rightmenuwrap">
    <div class="rightmenu">
      <div id="rightText">
        <h1>What this application enables you to do</h1>
        <p>You can create a profile which is fully customizeable to suit your preference
        as well as being able to search for other students using the app and message the
        people you find. For Halls resisidents you can see the layout of your room aswell
        as other students staying in neighbouring flats. Creating house groups to make it
        easier to organise as well as a map to show you the area.</p>


        <div class="longInfo"  id="searchinfo">
          <h3>Search</h3>
        </div>

      </div>
    </div>
  </div>
  <div class="centerwrap">
    <div class="center">
        <div id="textCenter">
          <h1>Log In</h1>
          <p>If you have not registered an account or if you already have an account
             then you can register or log in using the button below</p>
        </div>
        <div id="loginFormWrap">
          <form id="sideBarLogin" action="" method="post">
            <input id="loginUser" type="text" name="username" value="username">
            <input id="loginPass" type="password" name="password" value="password">

            <span><?php echo $error; ?></span>

            <p><input type="submit" name="login" class="button" value="Log In" id="showSideLogin">
            <input type="button" class="button" value="Register" id="sideRegister"></p>
          </form>
        </div>
        <div id="info">
           <h3>Message</h3>
        </div>

        </div>
    </div>
  </div>
  </div>

  <!--Javascript files -->
  <script src="javascript/login.js"></script>
  <script src="javascript/draftajax.js"></script>
  <script src="javascript/windowSizing.js"></script>
</body>
</html>
