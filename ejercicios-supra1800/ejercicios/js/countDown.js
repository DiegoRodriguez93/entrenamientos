  
function add90Minutes() { 

    if(localStorage.getItem('countDownDate') == null){
        countDownDateInit = new Date();
        countDownDateInit.setMinutes( countDownDateInit.getMinutes() + 90 ); 
        var countDownDate = countDownDateInit.getTime();
        localStorage.setItem('countDownDate',countDownDate);
    }else{
        var countDownDate = localStorage.getItem('countDownDate');
    }


    //var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Armamos un interval de cada un segundo
    interval = setInterval(function() {

      // Tomamos la fecha de hoy
      var now = new Date().getTime();

      // Buscamos la distancia entre la fecha de ahora y la fecha de ahora + 90minutos
      distance = countDownDate - now;

      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Mostramos el timer en el div con el id = TiempoDeExpiracionDeCita
      document.getElementById("TimpodeExpiracion").innerHTML = '<i class="fas fa-stopwatch"></i> ' + hours + "h " 
      + minutes + "m " + seconds + "s ";

      if(new Date(distance).getMinutes() < 5 && hours == 0){
    
        document.getElementById("TimpodeExpiracion").style.color = 'red';

  
          }

      // Si termina el tiempo mostramos un mensaje y a los segundos lo sacamos de la sala
      if (distance < 0) {
        clearInterval(interval);
        
        $.ajax({
          type: "POST",
          url: "../api/registrarHoraFin.php",
          data: {idUser:localStorage.getItem("idUser")},
          dataType: "JSON",
          success: function (response) {
              
          }
      });
        document.getElementById("TimpodeExpiracion").innerHTML = "TIEMPO FINALIZADO";
        setTimeout( () => {location.replace('../index.html');},4000 ) // A LOS 3 SEG LO RAJO
      }
    }, 1000);

 }

   
function contadorDeSegundos() { 

    setInterval( () => { 

        if(isNaN(localStorage.getItem('contadorDeSegundos'))){
            localStorage.setItem('contadorDeSegundos',0);
        }

        $segundos = localStorage.getItem('contadorDeSegundos') == null ? 0 : parseInt(localStorage.getItem('contadorDeSegundos'));

        localStorage.setItem('contadorDeSegundos', (parseInt($segundos) + 1) );

     },1000);

 }