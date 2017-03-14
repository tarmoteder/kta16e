
<meta charset = "utf-8">

<script type="text/javascript" src="skript.js"></script>


<?php


require 'components.php';
require 'function.php';
$name = "Tarmo";

// üherealine kommentaar

/*
See on 
kommentaar
mitmel real
*/

// tagasi algusesse
home();
menu($menu_begin, $menu_arr,$menu_end);
echo "<div></div>";
//näitame praegust aega ja anname soovitusi

aeg();

// näited teksti kuvamise kohta
echo "$name esimene PHP's kirjutatud lause!<br>";
echo '<b>$name esimene PHPs kirjutatud lause!</b><br>';
echo "Nüüd vaatame täpitähti<br>";


GetVisitorIp();
counter();

?>