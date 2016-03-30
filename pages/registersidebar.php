<form name="basicRegister" class="registrationForm" id="basicForm" method="post">
  					  <h1>Register</h1>
                        <p>Enter some basic information about yourself</p>

                        <p id="reqbasic"><span class="required">* required field.</span></p>

                        <p>First Name<input type="text" name="FName" id="FName"></p>
                        <p id="reqname"><span class="required">*<span id="nameErr"> </span></span></p>
                        <p>Last Name<input type="text" name="LName" id="LName"></p>
                        <p id="reqlname"><span class="required">*<span id="lnameErr"> </span></span></p>
                        <p>Date Of Birth<input type="text" name="DOB" id="DOB" maxlength="10" size ="10"></p>
                        <p id="reqdob"><span class="required">*<span id="dobErr"> </span></span></p>
                        <p>Email<input type="text" name="Email" id="Email"></p>
                        <p id="reqemail"><span class="required">*<span id="emailErr"> </span></span></p>
                        <p>Password<input type="password" name="Password" id="Password"></p>
                        <p id="reqpass"><span class="required">*<span id="passwordErr"> </span></span></p>
                        <p>Home Address<input type="text" name="HomeAddress" id="HomeAddress"></p>
                        <p id="reqaddress"><span class="required">*<span id="addressErr"> </span></span></p>
                        <p>Postcode<input type="text" name="Postcode" id="Postcode" maxlength="7" size="7"></p>
                        <p id="reqpost"><span class="required">*<span id="postcodeErr"> </span></span></p>
                        <p>Home Number<input type="number" name="HomeNumber" id="HomeNumber"></p>
                        <p id="reqhome"><span class="required">*<span id="homeErr"> </span></span></p>
                        <p>Mobile<input type="number" name="Mobile" id="Mobile"></p>
                        <p id="reqmobile"><span class="required">*<span id="mobileErr"> </span></span></p>
                        <p><input type="button" value="Complete" id="completeValidation"></p>
                    </form>
