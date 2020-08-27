var audio = new Audio('audio/wrong.wav');
var audioMove = new Audio('audio/move1.mp3');
var audioMovePC = new Audio('audio/move3.mp3');
var audioWIN = new Audio('audio/win.wav');

var jugadaActual = 0;

var position = positions.ejercicios[location.search.replace("?", "")].jugadas[jugadaActual].value;

var cfg = {
draggable: true,
moveSpeed: 'slow',
orientation: positions.ejercicios[location.search.replace("?", "")].orientation ,
position: position,
onChange: onChange };

var board = ChessBoard('board', cfg);
