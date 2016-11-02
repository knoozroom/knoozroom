$(document).ready(function() {
    document.getElementById("salon").width = document.body.offsetWidth;
    document.getElementById("motorcycleman").width = document.body.offsetWidth;
    new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
});

$(window).resize(function() {
    document.getElementById("salon").width = document.body.offsetWidth;
    document.getElementById("motorcycleman").width = document.body.offsetWidth;
});

  