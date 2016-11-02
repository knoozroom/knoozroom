$( document ).ready(function() {
  document.getElementById("fence").width = document.body.offsetWidth;
    document.getElementById("drawing-borders").width = document.body.offsetWidth;
 

});

 $(window).resize(function() {
     document.getElementById("fence").width = document.body.offsetWidth;
     document.getElementById("drawing-borders").width = document.body.offsetWidth;
 });
 
 

var $easyzoom = $('.easyzoom').easyZoom();

        // Get the instance API
        var api = $easyzoom.data('easyZoom');
        
    $(window).load(function() {
                $('#maps-over').imageReveal({
                    barWidth: 15,
                    touchBarWidth: 40,
                    paddingLeft: 0,
                    paddingRight: 0,
                    startPosition: 0.10,
                    showCaption: true,
                    captionChange: 0.5,
                    captionFade: 1000,
                    linkCaption: true,
                    width: 500,
                    height: 500
                });

                
            });
    

function ignorePopups(markers) {
  var clean = [];
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].showTooltip) clean.push(markers[i]);
  }
  return clean;
}
// Create map
mapbox.auto('mapcycling', 'knoozroom.map-vsqx5pza', function(map, tiledata) {
  var i = 0;
  function loop() {
    window.setTimeout(function() {
      var markers = ignorePopups(tiledata.markers.markers());
      if (++i > markers.length - 1) i = 0;
      map.center(markers[i].location, true);
      markers[i].showTooltip();
      loop();
    }, 4000);
  }
  loop();
});
         

