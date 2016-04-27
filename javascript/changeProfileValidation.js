//This is the validation for the profile when they want to change their data and the
//text needs top be checked before it is entered into the database

function nameChange() {
  changeDate(document.getElementById("nameChange".value));
}
var check = document.getElementById("completeChangeBtn");
check.addEventListener("click", nameChange);



//Base Fucntion
function changeData(input) {
  var req = document.getElementById("profilerequired");
  var namePatt = /^[a-zA-Z]*$/;
  var dobPatt = /([0-9]{2})\/([0-9]{2})\/([0-9]{3})/;
  var emailPatt = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var passwordPatt = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
  var addressPatt = /[0-9] [a-zA-Z]/;
  var postcodePatt = /^[A-Z]{1,2}[0-9]{2,3}[A-Z]{2}$/ || /^[A-Z]{1,2}[0-9]{1}[A-Z]{1}[0-9]{1}[A-Z]{2}$/ || /^GIR0[A-Z]{2}$/;
  var homePatt = /^[1-9][0-9]{0,15}$/;
  var mobilePatt = /^(\+ 44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

  if (input = document.getElementById("nameChange").value && !namePatt.test(document.getElementById("nameChange").value)) {
    req.innerHTML = "Enter a valid name without numbers and symbols";
  } else if ( input = document.getElementById("passwordChange").value && !passwordPatt.test(document.getElementById("passwordChange").value) ) {
    req.innerHTML = "Enter a valid password";
  } else if ( input = document.getElementById("emailChange").value && !emailPatt.test(document.getElementById("emailChange").value)) {
    req.innerHTML = "Enter a valid email address";
  } else if ( input = document.getElementById("mobileChange").value && !mobilePatt.test(document.getElementById("mobileChange").value)) {
    req.innerHTML = "Enter a valid mobile number";
  } else if ( input = document.getElementById("homeChange").value && !homePatt.test(document.getElementById("homeChange").value)) {
    req.innerHTML = "Enter a valid home number";
  } else if ( input = document.getElementById("addressChange").value && !addressPatt.test(document.getElementById("addressChange").value)) {
    req.innerHTML = "Enter a valid address";
  } else if ( input = document.getElementById("courseChange").value && document.getElementById("courseChange").value != "" ) {
    req.innerHTML = "Choose the course the you study";
  } else if ( input = document.getElementById("yearStudyChange").value && document.getElementById("yearStudyChange").value != "") {
    req.innerHTML = "Choose the year you study";
  } else if ( input = document.getElementById("housingChange").value && document.getElementById("housingChange").value != "") {
    req.innerHTML = "Choose where you will be staying";
  } else if ( input = document.getElementById("hobbieChange").value && document.getElementById("hobbieChange").value != "") {
    req.innerHTML = "Choose a hobbie";
  } else if ( input = document.getElementById("societyChange").value && document.getElementById("societyChange").value != "") {
    req.innerHTML = "Choose a society";
  }
}
