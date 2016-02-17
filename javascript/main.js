/*Navigation Javascript*/

function show() {
  var login = document.getElementById("login").style;
  if (login.display === "block") {
    login.display = "none";
  }
  else {
    login.display = "block";
  }
};

function navLogin() {
  var navBox = document.getElementById("rightnav").style;
  var navLog = document.getElementById("navLog").style;
  var username = document.getElementById("user").style;
  if (username.display === "none") {
      username.display = "block";
      navBox.width = "35%";
      navLog.display = "none";

    }
      else {
        username.display = "none";
      }
};

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

function advancesrc() {
  var content = document.getElementById("searchContent").style;
      if (content.display=="block") {
          content.display = "none";
        }
          else {
            content.display="block";
          }
};

function closeadvancesrc(checkEm) {
  var content = document.getElementById("searchContent").style;
  var chk = document.getElementsByTagName('input');
  for (var i = 0; i < chk.length; i++) {
      if (chk[i].type == 'checkbox') {
          if (chk[i].name == 'advancesearch') {
              chk[i].checked = checkEm;
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

function showSearch() {
  var search = document.getElementById("topSearch").style;
  if (search.display === "block") {
      search.display = "none";
    }
      else {
        search.display = "block";
      }
};

function uncheck(checkEm) {
    var chk = document.getElementsByTagName('input');
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].type == 'checkbox') {
            if (chk[i].name == 'checklist') {
                chk[i].checked = checkEm;
            }
        }
    }
};

function socialPadShow() {
  var social = document.getElementById("navSocial").style;
  if (social.display = "none") {
      social.display = "block";
  }
  else {
    social.display = "none";
  }
};


window.onresize = function() {
  var i = document.getElementById("info").style;
  if (window.innerWidth < 700) {
    i.margin = "0 0 0 0";
  } else {
    i.margin = "5% 25% 0 25%";
  }
};
