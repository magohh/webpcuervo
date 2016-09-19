var $=jQuery.noConflict();

(function($){
   "use strict";
   $(function(){

    $(window).ready(function(){

      minimalForms();
      fontColor();
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
      messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
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
          $('a.font-color').css('color', 'black');
          $('#light-logo').addClass('opacity--1');
          $('#dark-logo').addClass('opacity--0');

       } else {
          $('.nav').css('background-color', '#00aabb');
          $('a.font-color').css('color', 'white');
          $('#light-logo').removeClass('opacity--1');
          $('#dark-logo').removeClass('opacity--0');
       }
   });
});

