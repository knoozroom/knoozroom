

$( document ).ready(function() {
     $("#kr-menu").load("menu.html"); 
 	  console.log("we love people who inspect us, kinda kinky - get in touch to join the team ");

});



$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
 
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}


 $(window).scroll(function() {

     if ($(document).scrollTop() > 50) {
         $('nav').addClass('shrink');
         $('#logo').addClass('shrink-img');
     } else {
         $('nav').removeClass('shrink');
         $('#logo').removeClass('shrink-img');
     }

  });    
