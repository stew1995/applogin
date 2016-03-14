          <?php
          $name = $surname = $DOB = $email = "";
          
          if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = test_input($_POST["FName"]);
            $surname = test_input($_POST["LName"]);
            $DOB = test_input($_POST["DOB"]);
            $email = test_input($_POST["email"]);
          
          }
          
          function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
          }
          ?>
