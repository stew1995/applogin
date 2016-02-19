/*Navigation Javascript*/

function navLogin() {
  var navBox = document.getElementById("rightnav").style;
  var navLog = document.getElementById("navLog");
  var username = document.getElementById("user").style;
  if (username.display === "none") {
      username.display = "block";
      navBox.width = "35%";
      navLog.style.display = "none";

    }
      else {
        username.display = "none";
      }
};
var navLog = document.getElementById("navLog");
navLog.addEventListener("click", navLogin);


function navPassword() {
  var password = document.getElementById("pass").style;
  var username = document.getElementById("user").style;
  if(username.display === "block") {
    password.display = "block";
    username.display = "none";
  }
    else {
      password.display = "block";
    }
};
var next = document.getElementById("nextLogin");
next.addEventListener("click", navPassword);

function closeNavLogin() {
  var password = document.getElementById("pass").style;
  var navBox = document.getElementById("rightnav").style;
  var navLog = document.getElementById("navLog").style;
  if(password.display === "none") {
    password.display = "block";
  }
    else {
      password.display = "none";
      navBox.width = "25%";
      navLog.display = "block";
    }
};
var close = document.getElementById("closeLogin");
close.addEventListener("click", closeNavLogin);

function advancesrc() {
  var content = document.getElementById("searchContent").style;
      if (content.display=="block") {
          content.display = "none";
        }
          else {
            content.display="block";
          }
};
var advance = document.getElementById("advance");
advance.addEventListener("click", advancesrc);

function uncheck() {
    var chk = document.getElementsByTagName('input');
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].type == 'checkbox') {
            if (chk[i].name == 'checklist') {
                chk[i].checked = false;
            }
        }
    }
};

var clear = document.getElementById("chkClear");
clear.addEventListener("click", uncheck);

function closeadvancesrc() {
  var content = document.getElementById("searchContent").style;
  var chk = document.getElementsByTagName('input');
  for (var i = 0; i < chk.length; i++) {
      if (chk[i].type == 'checkbox') {
          if (chk[i].name == 'advancesearch') {
              chk[i].checked = false;
          }
      }
  }
  if (content.display == "none") {
    content.display = "block";
  }
    else {
      content.display = "none";
    }
};

//Code breaks everything checkover
//var q = document.getElementById("chkDone");
//q.addEventListener("click" closeadvancesrc);

function showSearch() {
  var search = document.getElementById("topSearch").style;
  if (search.display === "block") {
      search.display = "none";
    }
      else {
        search.display = "block";
      }
};

var show = document.getElementById("searchbar");
show.addEventListener("click", showSearch);


function socialPadShow() {
  var social = document.getElementById("navSocial").style;
  if (social.display = "none") {
      social.display = "block";
  }
  else {
    social.display = "none";
  }
};

var social = document.getElementById("socialPad");
social.addEventListener("click", socialPadShow);

function initalLogin() {

  var login = document.getElementById("login").style;

  if (login.display === "none") {
    login.display = "block";
  }
  else {
    login.display = "none";
  }
};
var btn = document.getElementById("showLogin");
btn.addEventListener("click", show);
