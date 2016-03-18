<form class="registrationForm" id="basicForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <h1>Register</h1>
      <p>Enter some basic information about yourself</p>

      <p><span class="required">* required field.</span></p>

      <p>First Name<input type="text" name="FName"></p>
      <p><span class="required">*<?php echo $nameErr;?></span></p>
      <p>Last Name<input type="text" name="LName"></p>
      <p><span class="required">*<?php echo $surnameErr;?></span></p>
      <p>Date Of Birth<input type="text" name="DOB" maxlength="10" size ="10"></p>
      <p><span class="required">*<?php echo $DOBErr;?></span></p>
      <p>Email<input type="text" name="Email"></p>
      <p><span class="required">*<?php echo $emailErr;?></span></p>
      <p>Password<input type="password" name="Password"></p>
      <p><span class="required">*<?php echo $passwordErr;?></span></p>
      <p>Home Address<input type="text" name="HomeAddress"></p>
      <p><span class="required">*<?php echo $addressErr;?></span></p>
      <p>Postcode<input type="text" name="Postcode" maxlength="7" size="7"></p>
      <p><span class="required">*<?php echo $postcodeErr;?></span></p>
      <p>Home Number<input type="number" name="HomeNumber"></p>
      <p>Mobile<input type="number" name="Mobile"></p>
      <p><span class="required">*<?php echo $mobileErr;?></span></p>
      <p><input type="submit"></p>
</form>
