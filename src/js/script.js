// $(document).ready(function() {

// 	var resizedHeight = $('.video').width();
// 	resizedHeight = resizedHeight*(635/992);
// 	$('.video').css('height', resizedHeight);

// 	var resizedWidth = $('.video').width();
// 	resizedWidth = resizedWidth*(703/992);
// 	$('.video-footer-container').css('width', resizedWidth);

// });

// $(window).on('resize', function() {

// 	var resizedHeight = $('.video').width();
// 	resizedHeight = resizedHeight*(635/992);
// 	$('.video').css('height', resizedHeight);

// 	var resizedWidth = $('.video').width();
// 	resizedWidth = resizedWidth*(703/992);
// 	$('.video-footer-container').css('width', resizedWidth);

// });

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
        title: 'Snazzy!'
    });
}