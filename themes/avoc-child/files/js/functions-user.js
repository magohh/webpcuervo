var $=jQuery.noConflict();

(function($){
   "use strict";
   $(function(){

    $(window).ready(function(){
 
      minimalForms();
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
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgb(255,255,255)');
       } else {
          $('.nav').css('background-color', '#00aabb');
       }
   });
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('a.font-color').css('color', 'black');
       } else {
          $('a.font-color').css('color', 'white');
       }
   });
});