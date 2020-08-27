<?php 

require 'conexion.php';

$idUser         = mysqli_real_escape_string($mysqli,$_POST['idUser']);

$update = mysqli_query($mysqli,"UPDATE alumnos SET fecha_fin = now() WHERE id = '$idUser' ");

if($update){
    $res = array('result'=>true);
}else{
    $res = array('result'=>false);
}

mysqli_close($mysqli);
echo json_encode($res);