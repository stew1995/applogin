<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="CSS\navigation.css">
  <link rel="stylesheet" type="text/css" href="CSS\template.css">
  <link rel="stylesheet" type="text/css" href="CSS\profile.css">
  <link rel="stylesheet" type="text/css" href="CSS\registration.css">
  <link rel="stylesheet" type="text/css" href="CSS\login.css">
  <link rel="stylesheet" type="text/css" href="CSS\support.css">
  
  
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

    <div class="containor">
    <div class="sidemenuwrap">
      <div class="sidemenu">
        <div id="sideText">

      </div>
    </div>
  </div>
  <div class="rightmenuwrap">
    <div class="rightmenu">
      <div id="rightText">

      </div>
    </div>
  </div>
  <div class="centerwrap">
    <div class="center">
        <div id="textCenter">

        </div>
    </div>
  </div>
  </div>
  
  <!--Javascript files -->
  <script src="javascript/validation.js"></script>
  <script src="javascript/main.js"></script>
  <script src="javascript/draftajax.js"></script>
  <script src="javascript/windowSizing.js"></script>
  <script src="javascript/support.js"></script>
  <script src="javascript/changeLayout"></script>
  
</body>
</html>
