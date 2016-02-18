 var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    height: '100%',
    width: '100%',
    videoId: 'RpHZPJJcyHg',
    playerVars: {
        'rel': 0,
        'showinfo': 0,
        'modestbranding': 1,
        'controls': 0,
        'fs': 0,
        'autoplay': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {

}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var stopped = false;
function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        stopped = false;  
        $('.play-pause').css({'background-position-y': '-24px'});
      } else {      
        stopped = true;
        $('.play-pause').css({'background-position-y': '0px'});
      }
}
function stopVideo() {
  player.stopVideo();
}

$('.down-arrow').on('click', function() {

    //scroll to next section

});

$('.play-pause').on('click', function() {

    if (stopped == false) {
        player.pauseVideo();
    } else if (stopped == true) {
        player.playVideo();
    }

});

$('.sound').on('click', function() {

    if (!player.isMuted()) {
        player.mute();
        $('.sound').css({'background-position-y': '-24px'});
    } else if (player.isMuted()) {
        player.unMute();
        $('.sound').css({'background-position-y': '0px'});
    }

});


var buffer = 300;

$(window).on('scroll', function(){

    var currentPos = $(window).scrollTop();
    console.log(currentPos);

    if (currentPos >= ($('section.intro-hex').offset().top - buffer)) {
        $('.intro-hex .hex').addClass('fadein');
    } 
    if (currentPos >= ($('section.middle-hex').offset().top - buffer)) {
        $('.middle-hex .hex').addClass('fadein');
    }
    if (currentPos >= ($('section.bottom-hex').offset().top - buffer)) {
        $('.bottom-hex .hex').addClass('fadein');
    }


});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(43.7853341, -79.4838277),

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.7853341, -79.4838277),
        map: map,
        icon: 'img/1x/map-marker.png'
    });
}