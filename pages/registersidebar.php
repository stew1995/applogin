<form class="registrationForm" method="POST" action="lib/register.php">
    <h1>Register</h1>
    <p>Enter some basic information about yourself</p>

            <p><span class="required">* required field.</span></p>

            <p>First Name<input type="text" name="FName"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Last Name<input type="text" name="LName"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Date Of Birth<input type="text" name="DOB" maxlength="9" size ="9"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Email<input type="text" name="Email"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Home Address<input type="text" name="HomeAddress"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Postcode<input type="text" name="Postcode" maxlength="7" size="7"><span class="required">*<?php echo $nameErr;?></span></p>
            <p>Home Number<input type="number" name="HomeNumber"></p>
            <p>Mobile<input type="number" name="Mobile"><span class="required">*<?php echo $nameErr;?></span></p>
            <p><input type="submit" name="completeBasic" value="Submit"></p>
          </form>
