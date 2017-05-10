<?php

$email = $_POST["email"];

// var_dump($_POST); POST sisu vaatamine

// echo $email; POST["email"]

if (filter_var($email, FILTER_VALIDATE_EMAIL)){
	echo "<p>Kõik on hästi ".$email." on e-posti aadress</p>";
} else { echo "<p>See ei ole miski aadress</p>";
	sleep(5);
//	header("Location: http://localhost/kta16e/ajax.php");

}


?>