var $=jQuery.noConflict();

(function($){
   "use strict";
   $(function(){

    $(window).ready(function(){

      minimalForms();
      fontColor();
      initMap();
      
      //$('form').parsley();
    });

   });
})(jQuery);

function minimalForms(){

  var theForm = document.getElementById( 'theForm' );

  new stepsForm( theForm, {
    onSubmit : function( form ) {
      // hide form
      classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

      /*
      form.submit()
      or
      AJAX request (maybe show loading indicator while we don't have an answer..)
      */

      // let's just simulate something...
      var messageEl = theForm.querySelector( '.final-message' );
      var URLopenModal = window.location.href.substr(-18);
      console.log(URLopenModal)
      if ( URLopenModal == '?lang=en#openModal'){
        messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
      } else {
        messageEl.innerHTML = 'Gracias!, Nos pondremos en contacto';
      }
      
      classie.addClass( messageEl, 'show' );

      /*var messageEl2 = theForm.querySelector( '.final-message-2' );
      messageEl2.innerHTML = 'Gracias\'ll be in touch.';
      classie.addClass( messageEl2, 'show' );*/
    }
  } );






}
function fontColor(){
  if( $('li').hasClass('menu-item') ){
    $("li.menu-item a").addClass('font-color');
  }
  
}
  

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();



 
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgb(255,255,255)');
          $('.nav').css('height', '99px');
          $('a.font-color').css('color', 'black');
          $('#light-logo').addClass('opacity--1');
          $('#dark-logo').addClass('opacity--0');

       } else {
          $('.nav').css('background-color', '#00aabb');
          $('.nav').css('height', '120px');
          $('a.font-color').css('color', 'white');
          $('#light-logo').removeClass('opacity--1');
          $('#dark-logo').removeClass('opacity--0');
       }
   });
});

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

