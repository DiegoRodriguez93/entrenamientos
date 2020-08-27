<?php 

require 'conexion.php';

$idUser         = mysqli_real_escape_string($mysqli,$_POST['idUser']);
$segundos       = mysqli_real_escape_string($mysqli,$_POST['segundos']);
$nroejercicio    = mysqli_real_escape_string($mysqli,$_POST['nroejercicio']);

$time = gmdate("H:i:s", $segundos); //convierte los segundos a time

$insert = mysqli_query($mysqli, "INSERT INTO ejercicios (idUser, time, nroejercicio) VALUES ('$idUser', '$time', '$nroejercicio')");

if($insert){
    $res = array('result'=>true);
}else{
    $res = array('result'=>false);
}

mysqli_close($mysqli);
echo json_encode($res);