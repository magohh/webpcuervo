var $=jQuery.noConflict();

(function($){
   "use strict";
   $(function(){

    $(window).ready(function(){

      minimalForms();
      initMap();
      $('#theForm').parsley();


    });

   });
})(jQuery);


function minimalForms(){

  var theForm = document.getElementById( 'theForm' );

  new stepsForm( theForm, {
    onSubmit : function( form ) {
      // hide form
      classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

      
      //form.submit()
      /*
      or
      AJAX request (maybe show loading indicator while we don't have an answer..)
      */
      var messageEl = theForm.querySelector( '.final-message' );
      var URLopenModal = window.location.href.substr(-18);
      console.log(URLopenModal);
      $.post($("#ruta").val()+'sendmail.php', {q1: $("#q1").val(), q2: $("#q2").val(), q3: $("#q3").val(), q4: $("#q4").val() }, 
          function(data) {
            
            
            if(data == "OK") {
              if ( URLopenModal == '?lang=en#openModal'){
                messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
              } else {
                messageEl.innerHTML = '¡Gracias! Nos pondremos en contacto.';
              }
            } 
            else {
              messageEl.innerHTML = 'Ocurrio un error, por favor intentalo de nuevo.';
            }
        })
        .always(function(data){ 
           console.log('Always -> ['+data+']');
           classie.addClass( messageEl, 'show' );
           
        })
        .fail(function(xhr, status, error) {
            console.log('FAIL');
            console.log(xhr);
            console.log(status);
            console.log(error);
        });

      // let's just simulate something...
      
      
      

    }
  } );






}


function initMap() {
var locations = [
      ['CANADA', 46.8143673, -71.2252739, 2],
      ['MEXICO', 19.4016653, -99.1743618, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: new google.maps.LatLng(34.3890764,-89.5094677),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
var image = {
    url: 'http://pcuervo.com/test/wp-content/uploads/2016/09/marker-2.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(100, 100),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(32, 32)
  };
    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

