<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="javascript/support.js"></script>
  </head>
  <body>
    <div class="supportcenter">
  <h1>Customise the look of your profile</h1>
    <h2>Colour</h2>
      <form name="colours" id="colours">
        <span id="defaultbackground">Default: <input type="radio" name="colour" id="default"></span>
        <span id="redbackground">Red: <input type="radio" name="colour" id="red"></span>
        <span id="greenbackground">Green: <input type="radio" name="colour" id="green"></span>
        <span id="yellowbackground">Yellow: <input type="radio" name="colour" id="yellow"></span>
        <span id="orangebackground">Orange: <input type="radio" name="colour" id="orange"></span>
        <span id="purplebackground">Purple: <input type="radio" name="colour" id="purple"></span>
        <span id="pinkbackground">Pink: <input type="radio" name="colour" id="pink"></span>
      </form>
      <p id="textAlign">If you want to change the colour of your profile then choose one of the options above</p>


    <h2>Layout</h2>
    <!--Think about how to do this by changing where each file is called -->
    <p id="textAlign">Choose one of the pages</p>
    <form name="layoutOfPages" id="layoutOfPages">
      <input type="button" value="House" id="layoutHouseBtn">
      <input type="button" value="Halls" id="layoutHallsBtn">
      <input type="button" value="Profile" id="layoutProfileBtn">
      <input type="button" value="Social Pad" id="layoutSocialBtn">
      <input type="button" value="Support" id="layoutSupportBtn">
    </form>
    <div id="layoutHouse">
      <form name="contentLayoutHouse" id="contentLayoutHouse">
        Section 1<input type="radio" name="layoutHouse" id="houseSection1">
        Section 2<input type="radio" name="layoutHouse" id="houseSection2">
        Section 3<input type="radio" name="layoutHouse" id="houseSection3">
      </form>
    </div>
    <div id="layoutHalls">
      <form name="contentLayoutHalls" id="contentLayoutHalls">
        Section 1<input type="radio" name="layoutHalls" id="hallsSection1">
        Section 2<input type="radio" name="layoutHalls" id="hallsSection2">
        Section 3<input type="radio" name="layoutHalls" id="hallsSection3">
      </form>
    </div>
    <div id="layoutProfile">
      <form name="contentLayoutProfile" id="contentLayoutProfile">
        About User<input type="radio" name="layoutProfile" id="profileSection1">
        Calender<input type="radio" name="layoutProfile" id="profileSection2">
        Housing<input type="radio" name="layoutProfile" id="profileSection3">
      </form>
    </div>
    <div id="layoutSocial">
      <form name="contentLayoutSocial" id="contentLayoutSocial">
        Inbox<input type="radio" name="layoutSocial" id="socialSection1">
        Feed<input type="radio" name="layoutSocial" id="socialSection2">
        Friends<input type="radio" name="layoutSocial" id="socialSection3">
      </form>
    </div>
    <div id="layoutSupport">
      <form name="contentLayoutSupport" id="contentLayoutSupport">
        Online Settings<input type="radio" name="layoutSupport" id="supportSection1">
        Customisation<input type="radio" name="layoutSupport" id="supportSection2">
        Contact Information<input type="radio" name="layoutSupport" id="supportSection3">
      </form>
    </div>

    <div id="layoutChoices">
      <form name="layoutChoices" id="contentLayoutChoices">
        Side Bar<input type="radio" name="layout" id="layoutSide">
        Center <input type="radio" name="layout" id="layoutCenter">
        Right Bar<input type="radio" name="layout" id="layoutRight">
        <input type="submit" value="Finish" id="layoutComplete">
      </form>
    </div>

    <h2>Profile</h2>
    <div class="changeAccountSupport">
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Password or email</span><span style="float: right;"><input type="radio" name="account" id="supportPassword"></span></p>
        <div id="changePassword">
          <form id="formbackground" name="changePassword">
            <div style="margin: 0 2%;">
              Current Password: <input type="password" id="oldpassword">
              New Password: <input type="password" id="newpassword">
            </div>
            <p><span id="verifypassword">Re-type new password: <input type="password" id="secondnewpassword"></span></p>
            <p><input type="submit" value="Done" id="completePassword"><input type="button" value="Cancel" id="cancelPassword"></p>
          </form>
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Email</span><span style="float: right;"><input type="radio" name="account" id="supportEmail"></span></p>
        <div id="changeEmail">
          <form id="formbackground" name="changeEmail">
            <div style="margin: 0 6%;">
              Current Email: <input type="text" id="oldemail">
              New Email: <input type="text" id="newemail">
            </div>
            <p><span id="verifyemail">Re-type new email: <input type="text" id="secondnewemail"></span></p>
            <p><input type="submit" value="Done" id="completeEmail"><input type="button" value="Cancel" id="cancelEmail"></p>
          </form>
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Address</span><span style="float: right;"><input type="radio" name="account" id="supportAddress"></span></p>
        <div id="changeAddress">
          <form id="formbackground" name="changeAddress">
            <div style="margin: 0 23%;">
              <span id="oldAddress">OLD ADDRESS<!--Add to show old address from database--></span>
              <p>New Address: <input type="text" id="newaddress"></p>
            </div>
            <input type="submit" value="Done" id="completeAddress"><input type="button" value="Cancel" id="cancelAddress">
          </form>
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Mobile number</span><span style="float: right;"><input type="radio" name="account" id="supportMobile"></span></p>
        <div id="changeMobile">
          <form id="formbackground" name=changeMobile>
            <div style="margin: 0 5%;">
              <p><span id="oldmobile">OLD MOBILE<!--Add show old mobile from database--></span><span id="oldhome"> OLD HOMEPHONE</span></p>
              New Mobile: <input type="text" id="newmobile">
              New Landline: <input type="text" id="newhome">
            </div>
            <input type="submit" value="Done" id="completeMobile"><input type="button" value="Cancel" id="cancelMobile">
          </form>
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Add or Remove Hobbies</span><span style="float: right;"><input type="radio" name="account" id="supportHobbie"></span></p>
        <div id="changeHobbie">
          <form id="formbackground" name="Hobbies">
           <select id="hobbieList">
             <option value="">Please select the hobbies you do:</option>
             <option value="Acting">Acting</option>
             <option value="Airsoft">Airsoft</option>
             <option value="Astronomy">Astronomy</option>
             <option value="Basketball">Basketball</option>
             <option value="Bowling">Bowling</option>
             <option value="Computer Programming">Computer Programming</option>
             <option value="Crossword Puzzles">Crossword Puzzles</option>
             <option value="Cryptography">Cryptography</option>
             <option value="Dance">Dance</option>
             <option value="Drawing">Drawing</option>
             <option value="Electronics">Electronics</option>
             <option value="Fashion">Fashion</option>
             <option value="Fencing">Fencing</option>
             <option value="Football">Football</option>
             <option value="Homebrewing">Homebrewing</option>
             <option value="Ice Skating">Jiu-jitsu</option>
             <option value="Jogging">Jogging</option>
             <option value="Judo">Judo</option>
             <option value="Kayaking">Kayaking</option>
             <option value="Magic">Magic</option>
             <option value="Moutain biking">Moutain biking</option>
             <option value="Paintball">Paintball</option>
             <option value="Photography">Photography</option>
             <option value="Puzzles">Photography</option>
             <option value="Roller Skating">Roller Skating</option>
             <option value="Rugby">Rugby</option>
             <option value="Running">Running</option>
             <option value="Sailing">Sailing</option>
             <option value="Skateboarding">Skateboarding</option>
             <option value="Skiing">Skiing</option>
             <option value="Squash">Squash</option>
             <option value="Sudoku">Sudoku</option>
             <option value="Surfing">Surfing</option>
             <option value="Swimming">Swimming</option>
             <option value="Tennis">Tennis</option>
             <option value="Video Gaming">Video Gaming</option>
             <option value="Volleyball">Volleyball</option>
             <option value="Water Sports">Water Sports</option>
           </select>
         </form>
         <input type="submit" value="Done" id="completeHobbie"><input type="button" value="Cancel" id="cancelHobbie">
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Add or Remove Societies</span><span style="float: right;"><input type="radio" name="account" id="supportSociety"></span></p>
        <div id="changeSociety">
          <form id="formbackground" name="Society">
            <select id="societyList">
              <option value="">Choose the societies your apart of: </option>
              <option value="Art & Design">Art & Design</option>
              <option value="Beer Pong">Beer Pong</option>
              <option value="Brazilian Ju-Jitsu">Brazilian Ju-Jitsu</option>
              <option value="Business">Business</option>
              <option value="Catholic">Catholic</option>
              <option value="Civil Engineering & Surveying">Civil Engineering & Surveying</option>
              <option value="Comedy">Comedy</option>
              <option value="First Aid">First Aid</option>
              <option value="French">French</option>
              <option value="Hindu">Hindu</option>
              <option value="History">History</option>
              <option value="IT">IT</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Karting">Karting</option>
              <option value="Law">Law</option>
              <option value="Lego">Lego</option>
              <option value="Music">Music</option>
              <option value="Rock">Rock</option>
              <option value="Rugby">Rugby</option>
              <option value="Skate">Skate</option>
            </select>
        </form>
        <input type="submit" value="Done" id="completeSociety"><input type="button" value="Cancel" id="cancelSociety">
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Year</span><span style="float: right;"><input type="radio" name="account" id="supportYear"></span></p>
        <div id="changeYear">
          <form id="formbackground" name ="yearList">
            <select id="StudyYear">
              <option value="">Select your current study year:</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
            </select>
          </form>
          <input type="submit" value="Done" id="completeYear"><input type="button" value="Cancel" id="cancelYear">
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Course</span><span style="float: right;"><input type="radio" name="account" id="supportCourse"></span></p>
        <div id="changeCourse">
          <form id="formbackground" name="courseList">
            <select id="courseList">
             <option value="">Select the course your studying:</option>
             <option value="ANIM">Animation</option>
             <option value="BIOCH">Biochemistry</option>
             <option value="BIO">Biology</option>
             <option value="BUSI">Business</option>
             <option value="BE">Business and Economics</option>
             <option value="CENG">Civil Engineering</option>
             <option value="CE">Computer Engineering</option>
             <option value="CS">Computer Science</option>
             <option value="COMP">Computing</option>
             <option value="CP">Criminology with Psychology</option>
             <option value="DHDT">Dental Hygiene and Dental Therapy</option>
             <option value="DM">Digital Marketing</option>
             <option value="ECO">Economics</option>
             <option value="EH">English and History</option>
             <option value="EL">English Literature</option>
             <option value="FS">Film Studies</option>
             <option value="GPH">Geography</option>
             <option value="GEO">Geology</option>
             <option value="GD">Graphic Design</option>
             <option value="HMT">Hospitality Management with Tourism</option>
             <option value="IR">Internation Relations</option>
             <option value="JRN">Journalism</option>
             <option value="LAW">Law with Criminology</option>
             <option value="MATH">Mathmatics</option>
             <option value="MS">Media Studies</option>
             <option value="PHR">Pharmacy</option>
             <option value="SC">Sociology with Criminology</option>
             <option value="SSP">Sports Science and Management</option>
             <option value="TFP">Television and Film Production</option>
           </select>
         </form>
         <input type="submit" value="Done" id="completeCourse"><input type="button" value="Cancel" id="cancelCourse">
        </div>
      <p style="border-bottom: 1px solid black;"><span id="textAlign">Change Accomodation</span><span style="float: right;"><input type="radio" name="account" id="supportAccom"></span></p>
        <div id="changeAccom">
          <form id="formbackground" name="accomList">
            <select id="Accomodation">
              <option value="">Where will you be staying: </option>
              <option value="Halls">Halls</option>
              <option value="House">House</option>
            </select>
          </form>
          <input type="submit" value="Done" id="completeAccom"><input type="button" value="Cancel" id="cancelAccom">
        </div>
    </div>
</div>
  
  </body>
</html>
