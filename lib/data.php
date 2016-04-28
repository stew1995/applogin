<?php // CREATE NOT NULL ON UNIQUE KEY
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "web";
//Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
//Check connection
if(!$conn) {
  die("Connection to database failed: ". mysqli_connect_error());
}
//SQL to Create tables
//Hobbies
$sql =
"CREATE TABLE IF NOT EXISTS hobbie (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) 
)";
//Check if hobbie table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table hobbie successfully created </p>";
} else {
  echo "</p> Error creating table hobbie". mysqli_error($conn) . "</p>";
}
//Society
$sql =
"CREATE TABLE IF NOT EXISTS society (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) 
)";
//Check if society table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table society successfully created </p>";
} else {
  echo "</p> Error creating table society". mysqli_error($conn) ."</p>";
}
//Course table
$sql =
"CREATE TABLE IF NOT EXISTS course (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(5) UNIQUE NOT NULL,
  name VARCHAR(40) NOT NULL
)";
//Check if course table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table has been successfully created </p>";
} else {
  echo "</p> Error creating table course: ". mysqli_error($conn) . "</p>";
}
//Halls Table
$sql =
"CREATE TABLE IF NOT EXISTS halls (
  hall_id INT UNSIGNED PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL,
  location VARCHAR(200) NOT NULL,
  postcode VARCHAR(7) NOT NULL
)";
//check if halls table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table halls created successfully </p>";
} else {
  echo "</p> Error creating table: ". mysqli_error($conn) . "</p>";
}
//User table - Hobbie and Society are FK
$sql =
"CREATE TABLE IF NOT EXISTS user (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(20) NOT NULL,
  lname VARCHAR(20) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(12) NOT NULL,
  dob DATE NOT NULL,
  address VARCHAR(250) NOT NULL,
  postcode VARCHAR(8) NOT NULL,
  hnumber VARCHAR(11),
  mobile VARCHAR(11) NOT NULL,
  hobbie INT UNSIGNED,
  society INT UNSIGNED,
  smoker BOOLEAN NOT NULL,
  CONSTRAINT HobbieFK FOREIGN KEY (hobbie) REFERENCES hobbie(id),
  CONSTRAINT SocietyFK FOREIGN KEY (society) REFERENCES society(id)
)";
//Check if user table is created successfully
if(mysqli_query($conn, $sql)) {
  echo "</p> Table user created successfully </p>";
} else {
  echo "</p> Error creating user table: ". mysqli_error($conn) . "</p>";
}

//Location Table

$sql =
"CREATE TABLE IF NOT EXISTS location (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)  NOT NULL,
  type VARCHAR(50) NOT NULL
)";

//check if location table has been successfully created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table location created successfully </p>";
} else {
  echo "</p> Error creating table location: ". mysqli_error($conn) . "</p>";
}
//Log In Table
$sql =
"CREATE TABLE IF NOT EXISTS login (
  id int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(12) NOT NULL,
  CONSTRAINT loginEmailFK FOREIGN KEY (email) REFERENCES user(email),
  CONSTRAINT loginPasswordFK FOREIGN KEY (password) REFERENCES user(password)
)";
//Check if login table is created successfully
if(mysqli_query($conn, $sql)) {
  echo "</p> Table login created successfully </p>";
} else {
  echo "</p> Error creating login table: ". mysqli_error($conn) . "</p>";
}
//Flat Table
$sql =
"CREATE TABLE IF NOT EXISTS flat (
  flat_id DECIMAL(2,1) UNSIGNED PRIMARY KEY,
  halls_id INT UNSIGNED NOT NULL,
  capacity INT UNSIGNED NOT NULL,
  CONSTRAINT HallsFK FOREIGN KEY (halls_id) REFERENCES halls(hall_id)
)";
//check if flat table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table flat created successfully </p>";
} else {
  echo "</p> Error creating table flat: ". mysqli_error($conn) . "</p>";
}
//Uni Table
//In this table think about how the course table will work, maybe include a different one
$sql =
"CREATE TABLE IF NOT EXISTS uni (
  user_id INT UNSIGNED PRIMARY KEY ,
  course INT UNSIGNED,
  study SMALLINT NOT NULL,
  accom VARCHAR(7) NOT NULL,
  flat_id DECIMAL(2,1) UNSIGNED,
  CONSTRAINT UserFK FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT CourseFK FOREIGN KEY (course) REFERENCES course(id),
  CONSTRAINT FlatuserFK FOREIGN KEY (flat_id) REFERENCES flat(flat_id)
)";
//Check if uni table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table uni created successfully </p>";
} else {
  echo "</p> Error creating table: ". mysqli_error($conn) . "</p>";
}
//House Table
$sql =
"CREATE TABLE IF NOT EXISTS house (
  group_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  name VARCHAR(20) NOT NULL,
  description TEXT NOT NULL,
  datecreated TIMESTAMP NOT NULL,
  CONSTRAINT HousemateFK FOREIGN KEY (user_id) REFERENCES user(id)
)";
//check if house table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table house created successfully </p>";
} else {
  echo "</p> Error creating table house: ". mysqli_error($conn) . "</p>";
}
//Message Table - LOOK INTO HOW THIS WILL WORK, send = user sending the message, location is where the message is sent to
$sql =
"CREATE TABLE IF NOT EXISTS message (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(200) NOT NULL,
  send INT UNSIGNED NOT NULL,
  location INT UNSIGNED NOT NULL,
  CONSTRAINT SendFK FOREIGN KEY (send) REFERENCES user(id),
  CONSTRAINT ReceiveFK FOREIGN KEY (location) REFERENCES user(id)
)";
//check if message table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table message created successfully </p>";
} else {
  echo "</p> Error creating table message: ". mysqli_error($conn) . "</p>";
}

//Note Table -- Needs checking
$sql =
"CREATE TABLE IF NOT EXISTS note (
  note_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED,
  name VARCHAR(15) NOT NULL,
  data TEXT NOT NULL,
  CONSTRAINT userNoteFK FOREIGN KEY (user_id) REFERENCES user(id)
)";
//check if note table has been created
if(mysqli_query($conn, $sql)) {
  echo "</p> Table note created successfully </p>";
} else {
  echo "</p> Error creating table note: ". mysqli_error($conn) . "</p>";
}
//Data for hobbie table on load up
$sqlhobbiedata =
"INSERT IGNORE INTO `hobbie` (`name`)
VALUES 
('Drawing'),
('Swimming'),
('Magic'),
('Computer Programming'),
('Photography'),
('Ice Skating'),
('Surfing'),
('Tennis'),
('Jiu-jitsu'),
('Kayaking'),
('Moutain biking'),
('Fencing'),
('Puzzles'),
('Volleyball'),
('Electronics'),
('Homebrewing'),
('Basketball'),
('Paintball'),
('Skateboarding'),
('Crossword Puzzles'),
('Skiing'),
('Dance'),
('Roller Skating'),
('Bowling'),('Acting'),
('Airsoft'),
('Video Gaming'),
('Running'),
('Cryptography'),
('Sailing'),
('Water Sports'),
('Jogging'),
('Judo'),
('Rugby'),
('Fashion'),
('Football'),
('Sudoku'),
('Astronomy'),
('Squash')";
//check if data has been inserted in to hobbie table

mysqli_query($conn, $sqlhobbiedata) or die(mysqli_error($conn));
//Data for society table
$sqlsocietydata =
"INSERT IGNORE INTO `society` (`name`)
VALUES ('IT'),
('Law'),
('Brazilian Ju-Jitsu'),
('Catholic'),('Business'),
('Art & Design'),
('Lego'),
('Karting'),
('First Aid'),
('Civil Engineering & Surveying'),
('Italian'),
('Japanese'),
('Rock'),
('Rugby'),
('Beer Pong'),
('French'),
('Music'),
('History'),
('Hindu'),
('Comedy'),
('Skate')";

mysqli_query($conn, $sqlsocietydata) or die(mysqli_error($conn));

//Data for halls table
$sqlhallsdata =
"INSERT IGNORE INTO `halls` (hall_id, name, location, postcode) VALUES (1, 'Margaret Rule Hall','Margaret Rule Hall, Isambard Brunel Rd, Portsmouth', 'PO1 2DS'),
(2, 'Harry Law Hall', 'Harry Law Hall, Portsmouth', 'PO1 2SP'),
(3, 'James Watson Hall', 'James Watson Hall, 28 Guildhall Walk, Portsmouth', 'PO1 2DD'),
(4, 'Langstone', 'Langstone Campus, Furze Lane, Southsea', 'PO4 8LW'),
(5, 'Trafalgar Hall', 'Trafalgar Hall, Portsmouth, Southsea, Portsmouth', 'PO5 4AY'),
(6, 'Bateson Hall', 'Bateson Hall, Portsmouth', 'PO1 2BL'),
(7, 'Rees Hall', 'Southsea Terrace,Southsea', 'PO5 3AP'),
(8, 'Trafalgar Hall', 'Winston Churchill Ave, Portsmouth', 'PO1 2UP')";

mysqli_query($conn, $sqlhallsdata) or die(mysqli_error($conn));

//Data for user table - pre loaded data
$sqluserdata =
"INSERT IGNORE INTO `user`(`fname`,`lname`,`gender`,`email`,`password`,`dob`,`address`,`postcode`,`hnumber`,`mobile`,`smoker`) VALUES
('Martha', 'Chapman','Female','clopez0@theguardian.com','D7z6WUN7pbrX','19980522','73 Marquette Junction','FK198PE','02086680851','07984512477', 'FALSE'),
('Linda', 'Baker','Female','hgibson1@salon.com','XVxgAcYb','19940717','077 2nd Point','HP225LQ','08006482133','07001876371',TRUE),
('Patrick', 'Warren','Male','vday2@qq.com','fzqz89rUCkSI','19950810','21877 Goodland Lane','M20 1QF','','07624604665',FALSE),
('James', 'Walker','Male','jgrant3@nasa.gov','rRU9M6gE','19921209','63 Bartelt Park','IP20 2NT','02249632976','07458350751',FALSE),
('Christina', 'Carpenter','Female','ehamilton4@reverbnation.com','nwFGmi28D8Q','19960522','982 Dakota Alley','GL12 8UU','01697740417','07006302433',TRUE),
('Justin', 'Hunter','Male','mcunningham5@tinyurl.com','uMRSCd4E','19930506','96 New Castle Road','AB15 6BS','','07085838302',FALSE),
('Diane', 'Knight','Female','kfrazier6@dropbox.com','6oM62CV','19921206','81296 Lerdahl Road','GU15 2HB','','07924239556',TRUE),
('Kenneth', 'Schmidt','Male','wperry7@earthlink.net','VRhKpJ5Gc','19930328','5 Clarendon Drive','HD3 3DW','01697738844','07736671689',FALSE),
('Stephanie', 'Banks','Female','pfreeman8@mail.ru','UgWhiDT','19930712','69 Rutledge Point','DN40 3JY','01346468986','07666668122',TRUE),
('Shirley', 'Moreno','Female','pkelley9@businessweek.com','oqbUXo2fsfOa','19920330','1 Burrows Park','05662999240','','07590528549',TRUE),
('Brenda', 'Lynch','Female','wvasqueza@reverbnation.com','YM62TThN','19920117','16083 Summit Pass','01410571058','','07585357063',FALSE),
('Jessica','Baker','Female','jvasquezc@etsy.com','Xq0O3ZTc','19970113','34796 American Ash Drive','S14 1AA','09826903102', '07010810365',TRUE),
('Peter', 'Pierce','Male','pperryb@altervista.org','H8vfFkqIfj6','19950129','724 Bluejay Circle','SN9 6EB','05001704349','07662424580',FALSE),
('Bobby', 'Collins','Male','jfergusond@nih..com','iSZoJAy','19940226','261 Meadow Valley Avenue','NG20 0QY','','07065683989',TRUE),
('Frank', 'Bradley','Male','esmithe@oakley.com','tU9mlcNgHPZg','19920725','23 Rutledge Court','GU21 5EU','01697712728','07624637843',FALSE),
('Rachel', 'Anderson','Female','creynoldsf@mapquest.com','OIP3kaw8DkS','19950802','6079 Eggendart Terrace','SE1P 4UP','05500825856','07829760096',TRUE),
('Justin', 'Sullivan','Male','dpierceg@irs.gov','e6qaWkXpb5','19940625','4919 Gale Center','LL62 5BD','','07624408328',TRUE),
('Joshua', 'Fowler','Male','rruizh@istockphoto.com','uU5e5XD','19961120','59 Rusk Drive','SW10 0YQ','03433324128','07603751985',FALSE),
('Anne', 'Bryant','Female','jlawsoni@google.cn','JfWk9amz0', '19950417', '30 Grim Lane','N13 6JE','08001111789','07624498591',TRUE),
('Joshua', 'Morrison','Male','kcarrj@businessinsider.com','y4kZef', '19910311', '8 Grover Alley','TA8 2RB','05659370963','07804992674',FALSE);
";

mysqli_query($conn, $sqluserdata) or die(mysqli_error($conn));


//Data for location table
$sqllocationdata =
"INSERT IGNORE INTO `location` (`name`,`type`) VALUES
('Portsmouth Univeristy Library','Univeristy Building'),
('Richmond Building','Univeristy Building'),
('Portland Building','Univeristy Building'),
('Liongate Building','Univeristy Building'),
('Buckenham Building','Univeristy Building'),
('Anglesea Building','Univeristy Building'),
('Mildam Building','Univeristy Building'),
('Burnaby Building','Univeristy Building'),
('Park Building','Univeristy Building'),
('James Watson','Halls of Residence'),
('Bateson','Halls of Residence'),
('Langstone','Halls of Residence'),
('Harry Law','Halls of Residence'),
('Rees','Halls of Residence'),
('Margaret Rule','Halls of Residence'),
('Fratton Train Station','Train Station'),
('Portsmouth and Southsea','Train Station'),
('Portsmouth Habour', 'Train Station')";


mysqli_query($conn, $sqllocationdata) or die(mysqli_error($conn));

//Data for flat table - 25 records to start, capacity so far is 130
$sqlflatdata =
"INSERT IGNORE INTO `flat` (`flat_id`,`halls_id`,`capacity`) VALUES
('1.0','1','6'),
('1.1','1','6'),
('1.2','1','6'),
('1.3','1','5'),
('1.4','2','4'),
('1.5','2','6'),
('1.6','2','5'),
('2.0','3','6'),
('2.1','3','6'),
('2.2','3','6'),
('2.3','3','6'),
('2.4','3','5'),
('2.5','4','5'),
('2.6','4','6'),
('3.0','4','6'),
('3.1','4','5'),
('3.2','5','5'),
('3.3','5','5'),
('3.4','5','4'),
('3.5','6','6'),
('3.6','6','6'),
('4.0','6','6'),
('4.1','7','5'),
('4.2','7','4'),
('4.3','7','5')";

mysqli_query($conn, $sqlflatdata) or die(mysqli_error($conn));

//Data for uni table
$sqlunidata =
"INSERT IGNORE INTO `uni` (`user_id`,`course`,`study`,`accom`, `flat_id`)
VALUES (5,1,3,'Halls','1.1'),
(2,14,2,'Halls','1.1'),
(20,13,3,'Halls','1.1'),
(8,23,1,'Private',NULL),
(19,10,3,'Halls','1.1'),
(16,3,3,'Private',NULL),
(12,21,3,'Halls','1.1'),
(13,28,1,'Halls','1.1'),
(9,8,3,'Halls','1.4'),
(15,20,2,'Private',NULL),
(4,22,2,'Halls','1.4'),
(10,18,1,'Halls','1.4'),
(14,17,2,'Halls','1.4'),
(6,9,2,'Private',NULL),
(3,13,1,'Private',NULL),
(11,29,3,'Halls','1.4'),
(18,2,3,'Halls','4.2'),
(17,16,1,'Halls','4.2'),
(1,8,2,'Halls','4.2'),
(7,19,1,'Halls','4.2')";

mysqli_query($conn, $sqlunidata) or die(mysqli_error($conn));

//Data for house table
$sqlhousedata =
"INSERT IGNORE INTO `house` (`user_id`,`group_id`) VALUES (3,1, 'House Group', 'Looking for a house'),
(6,2, 'Next Year House', 'Need to find a house for next year'),(8,2,'Next Year House', 'Need to find a house for next year'),
(15,1, 'House Group', 'Looking for a house'),(16,2,'Next Year House', 'Need to find a house for next year')";

mysqli_query($conn, $sqlhousedata) or die(mysqli_error($conn));

mysqli_close($conn);
?>
