$('.down-arrow').on('click', function() {

    //scroll to next section
    // var body = $("html, body");
    // var position = $("section.intro-hex").offset().top;
    // body.stop().animate({scrollTop:position}, '500', 'swing');
    $.scrollify.move("#intro");

});

$('nav').on('click', 'a', function(event) {

    //scroll to next section
    var check = $(event.target).closest('a').hasClass('social');
    if (check == false) {
        event.preventDefault();
        $.scrollify.disable();
        setTimeout(reEnable, 750);
        var s = $(event.target).attr('data-scroll');
        var position = $("."+s).offset().top;
        var body = $("html, body");
        window.location.hash = "";
        body.stop().animate({scrollTop:position}, '500', 'swing');
    }
   

});

function reEnable() {
    console.log('wut');
    $.scrollify.enable();
}

var myPlayer;

videojs("video").ready(function(){
  myPlayer = this;

  // var _video = document.getElementById('video');
  // _video.addEventListener('playing', videoPlaying, false);

});


// function videoPlaying(e) {
//     console.log('playing');    
// };

$('#video_html5_api').on('play', function (e) {
    $('.play-pause').css({'background-position-y': '-24px'});
});

$('#video_html5_api').on('pause', function (e) {
    $('.play-pause').css({'background-position-y': '0px'});
});

$('.play-pause').on('click', function() {

    if (myPlayer.paused() == false) {
        myPlayer.pause();
    } else if (myPlayer.paused() == true) {
        myPlayer.play();
    }

});

$('.sound').on('click', function() {

    if (myPlayer.volume() == 1) {
        myPlayer.volume(0);
        $('.sound').css({'background-position-y': '-24px'});
    } else if (myPlayer.volume() == 0) {
        myPlayer.volume(1);
        $('.sound').css({'background-position-y': '0px'});
    }

});

function isElementInViewport (el) {

    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

$(window).on('scroll', function(){

    var currentPos = $(window).scrollTop();

    if (isElementInViewport($('section.intro-hex'))) {
        $('.intro-hex .hex').addClass('fadein');
    } else if (isElementInViewport($('section.middle-hex'))) {
        $('.middle-hex .hex').addClass('fadein');
    } else if (isElementInViewport($('section.bottom-hex'))) {
        $('.bottom-hex .hex').addClass('fadein');
    }

});

$(document).on('ready', function(){

    $('#map').css({'pointer-events':'none'});

    $('.map').on('click', function() {

        $('#map').css({'pointer-events':'auto'});

    });

    var windowWidth = $(window).width();
    var calculatedHeight = windowWidth/(16/9);
    console.log(calculatedHeight);
    $('section.video').attr('style', 'height:'+calculatedHeight+'px !important');

    $.scrollify({
        section : ".scrollify",
        sectionName : "section-name",
        standardScrollElements : ".about, .info, .contact-us"
    });

});

$(window).on('resize', function() {
    var windowWidth = $(window).width();
    var calculatedHeight = windowWidth/(16/9);
    console.log(calculatedHeight);
    $('section.video').attr('style', 'height:'+calculatedHeight+'px !important');
});

google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(43.7853341, -79.4838277),
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.7853341, -79.4838277),
        map: map,
        icon: 'img/1x/map-marker.png'
    });
}