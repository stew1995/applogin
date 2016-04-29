
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="CSS\navigation.css">
  <link rel="stylesheet" type="text/css" href="CSS\template.css">
</head>
    <div class="navigation">
  <nav>
    <ul class="firstnav"> <!-- first unordered list -->
      <li id="searchbar"><a>&#128269</a></li>
      <li id="showHouse"><a>House</a></li>

      <li id="showHalls"><a>Halls</a></li>
      <li id="showProfile"><a>Profile</a></li>
      <li id="socialPad"><a>Social Pad</a></li>
      <li id="showMaps"><a>Maps</a></li>
     <div id="rightnav">
      <li id="showSupport"><a>Support</a></li>
      <li id="showRegister"><a>Register</a></li>
      <div id="user"><li><a><input type="text" value="username"><input type="button" value="->" id="nextLogin"></a></li></div>
      <div id="pass"><li><a><input id="password" type="text" value="password"><input type="button" value="->" id="closeLogin"></a></li></div>
      <li id="navLog"><a>Login</a></li> <!-- Change this so when the user clicks the button username and then password will show -->
    </div>
  </nav>
</div>

    <div class="navSearch" id="topSearch">
       <form>
         <input autocomplete="off" class="search_box" type="text" name="query" id="query">
         <div id="searchResult"> </div>
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
          <p>Halls<input type="checkbox" name="checklist"></p>
          <p>Group<input type="checkbox" name="checklist"></p>
        </form>
    </div>
  </div>

    <div id="containor">
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
    <script src="javascript/draftajax.js"></script>
    <script src="javascript/windowSizing.js"></script>
    <script src="javascript/navigation.js"></script>
    <script src="javascript/search.js"></script>
</body>

  
  
  
</html>
