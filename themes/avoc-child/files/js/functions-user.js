var $=jQuery.noConflict();

(function($){
   "use strict";
   $(function(){

    $(window).ready(function(){
      $('form').parsley();
      minimalForms();
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