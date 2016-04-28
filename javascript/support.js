//Support Javascript
//Change Background of website
//Need to add to change navigation bar aswell

function backgroundChange(){
  //Variables of colour change options
  var def = document.getElementById("default");
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var yellow = document.getElementById("yellow");
  var orange = document.getElementById("orange");
  var purple = document.getElementById("purple");
  var pink = document.getElementById("pink");
  //Background Variables
  var containor = document.getElementById('containor').style;
  var changeform = document.getElementById("formbackground").style;
  //Change Layout background
  var house = document.getElementById("contentLayoutHouse").style;
  var halls = document.getElementById("contentLayoutHalls").style;
  var profile = document.getElementById("contentLayoutProfile").style;
  var social = document.getElementById("contentLayoutSocial").style;
  var support = document.getElementById("contentLayoutSupport").style;
  var choice = document.getElementById("contentLayoutChoices").style;
  // Change Contact Information
  var union = document.getElementById("SUContent").style;
  var library = document.getElementById("ULContent").style;
  var doctor = document.getElementById("UDContent").style;
  var door = document.getElementById("PDContent").style;
  var studenthall = document.getElementById("SHContent").style;
  var security = document.getElementById("SecurContent").style;
  var estate = document.getElementById("EstateContent").style;
  //Sidebar Content
  var search = document.getElementById("searchPref").style;
  var chat = document.getElementById("chatSettingsBlock").style;
  //Prefixes
  var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
  // Colours
  var colourblue = "rgba(204, 204, 255, 0.8)";
  var colourred = "rgba(255, 204, 255, 0.8)";
  var colourgreen = "rgba(102, 255, 102, 0.8)";
  var colouryellow = "rgba(255, 255, 102, 0.8)";
  var colourorange = "rgba(255, 179, 102, 0.8)";
  var colourpurple = "rgba(179, 102, 255, 0.8)";
  var colourpink = "rgba(255, 102, 217, 0.7)";
  for(var i = 0; i < prefixes.length; i++){
    //If Statements for when a radio button is checked

    if(def.checked == true){
       containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #6666ff, #6666ff, #6666ff, #6666ff)";/* Standard syntax */
       changeform.background = colourblue;
       house.background = colourblue;
       halls.background = colourblue;
       profile.background = colourblue;
       social.background = colourblue;
       support.background = colourblue;
       choice.background = colourblue;
       union.background =  colourblue;
       library.background =  colourblue;
       doctor.background =  colourblue;
       door.background =  colourblue;
       studenthall.background =  colourblue;
       security.background =  colourblue;
       estate.background =  colourblue;
       search.background = colourblue;
       chat.background = colourblue;
    }

    if(red.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #ff6666, #ff6666, #ff6666, #ff6666)";
      changeform.background = colourred;
      house.background = colourred;
      halls.background = colourred;
      profile.background = colourred;
      social.background = colourred;
      support.background = colourred;
      choice.background = colourred;
      union.background =  colourred;
      library.background =  colourred;
      doctor.background =  colourred;
      door.background =  colourred;
      studenthall.background =  colourred;
      security.background =  colourred;
      estate.background =  colourred;
      search.background = colourred;
      chat.background = colourred;
    }

    if(green.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #66ff66, #66ff66, #66ff66, #66ff66)";
      changeform.background = colourgreen;
      house.background = colourgreen;
      halls.background = colourgreen;
      profile.background = colourgreen;
      social.background = colourgreen;
      support.background = colourgreen;
      choice.background = colourgreen;
      union.background =  colourgreen;
      library.background =  colourgreen;
      doctor.background =  colourgreen;
      door.background =  colourgreen;
      studenthall.background =  colourgreen;
      security.background =  colourgreen;
      estate.background =  colourgreen;
      search.background = colourgreen;
      chat.background = colourgreen;
    }

    if(yellow.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #ffff66, #ffff66, #ffff66, #ffff66)";
      changeform.background = colouryellow;
      house.background = colouryellow;
      halls.background = colouryellow;
      profile.background = colouryellow;
      social.background = colouryellow;
      support.background = colouryellow;
      choice.background = colouryellow;
      union.background =  colouryellow;
      library.background =  colouryellow;
      doctor.background =  colouryellow;
      door.background =  colouryellow;
      studenthall.background =  colouryellow;
      security.background =  colouryellow;
      estate.background =  colouryellow;
      search.background = colouryellow;
      chat.background = colouryellow;
    }

    if(orange.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #ffb366, #ffb366, #ffb366, #ffb366)";
      changeform.background = colourorange;
      house.background = colourorange;
      halls.background = colourorange;
      profile.background = colourorange;
      social.background = colourorange;
      support.background = colourorange;
      choice.background = colourorange;
      union.background =  colourorange;
      library.background =  colourorange;
      doctor.background =  colourorange;
      door.background =  colourorange;
      studenthall.background =  colourorange;
      security.background =  colourorange;
      estate.background =  colourorange;
      search.background = colourorange;
      chat.background = colourorange;
    }

    if(purple.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #b366ff, #b366ff, #b366ff, #b366ff)";
      changeform.background = colourpurple;
      house.background = colourpurple;
      halls.background = colourpurple;
      profile.background = colourpurple;
      social.background = colourpurple;
      support.background = colourpurple;
      choice.background = colourpurple;
      union.background =  colourpurple;
      library.background =  colourpurple;
      doctor.background =  colourpurple;
      door.background =  colourpurple;
      studenthall.background =  colourpurple;
      security.background =  colourpurple;
      estate.background =  colourpurple;
      search.background = colourpurple;
      chat.background = colourpurple;
    }
    if(pink.checked == true){
      containor.background = prefixes[i] + "linear-gradient(#f2f2f2, #ff66ff, #ff66ff, #ff66ff, #ff66ff)";
      changeform.background = colourpink;
      house.background = colourpink;
      halls.background = colourpink;
      profile.background = colourpink;
      social.background = colourpink;
      support.background = colourpink;
      choice.background = colourpink;
      union.background =  colourpink;
      library.background =  colourpink;
      doctor.background =  colourpink;
      door.background =  colourpink;
      studenthall.background =  colourpink;
      security.background =  colourpink;
      estate.background =  colourpink;
      search.background = colourpink;
      chat.background = colourpink;
    }
  }
}

var change = document.getElementById("colours");
colours.addEventListener("click", backgroundChange);

//Show contact details
function showUnionDetails(){
  //Variables
  var union = document.getElementById("SUContent").style;

  if(union.display == "block"){
    union.display = "none";
  } else {
    union.display = "block";
  }
}

var unionshow = document.getElementById("SU");
unionshow.addEventListener("click", showUnionDetails);

function showLibraryDetails(){
  var library = document.getElementById("ULContent").style;

  if(library.display == "block"){
    library.display = "none";
  } else {
    library.display = "block";
  }
}

var libraryshow = document.getElementById("UL");
libraryshow.addEventListener("click", showLibraryDetails);

function showDoctorDetails(){
  var doctor = document.getElementById("UDContent").style;

  if(doctor.display == "block"){
    doctor.display = "none";
  } else {
    doctor.display = "block";
  }
}

var doctorshow = document.getElementById("UD");
doctorshow.addEventListener("click", showDoctorDetails);

function showPurpledoorDetails(){
  var purpledoor = document.getElementById("PDContent").style;

  if(purpledoor.display == "block"){
    purpledoor.display = "none";
  } else {
    purpledoor.display = "block";
  }
}

var purpledoorshow = document.getElementById("PD");
purpledoorshow.addEventListener("click", showPurpledoorDetails);

function showHallsDetails(){
  var studenthalls = document.getElementById("SHContent").style;

  if(studenthalls.display == "block"){
    studenthalls.display = "none";
  } else {
    studenthalls.display = "block";
  }
}

var hallsshow = document.getElementById("SH");
hallsshow.addEventListener("click", showHallsDetails);

function showSecurityDetails(){
  var security = document.getElementById("SecurContent").style;

  if(security.display == "block"){
    security.display = "none";
  } else {
    security.display = "block";
  }
}

var securityshow = document.getElementById("Secur");
securityshow.addEventListener("click", showSecurityDetails);

function showEstateDetails(){
  var estate = document.getElementById("EstateContent").style;

  if(estate.display == "block"){
    estate.display = "none";
  } else {
    estate.display = "block";
  }
}

var estateshow = document.getElementById("Estate");
estateshow.addEventListener("click", showEstateDetails);

//Change account detials through support
function showDetails(){
  //induvidual input feild
  var changepassword = document.getElementById("newpassword");
  var changeemail = document.getElementById("newemail");

  //Input feilds that are hidden
  var name = document.getElementById("changeName").style;
  var pass = document.getElementById("changePassword").style;
  var email = document.getElementById("changeEmail").style;
  var address = document.getElementById("changeAddress").style;
  var mobile = document.getElementById("changeMobile").style;
  var hobbie = document.getElementById("changeHobbie").style;
  var society = document.getElementById("changeSociety").style;
  var year = document.getElementById("changeYear").style;
  var course = document.getElementById("changeCourse").style;
  var accom = document.getElementById("changeAccom").style;

  //Radio buttons to show each input
  var namebtn = document.getElementById("supportName").checked
  var passbtn = document.getElementById("supportPassword").checked;
  var emailbtn = document.getElementById("supportEmail").checked;
  var addressbtn = document.getElementById("supportAddress").checked;
  var mobilebtn = document.getElementById("supportMobile").checked;
  var hobbiebtn = document.getElementById("supportHobbie").checked;
  var societybtn = document.getElementById("supportSociety").checked;
  var yearbtn = document.getElementById("supportYear").checked;
  var coursebtn = document.getElementById("supportCourse").checked;
  var accombtn = document.getElementById("supportAccom").checked;

  //Feilds for verify if needed
  var verifyemail = document.getElementById("verifyemail");
  var verifypassword = document.getElementById("verifypassword");
  var verifyemailfield = document.getElementById("secondnewemail");
  var verifypasswordfield = document.getElementById("secondnewpassword");

  //Patterns for Input
  var emailPatt = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var passwordPatt = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

  if(namebtn == true) {
    name.display = "block";
  } else {
    name.display = "none";
  }

  if(passbtn == true){
    pass.display = "block";
    verifypassword.style.display = "none";
    } else {
      pass.display = "none";
      verifypassword.style.display = "none";
  }

  if(emailbtn == true){
    email.display = "block";
    verifyemail.style.display = "none";
  } else {
    email.display = "none";
    verifyemail.style.display = "none";
  }

  if (changepassword.value != ""){
      verifypassword.style.display = "block";
  } else {
      verifypassword.style.display = "none";
  }

  if (changeemail.value != ""){
      verifyemail.style.display = "block";
  } else {
    verifyemail.style.display = "none";
  }

  if(verifyemailfield.value != changeemail.value || emailPatt.test(verifyemailfield.value)){
    verifyemailfield.style.background = "red";
  } else {
    verifyemailfield.style.background = "white";
  }
  if(verifypasswordfield.value != changepassword.value){
    verifypasswordfield.style.background = "red";
  } else {
    verifypasswordfield.style.background = "white";
  }

  if(addressbtn == true){
    address.display = "block";
  } else {
    address.display = "none";
  }

  if(mobilebtn == true){
    mobile.display = "block";
  } else {
    mobile.display = "none";
  }

  if(hobbiebtn == true){
    hobbie.display = "block";
  } else {
    hobbie.display = "none";
  }

  if(societybtn == true){
    society.display = "block";
  } else {
    society.display = "none";
  }

  if(yearbtn == true){
    year.display = "block";
  } else {
    year.display = "none";
  }

  if(coursebtn == true){
    course.display = "block";
  } else {
    course.display = "none";
  }

  if(accombtn == true){
    accom.display = "block";
  } else {
    accom.display = "none";
  }
}
var supportName = document.getElementById("supportName");
supportName.addEventListener("click", showDetails);
var supportPassword = document.getElementById("supportPassword");
supportPassword.addEventListener("click", showDetails);
var supportEmail = document.getElementById("supportEmail");
supportEmail.addEventListener("click", showDetails);
var supportAddress = document.getElementById("supportAddress");
supportAddress.addEventListener("click", showDetails);
var supportMobile = document.getElementById("supportMobile");
supportMobile.addEventListener("click", showDetails);
var supportHobbie = document.getElementById("supportHobbie");
supportHobbie.addEventListener("click", showDetails);
var supportSociety = document.getElementById("supportSociety");
supportSociety.addEventListener("click", showDetails);
var supportYear = document.getElementById("supportYear");
supportYear.addEventListener("click", showDetails);
var supportCourse = document.getElementById("supportCourse");
supportCourse.addEventListener("click", showDetails);
var supportAccom = document.getElementById("supportAccom");
supportAccom.addEventListener("click", showDetails);
var vpassword = document.getElementById("newpassword");
vpassword.addEventListener("change", showDetails);
var vemail = document.getElementById("newemail");
vemail.addEventListener("change", showDetails);
var vemailfield = document.getElementById("secondnewemail");
vemailfield.addEventListener("change", showDetails);
var vpasswordfield = document.getElementById("secondnewpassword");
vpasswordfield.addEventListener("change", showDetails);

// Done button on each change -  need to add so it changes the database

function donePassword(){
  //Radio buttons to show each input
  var passbtn = document.getElementById("supportPassword").checked;
  var pass = document.getElementById("changePassword").style;

  if(passbtn == true){
    passbtn == false;
    pass.display = "none";
  }
}

var done = document.getElementById("completePassword");
done.addEventListener("click", donePassword);

function doneEmail(){
  var emailbtn = document.getElementById("supportEmail").checked;
  var email = document.getElementById("changeEmail").style;

  if(emailbtn == true){
    emailbtn == false;
    email.display = "block";
  }
}
var emailChange = document.getElementById("completeEmail");
emailChange.addEventListener("click", doneEmail);


function doneAddress(){
  var addressbtn = document.getElementById("supportAddress").checked;
  var address = document.getElementById("changeAddress").style;

  if(addressbtn == true){
    addressbtn == false;
    address.display = "none";
  }
}

var addressChange = document.getElementById("completeAddress");
addressChange.addEventListener("click", doneAddress);

function doneMobile(){
  var mobilebtn = document.getElementById("supportMobile").checked;
  var mobile = document.getElementById("changeMobile").style;

  if(mobilebtn == true){
    mobilebtn = false;
    mobile.display = "none";
  }
}

var mobileChange = document.getElementById("completeMobile");
mobileChange.addEventListener("click", doneMobile);

function doneHobbie(){
  var hobbiebtn = document.getElementById("supportHobbie").checked;
  var hobbie = document.getElementById("changeHobbie").style;

  if(hobbiebtn == true){
    hobbiebtn = false;
    hobbie.display = "none";
  }
}

var hobbieChange = document.getElementById("completeHobbie");
hobbieChange.addEventListener("click", doneHobbie);

function doneSociety(){
  var societybtn = document.getElementById("supportSociety").checked;
  var society = document.getElementById("changeSociety").style;

  if(societybtn == true){
    societybtn = false;
    society.display = "none";
  }
}

var societyChange = document.getElementById("completeSociety");
societyChange.addEventListener("click", doneSociety);

function doneYear(){
  var yearbtn = document.getElementById("supportYear").checked;
  var year = document.getElementById("changeYear").style;

  if(yearbtn == true){
    yearbtn = false;
    year.display = "none";
  }
}

var yearChange = document.getElementById("completeYear");
yearChange.addEventListener("click", doneYear);

function doneCourse(){
  var coursebtn = document.getElementById("supportCourse").checked;
  var course = document.getElementById("changeCourse").style;

  if(coursebtn == true){
    coursebtn = false;
    course.display = "none";
  }
}

var courseChange = document.getElementById("completeCourse");
courseChange.addEventListener("click", doneCourse);

function doneAccom(){
  var accombtn = document.getElementById("supportAccom").checked;
  var accom = document.getElementById("changeAccom").style;

  if(accombtn == true){
    accombtn = false;
    accom.display = "none";
  }
}

var accomChange = document.getElementById("completeAccom");
accomChange.addEventListener("click", doneAccom);

//Search Preferences

function showSearchPref(){
  var search = document.getElementById("searchPref").style;
  if(search.display == "block"){
    search.display = "none";
  } else {
    search.display = "block";
  }
}

var showSearchPreferences = document.getElementById("viewSearchPref");
showSearchPreferences.addEventListener("click", showSearchPref);
var applySearchPreferences =  document.getElementById("applySearch");
applySearchPreferences.addEventListener("click", showSearchPref);

//Chat Settings

function showBlockUser(){
  var form = document.getElementById("chatSettingsBlock").style;
  var btn = document.getElementById("chatSetBlockBtn").style;
  if(form.display == "block"){
    form.display = "none";
    btn.display = "block";
  } else {
    form.display = "block";
    btn.display = "none";
  }
}

var showBlockUserForm = document.getElementById("chatSetBlockBtn");
showBlockUserForm.addEventListener("click", showBlockUser);
var cancelBlockUserForm = document.getElementById("chatCancelBlock");
cancelBlockUserForm.addEventListener("click", showBlockUser);

//Layout support
//Shows each section of the layout
function showHouseLayout(){
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutsocial = document.getElementById("layoutSocial").style;
  var layoutprofile = document.getElementById("layoutProfile").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layoutmaps = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layouthouse.display === "block") {
    layouthouse.display = "none";
  } else {
    layouthouse.display = "block";
    layoutsupport.display = "none";
    layoutsocial.display = "none";
    layouthalls.display = "none";
    layoutprofile.display = "none";
    layoutmaps.display = "none";
    choices.display = "none";
  }
}

var showHouse = document.getElementById("layoutHouseBtn");
showHouse.addEventListener("click", showHouseLayout);

function showHallsLayout(){
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutsocial = document.getElementById("layoutSocial").style;
  var layoutprofile = document.getElementById("layoutProfile").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layoutmaps = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layouthalls.display === "block") {
    layouthalls.display = "none";
  } else {
    layouthalls.display = "block";
    layoutsocial.display = "none";
    layoutprofile.display = "none";
    layoutsupport.display = "none";
    layouthouse.display = "none";
    layoutmaps.display = "none";
    choices.display = "none";
  }
}

var showHalls = document.getElementById("layoutHallsBtn");
showHalls.addEventListener("click", showHallsLayout);

function showProfileLayout(){
  var layout = document.getElementById("layoutProfile").style;
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutsocial = document.getElementById("layoutSocial").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layoutmaps = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layout.display === "block") {
    layout.display = "none";
  } else {
    layout.display = "block";
    layoutsupport.display = "none";
    layoutsocial.display = "none";
    layouthalls.display = "none";
    layouthouse.display = "none";
    layoutmaps.display = "none";
    choices.display = "none";
  }
}

var showProfile = document.getElementById("layoutProfileBtn");
showProfile.addEventListener("click", showProfileLayout);

function showSocialLayout(){
  var layout = document.getElementById("layoutSocial").style;
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutprofile = document.getElementById("layoutProfile").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layoutmaps = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layout.display === "block") {
    layout.display = "none";
  } else {
    layout.display = "block";
    layoutsupport.display = "none";
    layoutprofile.display = "none";
    layouthalls.display = "none";
    layouthouse.display = "none";
    layoutmaps.display = "none";
    choices.display = "none";
  }
}

var showSocial = document.getElementById("layoutSocialBtn");
showSocial.addEventListener("click", showSocialLayout);

function showMapsLayout() {
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutsocial = document.getElementById("layoutSocial").style;
  var layoutprofile = document.getElementById("layoutProfile").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layout = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layout.display === "block") {
    layout.display = "none";
  } else {
    layout.display = "block";
    layoutsupport.display = "none";
    layoutprofile.display = "none";
    layouthalls.display = "none";
    layouthouse.display = "none";
    layoutsocial.display = "none";
    choices.display = "none";
  }
}

var showMaps = document.getElementById("layoutMapsBtn");
showMaps.addEventListener("click", showMapsLayout);




function showSupportLayout(){
  var layoutsupport = document.getElementById("layoutSupport").style;
  var layoutsocial = document.getElementById("layoutSocial").style;
  var layoutprofile = document.getElementById("layoutProfile").style;
  var layouthalls = document.getElementById("layoutHalls").style;
  var layouthouse = document.getElementById("layoutHouse").style;
  var layoutmaps = document.getElementById("layoutMaps").style;
  var choices = document.getElementById("layoutChoices").style;

  if(layoutsupport.display === "block") {
    layoutsupport.display = "none";
  } else {
    layoutsupport.display = "block";
    layoutsocial.display = "none";
    layoutprofile.display = "none";
    layouthalls.display = "none";
    layouthouse.display = "none";
    layoutmaps.display = "none";
    choices.display = "none";
  }
}

var showSupport = document.getElementById("layoutSupportBtn");
showSupport.addEventListener("click", showSupportLayout);

//Induvidual radio buttons in each section of website to then show which part
//the user wants to load that content

function layoutHouseOptions(){
  var section1 = document.getElementById("houseSection1");
  var section2 = document.getElementById("houseSection2");
  var section3 = document.getElementById("houseSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
  }
}

var houseChoices = document.getElementById("contentLayoutHouse");
houseChoices.addEventListener("click", layoutHouseOptions);

function layoutHallsOptions(){
  var section1 = document.getElementById("hallsSection1");
  var section2 = document.getElementById("hallsSection2");
  var section3 = document.getElementById("hallsSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
}
}
var hallsChoice = document.getElementById("contentLayoutHalls");
hallsChoice.addEventListener("click", layoutHallsOptions);

function layoutProfileOptions(){
  var section1 = document.getElementById("profileSection1");
  var section2 = document.getElementById("profileSection2");
  var section3 = document.getElementById("profileSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
}
}
var profileChoice = document.getElementById("contentLayoutProfile");
profileChoice.addEventListener("click", layoutProfileOptions);

function layoutSocialOptions(){
  var section1 = document.getElementById("socialSection1");
  var section2 = document.getElementById("socialSection2");
  var section3 = document.getElementById("socialSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
}
}
var socialChoice = document.getElementById("contentLayoutSocial");
socialChoice.addEventListener("click", layoutSocialOptions);

function layoutSupportOptions(){
  var section1 = document.getElementById("supportSection1");
  var section2 = document.getElementById("supportSection2");
  var section3 = document.getElementById("supportSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
}
}

var supportChoice = document.getElementById("contentLayoutSupport");
supportChoice.addEventListener("click", layoutSupportOptions);

function layoutMapsOptions(){
  var section1 = document.getElementById("mapSection1");
  var section2 = document.getElementById("mapSection2");
  var section3 = document.getElementById("mapSection3");
  var choices = document.getElementById("layoutChoices").style;
  if(section1.checked == true||section2.checked == true||section3.checked == true){
    choices.display = "block";
}
}

var mapsChoice = document.getElementById("contentLayoutMaps");
mapsChoice.addEventListener("click", layoutMapsOptions);

//Show halls in database when the user clicks
function showHallsSupport(value) {
  ajaxGet("lib/getHalls.php?q="+value, function(data){
    document.getElementById("supportHallsShow").innerHTML = data;
  });
}

var showHalls = document.getElementById("contactStudentHalls");
showHalls.addEventListener("change", showHallsSupport(this.value));

//AJAXGET
function ajaxGet(URL, callback) {


  var ajaxObj = new XMLHttpRequest();
  ajaxObj.open("GET", URL, true); // The TRUE implies asynchronous
  ajaxObj.onreadystatechange = function() {
    if (ajaxObj.status === 200){
      if (ajaxObj.readyState === 4){
        callback(ajaxObj.responseText);
   }
   }
  };
  ajaxObj.send();
}
