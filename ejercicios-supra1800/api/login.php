<?php 

require 'conexion.php';

$codigo = mysqli_real_escape_string($mysqli,$_POST['codigo']);
$name = mysqli_real_escape_string($mysqli,$_POST['name']);
$tipo = mysqli_real_escape_string($mysqli,$_POST['tipo']);

if(strtolower($codigo) != 'ibero.2020'){
    $res = array('result'=>false,'message'=>'Codigo inválido');
    die(json_encode($res));
}

$insert = mysqli_query($mysqli,"INSERT INTO alumnos (name, fecha_inicio, tipo) VALUES ('$name', now(), '$tipo');");

if($insert){
    $idUser = mysqli_insert_id($mysqli);
    $res = array('result'=>true,'idUser'=>$idUser,'name'=>$name);
}else{
    $res = array('result'=>false,'message'=>'Ha ocurrido un error, conctactese con soporte@ajedrezlatino.com');
}

mysqli_close($mysqli);
echo json_encode($res);

?>