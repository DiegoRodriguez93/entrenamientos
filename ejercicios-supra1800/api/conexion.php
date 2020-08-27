<?php 

$host = '';
$user = '';
$pass = '';
$db =   '';
$mysqli = new mysqli($host,$user,$pass,$db) or die($mysqli->error);

date_default_timezone_set ('America/Argentina/Buenos_Aires');