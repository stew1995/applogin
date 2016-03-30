function registerValidation(){
  //Shortcut to form
  var form = document.forms.basicRegister;
  //User input from form
  var reqbasic = document.getElementById("reqbasic").style;
  var reqname = document.getElementById("reqname").style;
  var fname = document.getElementById("FName");
  var fnameErr = document.getElementById("nameErr");
  var namePatt = /^[a-zA-Z ]*$/;

  var reqlname = document.getElementById("reqlname").style;
  var lname = document.getElementById("LName");
  var lnameErr= document.getElementById("lnameErr");
  var lnamePatt = /^[a-zA-Z ]*$/;

  var reqdob = document.getElementById("reqdob").style;
  var dob = document.getElementById("DOB");
  var dobErr = document.getElementById("dobErr");
  var dobPatt = /([0-9]{2})\/([0-9]{2})\/([0-9]{3})/;

  var reqemail = document.getElementById("reqemail").style;
  var email = document.getElementById("Email");
  var emailErr = document.getElementById("emailErr");
  var emailPatt = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  var reqpass = document.getElementById("reqpass").style;
  var password = document.getElementById("Password");
  var passwordErr = document.getElementById("passwordErr");
  var passwordPatt = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

  var reqaddress = document.getElementById("reqaddress").style;
  var address = document.getElementById("HomeAddress");
  var addressErr = document.getElementById("addressErr");
  var addressPatt = /[0-9] [a-zA-Z]/;

  var reqpost = document.getElementById("reqpost").style;
  var postcode = document.getElementById("Postcode");
  var postcodeErr = document.getElementById("postcodeErr");
  var postcodePatt = /^[A-Z]{1,2}[0-9]{2,3}[A-Z]{2}$/ || /^[A-Z]{1,2}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{2}$/ || /^GIR0[A-Z]{2}$/;

  var reqhome = document.getElementById("reqhome").style;
  var home = document.getElementById("HomeNumber");
  var homeErr = document.getElementById("homeErr");
  var homePatt = /^[1-9][0-9]{0,15}$/;

  var reqmobile = document.getElementById("reqmobile").style;
  var mobile = document.getElementById("Mobile");
  var mobileErr = document.getElementById("mobileErr");
  var mobilePatt = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;



  if(fname.value == "" || !namePatt.test(fname.value)){
    fnameErr.innerHTML = ("Enter a valid name");
    fname.focus();
    reqbasic.display = "block";
    reqname.display = "block";
  } else {
    reqbasic.display = "none";
    reqname.display = "none";
  }

  if(lname.value == "" || !lnamePatt.test(lname.value)) {
    lnameErr.innerHTML = ("Enter a valid last name");
    lname.focus();
    reqbasic.display = "block";
    reqlname.display = "block";
  } else {
    reqbasic.display = "none";
    reqlname.display = "none";
  }

  if(dob.value == "" || !dobPatt.test(dob.value)) {
    dobErr.innerHTML = ("Enter a valid Date of Birth");
    dob.focus();
    reqbasic.display = "block";
    reqdob.display = "block";
  } else {
    reqbasic.display = "none";
    reqdob.display = "none";
  }

  if (email.value == "" || !emailPatt.test(email.value)) {
    emailErr.innerHTML = ("Enter a valid email");
    email.focus();
    reqbasic.display = "block";
    reqemail.display = "block";
  } else {
    reqbasic.display = "none";
    reqemail.display = "none";
  }

  if(password.value == "" || !passwordPatt.test(password.value)) {
    passwordErr.innerHTML = ("Enter a valid password");
    password.focus();
    reqbasic.display = "block";
    reqpass.display = "block";
  } else {
    reqbasic.display = "none";
    reqpass.display = "none";
  }

  if(address.value == "" || !addressPatt.test(address.value)) {
    addressErr.innerHTML = ("Enter a valid address");
    address.focus();
    reqbasic.display = "block";
    reqaddress.display = "block";
  } else {
    reqbasic.display = "none";
    reqaddress.display = "none";
  }

  if(postcode.value == "" || !postcodePatt.test(postcode.value)) {
    postcodeErr.innerHTML = ("Enter a valid postcode");
    postcode.focus();
    reqbasic.display = "block";
    reqpost.display = "block";
  } else {
    reqbasic.display = "none";
    reqpost.display = "none";
  }

  if(home.value == "" || !homePatt.test(home.value)) {
    homeErr.innerHTML = ("Enter a valid home number");
    home.focus();
    reqbasic.display = "block";
    reqhome.display = "block";
  } else {
    reqbasic.display = "none";
    reqhome.display = "none";
  }

  if(mobile.value == "" || !mobilePatt.test(mobile.value)) {
    mobileErr.innerHTML = ("Enter a valid mobile number");
    mobile.focus();
    reqbasic.display = "block";
    reqmobile.display = "block";
  } else {
    reqbasic.display = "none";
    reqmobile.display = "none";
  }

  //Uni Part of registration
  var requni = document.getElementById("requni").style;

  var course = document.getElementById("courseList");
  var courseErr = document.getElementById("courseErr");
  var reqcourse = document.getElementById("reqcourse").style;

  var year = document.getElementById("StudyYear");
  var yearErr = document.getElementById("yearErr");
  var reqyear = document.getElementById("reqyear").style;

  var accom = document.getElementById("Accomodation");
  var accomErr = document.getElementById("accomErr");
  var reqaccom = document.getElementById("reqaccom").style;


if(course.value == ""){
  courseErr.innerHTML = ("Enter the course you are studying");
  course.focus();
  requni.display = "block";
  reqcourse.display = "block";
} else {
  requni.display = "none";
}

if(year.value == "") {
  yearErr.innerHTML = ("Select the year you will be attending");
  year.focus();
  requni.display = "block";
  reqyear.display = "block";
} else {
  requni.display = "none";
  reqyear.display = "none";
}

if(accom.value == "") {
  accomErr.innerHTML = ("Select where you will be staying");
  accom.focus();
  requni.display = "block";
  reqaccom.display = "block";
} else {
  requni.display = "none";
  reqaccom.display = "none";
}


//About yourself validation
var reqabout = document.getElementById("reqabout").style;

var hobbie = document.getElementById("hobbieList");
var reqhobbie = document.getElementById("reqhobbie").style;

var society = document.getElementById("societyList");
var reqsociety = document.getElementById("reqsociety").style;

  if(hobbie.value == "") {
    hobbieErr.innerHTML = "Choose your hobbies";
    hobbie.focus();
    reqabout.display = "block";
    reqhobbie.display = "block";
  } else {
    reqabout.display = "none";
    reqhobbie.display = "none";
  }

  if(society.value == "") {
    societyErr.innerHTML = "Choose the societies you are apart of";
    society.focus();
    reqabout.display = "block";
    reqsociety.display = "block";
  } else {
    reqabout.display = "none";
    reqsociety.display = "none";
  }
}


var completeValidation = document.getElementById("completeValidation");
completeValidation.addEventListener("click", registerValidation);



function checkSmoke(){
  var reqabout = document.getElementById("reqabout").style;
  var reqsmoker = document.getElementById("reqsmoker").style;
  var smoke = document.getElementsByName("Smoker");
  var smokeErr = document.getElementById("smokeErr");
  var Smoker = -1;

  for(var i=0; i < smoke.length; i++){
     if(smoke[i].checked) {
        Smoker = i;
     }
  }
  if (Smoker == -1) {
    smokerErr.innerHTML = "Please choose one of the options";
    reqsmoker.display = "block";
    reqabout.display = "block";
  } else {
    reqsmoker.display = "none";
    reqabout.display = "none";
  }
}

var button = document.getElementById("checkValidation");
button.addEventListener("click", checkSmoke);

function checkSocial() {
  var reqabout = document.getElementById("reqabout").style;
  var reqsocial = document.getElementById("reqsocial").style;
  var social = document.getElementsByName("Social");
  var socialErr = document.getElementById("socialErr");
  var Social = -1;

  for(var i=0; i < social.length; i++) {
    if(social[i].checked) {
      Social = i;
    }
  }
  if(Social == -1) {
    socialErr.innerHTML = "Please choose one of the options";
    reqsocial.display = "block";
    reqabout.display = "block";
  } else {
    reqsocial.display = "none";
    reqabout.display = "none";
  }
}

var button = document.getElementById("checkValidation");
button.addEventListener("click", checkSocial);

function checkMess() {
  var reqabout = document.getElementById("reqabout").style;
  var reqmess = document.getElementById("reqmess").style;
  var mess = document.getElementsByName("Mess");
  var messErr = document.getElementById("messErr");
  var Mess = -1;

  for(var i=0; i < mess.length; i++) {
    if(mess[i].checked) {
      Mess = i;
    }
  }
  if(Mess == -1) {
    messErr.innerHTML = "Please choose one of the options";
    reqmess.display = "block";
    reqabout.display = "block";
  } else {
    reqmess.display = "none";
    reqabout.display = "none";
}
}

var button = document.getElementById("checkValidation");
button.addEventListener("click", checkMess);

function checkGym() {
  var reqabout = document.getElementById("reqabout").style;
  var reqgym = document.getElementById("reqgym").style;
  var gym = document.getElementsByName("Gym");
  var gymErr = document.getElementById("gymErr");
  var Gym = -1;

  for(var i=0; i < gym.length; i++) {
    if(gym[i].checked) {
      Gym = i;
    }
  }
  if(Gym == -1) {
    gymErr.innerHTML = "Please choose one of the options";
    reqgym.display = "block";
    reqabout.display = "block";
  } else {
    reqgym.display = "none";
    reqabout.display = "none";
  }
}

var button = document.getElementById("checkValidation");
button.addEventListener("click", checkGym);

//Hobbie List
function showHobbie(str) {
    if (str == "") {
        document.getElementById("hobbieTxt").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("hobbieTxt").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","lib/gethobbie.php?q="+str,true);
        xmlhttp.send();
    }
}

var hobbieList = document.getElementById("hobbieList");
hobbieList.addEventListener("change", showHobbie);

//Course List
function showCourse(str) {
    if (str == "") {
        document.getElementById("courseTxt").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("courseTxt").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","lib/getcourse.php?q="+str,true);
        xmlhttp.send();
    }
}

var courseList = document.getElementById("courseList");
courseList.addEventListener("change", showCourse);


//Society List
function showSociety(str) {
    if (str == "") {
        document.getElementById("societyTxt").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("societyTxt").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","lib/getsociety.php?q="+str,true);
        xmlhttp.send();
    }
}

var societyList = document.getElementById("societyList");
societyList.addEventListener("change", showSociety);
