//Patterns
var namePatt = /^[a-zA-Z ]*$/;
var lnamePatt = /^[a-zA-Z ]*$/;
var dobPatt = /([0-9]{2})\/([0-9]{2})\/([0-9]{3})/;
var emailPatt = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var passwordPatt = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var addressPatt = /[0-9] [a-zA-Z]/;
var postcodePatt = /^[A-Z]{1,2}[0-9]{2,3}[A-Z]{2}$/ || /^[A-Z]{1,2}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{2}$/ || /^GIR0[A-Z]{2}$/;
var homePatt = /^[1-9][0-9]{0,15}$/;
var mobilePatt = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
function formValidation(){
        //User input from form
      var reqbasic = document.getElementById("reqbasic").style;
      var reqname = document.getElementById("reqname").style;
      var fname = document.getElementById("FName");
      var fnameErr = document.getElementById("nameErr");

      var reqlname = document.getElementById("reqlname").style;
      var lname = document.getElementById("LName");
      var lnameErr= document.getElementById("lnameErr");

      var reqdob = document.getElementById("reqdob").style;
      var dob = document.getElementById("DOB");
      var dobErr = document.getElementById("dobErr");

      var reqemail = document.getElementById("reqemail").style;
      var email = document.getElementById("Email");
      var emailErr = document.getElementById("emailErr");

      var reqpass = document.getElementById("reqpass").style;
      var password = document.getElementById("Password");
      var passwordErr = document.getElementById("passwordErr");

      var reqaddress = document.getElementById("reqaddress").style;
      var address = document.getElementById("HomeAddress");
      var addressErr = document.getElementById("addressErr");

      var reqpost = document.getElementById("reqpost").style;
      var postcode = document.getElementById("Postcode");
      var postcodeErr = document.getElementById("postcodeErr");

      var reqhome = document.getElementById("reqhome").style;
      var home = document.getElementById("HomeNumber");
      var homeErr = document.getElementById("homeErr");

      var reqmobile = document.getElementById("reqmobile").style;
      var mobile = document.getElementById("Mobile");
      var mobileErr = document.getElementById("mobileErr");



      if(fname.value == "" || !namePatt.test(fname.value)){
        fnameErr.innerHTML = ("Enter a valid name");
        fname.focus();
        reqbasic.display = "block";
        reqname.display = "block";
        return false;
      } else if (fname.value !== "" || namePatt.test(fname.value)) {
        reqbasic.display = "none";
        reqname.display = "none";
      }

      if(lname.value == "" || !lnamePatt.test(lname.value)) {
        lnameErr.innerHTML = ("Enter a valid last name");
        lname.focus();
        reqbasic.display = "block";
        reqlname.display = "block";
        return false;
      } else if (lname.value !== "" || lnamePatt.test(lname.value)) {
        reqbasic.display = "none";
        reqlname.display = "none";
      }

      if(dob.value == "" || !dobPatt.test(dob.value)) {
        dobErr.innerHTML = ("Enter a valid Date of Birth");
        dob.focus();
        reqbasic.display = "block";
        reqdob.display = "block";
        return false;
      } else if (dob.value !== "" || dobPatt.test(dob.value)) {
        reqbasic.display = "none";
        reqdob.display = "none";
      }

      if (email.value == "" || !emailPatt.test(email.value)) {
        emailErr.innerHTML = ("Enter a valid email");
        email.focus();
        reqbasic.display = "block";
        reqemail.display = "block";
        return false;
      } else if (email.value !== "" || emailPatt.test(email.value)) {
        reqbasic.display = "none";
        reqemail.display = "none";
      }

      if(password.value == "" || !passwordPatt.test(password.value)) {
        passwordErr.innerHTML = ("Enter a valid password");
        password.focus();
        reqbasic.display = "block";
        reqpass.display = "block";
        return false;
      } else if (password.value !== "" || passwordPatt.test(password.value)) {
        reqbasic.display = "none";
        reqpass.display = "none";
      }

      if(address.value == "" || !addressPatt.test(address.value)) {
        addressErr.innerHTML = ("Enter a valid address");
        address.focus();
        reqbasic.display = "block";
        reqaddress.display = "block";
        return false;
      } else if (address.value !== "" || addressPatt.test(address.value)) {
        reqbasic.display = "none";
        reqaddress.display = "none";
      }

      if(postcode.value == "" || !postcodePatt.test(postcode.value)) {
        postcodeErr.innerHTML = ("Enter a valid postcode");
        postcode.focus();
        reqbasic.display = "block";
        reqpost.display = "block";
        return false;
      } else if (postcode.value !== "" || postcodePatt.test(postcode.value)) {
        reqbasic.display = "none";
        reqpost.display = "none";
      }

      if(home.value == "" || !homePatt.test(home.value)) {
        homeErr.innerHTML = ("Enter a valid home number");
        home.focus();
        reqbasic.display = "block";
        reqhome.display = "block";
        return false;
      } else if (home.value !== "" || homePatt.test(home.value)) {
        reqbasic.display = "none";
        reqhome.display = "none";
      }

      if(mobile.value == "" || !mobilePatt.test(mobile.value)) {
        mobileErr.innerHTML = ("Enter a valid mobile number");
        mobile.focus();
        reqbasic.display = "block";
        reqmobile.display = "block";
        return false;
      } else if (mobile.value !== "" || mobilePatt.test(mobile.value)) {
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

      var retypemail = document.getElementById("retypeEmail");
      var retypeemailErr = document.getElementById("retypeemailErr");
      var reqretypeemail = document.getElementById("reqretypeemail").style;


    if(course.value == ""){
      courseErr.innerHTML = ("Enter the course you are studying");
      course.focus();
      requni.display = "block";
      reqcourse.display = "block";
      return false;
    } else if (course.value !== "") {
      requni.display = "none";
      reqcourse.display = "none";
    }

    if(year.value == "") {
      yearErr.innerHTML = ("Select the year you will be attending");
      year.focus();
      requni.display = "block";
      reqyear.display = "block";
      return false;
    } else if (year.value !== "") {
      requni.display = "none";
      reqyear.display = "none";
    }

    if(retypemail.value == "") {
      retypeemailErr.innerHTML = ("Select where you will be staying");
      retypemail.focus();
      requni.display = "block";
      reqretypeemail.display = "block";
      return false;
    } else if (retypemail.value !== "") {
      requni.display = "none";
      reqretypeemail.display = "none";
    }

    if(accom.value == "") {
      accomErr.innerHTML = ("Select where you will be staying");
      accom.focus();
      requni.display = "block";
      reqaccom.display = "block";
      return false;
    } else if (accom.value !== "") {
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
        return false;
      } else if (hobbie.value !== "") {
        reqabout.display = "block";
        reqhobbie.display = "block";
      }

      if(society.value == "") {
        societyErr.innerHTML = "Choose the societies you are apart of";
        society.focus();
        reqabout.display = "block";
        reqsociety.display = "block";
        return false;
      } else if (society.value !== "") {
        reqabout.display = "none";
        reqsociety.display = "none";
      }

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
        return false;
      }
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
        return false
      }
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
        return false;
      }

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
        return false;
      }

      else {
        return true
      }
}

//Support change validation
//Support page account settings using regEx above to validate data before changing
//data in database
function changeAccountValidation() {
  var name = document.getElementById("profileName");
  var surname = document.getElementById("profileLName");
  var password = document.getElementById("newpassword");
  var retypepass = document.getElementById("secondnewpassword");
  var oldemail = document.getElementById("oldemail");
  var newemail = document.getElementById("newemail");
  var retypeemail = document.getElementById("secondnewemail");
  var address = document.getElementById("newaddress");
  var postcode = document.getElementById("newpostcode");
  var mobile = document.getElementById("newmobile");
  var home = document.getElementById("newhome");
  var hobbie = document.getElementById("hobbieList");
  var society = document.getElementById("societyList");
  var year = document.getElementById("StudyYear");
  var course = document.getElementById("courseList");
  var accom = document.getElementById("Accomodation");

  if(name.value == "" || !namePatt.test(name.value)) {
    name.style.background = "red";
    name.focus();
    return false;
  } else if (name.value !== "" || namePatt.test(name.value)) {
    name.style.background = "none";
  }

  if(surname.value == "" || !namePatt.test(surname.value)) {
    surname.style.background = "red";
    surname.focus();
    return false;
  } else if (surname.value !== "" || namePatt.test(surname.value)) {
    surname.style.background = "none";
  }

  if(password.value == "" || !passwordPatt.test(surname.value)) {
    password.style.background = "red";
    password.focus();
    return false;
  } else if (password.value !== "" || password.test(surname.value)) {
    password.style.background = "none";
  }

  if(password.value !== retypepass.value|| retypepass.value == ""||!passwordPatt.test(password.value)||
    !passwordPatt.test(retypepass.value)) {
      retypepass.style.background = "red";
      retypepass.focus();
      return false;
    } else if (retypepass.value == retypepass.value||passwordPatt.test(password.value)||
      passwordPatt.test(retypepass.value)) {
      retypepass.style.background = "none";
    }

  if(oldemail.value == ""|| !emailPatt.test(oldemail.value)) {
    oldemail.style.background = "red";
    oldemail.focus();
  } else if (oldemail.value !== ""|| emailPatt.test(oldemail.value)) {
    oldemail.style.background = "none";
  }

  if(oldemail.value !== newemail.value||newemail.value == ""||!emailPatt.test(email.value))||
  !emailPatt.test(newemail.value) {
    newemail.style.background = "red";
    newemail.focus();
  } else if (oldemail.value == newemail.value||newemail.value !== ""||!mailPatt.test(email.value))||
  emailPatt.test(newemail.value) {
    newemail.style.background = "none";
  }

  if(newemail.value !== retypeemail.value||retypeemail.value == ""||!emailPatt.test(newemail.value))||
  !emailPatt.test(retypeemail.value) {
    retypeemail.style.background = "red";
    retypemail.focus();
  } else if (retypeemail.value == newemail.value||retypeemail.value !== ""||!mailPatt.test(newemail.value))||
  emailPatt.test(retypeemail.value) {
    retypeemail.style.background = "none";
  }

  if(address.value == ""||!addressPatt.test(address.value)) {
    address.style.background = "red";
    address.focus();
  } else if (address.value !=="" ||addressPatt.test(address.value)) {
    address.style.background = "none";
  }

  if(postcode.value == ""||!postcodePatt.test(postcode.value)) {
    postcode.style.background = "red";
    postcode.focus();
  } else if (postcode.value !=="" ||postcodePatt.test(postcode.value)) {
    postcode.style.background = "none";
  }

  if(mobile.value == ""||!mobilePatt.test(address.value)) {
    mobile.style.background = "red";
    mobile.focus();
  } else if (address.value !=="" ||mobilePatt.test(address.value)) {
    mobile.style.background = "none";
  }

  if(home.value == ""||!homePatt.test(home.value)) {
    home.style.background = "red";
    home.focus();
  } else if (home.value !=="" ||homePatt.test(home.value)) {
    home.style.background = "none";
  }


  if(hobbie.value == "") {
    hobbie.style.background = "red";
    hobbie.focus();
  } else if (hobbie.value !=="") {
    hobbie.style.background = "none";
  }

  if(society.value == "") {
    society.style.background = "red";
    society.focus();
  } else if (society.value !=="") {
    society.style.background = "none";
  }

  if(year.value == "") {
    year.style.background = "red";
    year.focus();
  } else if (year.value !=="") {
    year.style.background = "none";
  }

  if(course.value == "") {
    course.style.background = "red";
    course.focus();
  } else if (course.value !=="") {
    course.style.background = "none";
  }

  if(accom.value == "") {
    accom.style.background = "red";
    accom.focus();
  } else if (accom.value !=="") {
    accom.style.background = "none";
  }
  else {
    return true;
  }
}
