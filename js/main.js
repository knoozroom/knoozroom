 $("#kr-nav  a").on("click", function() {
     $("#kr-nav").find(".active").removeClass("active");
     $(this).parent().addClass("active");

 });

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

       $('html, body').stop().animate({
     'scrollTop': $target.offset().top
}, 900, 'swing');
       
    });
});

//  $("<div>Contributors</div>").css({
//     position: "absolute",
//     width: "90%",
//     height: "20%",
//     top: "40%", 
//     left: "7.3%",
//     'text-align':'center',
//     'vertical-align': 'middle',
//     background: "#5B486F"
// }).appendTo($("#contributors-overlay").css("position", "relative"));


 $(function() {
     $('#ef-contact-form').submit(function(e) {
         e.preventDefault();
         var form = $(this);
         var post_url = form.attr('action');
         var post_data = form.serialize();

         $.ajax({
             type: 'POST',
             url: post_url,
             data: post_data,
             success: function(msg) {
                 $('#note').html(msg).fadeIn();
             }
         });
     });
 });



 $(document).ready(function() {
 

     document.getElementById("promo-video").width = document.body.offsetWidth;

     var sponsorsCarousel = $(".ef-sponsors-carousel");


     if (sponsorsCarousel.length) {
         sponsorsCarousel.owlCarousel({
             items: 5, // 4 items between X - 1681px
             itemsDesktop: [1680, 6], // 3 items between 1680px and 1281px
             itemsDesktopSmall: [1280, 6], // 2 items betweem 1280x and 501px
             itemsMobile: [500, 2], // 1 item
             navigation: true,
             pagination: false,
             navigationText: ["", ""],
             slideSpeed: 200,
             autoPlay: true,
             stopOnHover: true
         });
     }

 });


 $(window).resize(function() {
     document.getElementById("promo-video").width = document.body.offsetWidth;
 });


 $('#promo-poster').click(function() {
     $("#promo-poster").hide();
     $("#promo-video").show();
     $("#promo-play-pause").fadeTo("slow", 0.3);
     document.getElementById('promo-video').play();
 });


 $('#promo-play-pause').click(function() {

     var video = document.getElementById('promo-video');

     if ($("#promo-play-pause").hasClass("inactive")) {
         video.play();
         $("#promo-play-pause").removeClass("inactive");
         $("#promo-play-pause").addClass("active");
         $("#promo-play-pause").attr("src", 'images/pause.png');
     } else {
         video.pause();
         $("#promo-play-pause").removeClass("active");
         $("#promo-play-pause").addClass("inactive");
         $("#promo-play-pause").attr("src", 'images/play.png');
     }




 });



 $("#promo-video").bind('ended', function() {
     $("#promo-play-pause").attr("src", 'images/play.png');
     $("#promo-play-pause").addClass("active");
     $("#promo-video").hide();
     $("#promo-play-pause").hide();
     $("#promo-poster").show();

 });

     $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
     