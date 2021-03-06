(function($) {
  $.fn.autosubmit = function() {
    this.submit(function(event) {
      event.preventDefault();
      var form = $(this);
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize()
      }).done(function(data) {
        // alert('figure out success message / clear fields');
        $('#contact-form label.form-success').css({'display': 'block'});
        $('#contact-form input[type=text]').val('');
        $('#contact-form input[type=email]').val('');
        $('#contact-form textarea').val('');
        $('#contact-form .loader').css({'display' : 'none'});
        // Optionally alert the user of success here...
      }).fail(function(data) {
        // console.log(data)
        alert('Oops, something went wrong with the form submission. Please try again.');
        $('#contact-form .loader').hide();
        // Optionally alert the user of an error here...
      });
    });
    return this;
  }
})(jQuery)

var form = $( "#contact-form" );
form.validate();
$( "input[type=submit]" ).click(function() {
   if (form.valid() == true) {
        $('#contact-form').autosubmit();
        $('#contact-form .loader').css({'display' : 'inline-block'});
   }
});

$('.mobile button').on('click', function() {

    $('.mobile .menu').css({'display':'block'});
    $('body,html').css({'overflow':'hidden'});

});

$('nav.mobile .menu ul li a').on('click', function() {
     $('.mobile .menu').css({'display':'none'});
    $('body,html').css({'overflow':'auto'});
});

$('.mobile .menu .close').on('click', function() {

    $('.mobile .menu').css({'display':'none'});
    $('body,html').css({'overflow':'auto'});

});

$('.down-arrow').on('click', function() {

    //scroll to next section
    var body = $("html, body");
    var position = $("section.intro-hex").offset().top;
    body.stop().animate({scrollTop:position}, '500', 'swing');

});

$('a[data-quick]').on('click', function(event) {

    event.preventDefault();
    console.log($(this).attr('data-quick'));
    var scrollHere = $(this).attr('data-quick');
    var body = $("html, body");
    var position = $("."+scrollHere).offset().top-80;
    body.stop().animate({scrollTop:position}, '500', 'swing');

});

var myPlayer;

if ($('.video').length >= 1) {
    videojs("video").ready(function(){
      myPlayer = this;
    });
}



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

    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //     el = el[0];
    // }

    // var rect = el.getBoundingClientRect();

    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    // );

    var $elem = $(el);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

}

$(window).on('scroll touchmove touchstart touchend ontouchmove', function(){

    $('section.hexes').each(function() {
        if (isElementInViewport(this)) {
            $(this).find('.hex').addClass('fadein');
        }
    });

    var position = $(window).scrollTop();
    var threshold = $('.intro-hex').offset().top;
    
    $('nav.desktop').addClass('sticky');

    if (position >= threshold) {
        // $('nav.mobile').addClass('sticky');
        // $('body').addClass('sticky');
    } else if (position <= 0) {
        $('nav.desktop').removeClass('sticky');
        // $('nav.mobile').removeClass('sticky');
        // $('body').removeClass('sticky');
    }

    // console.log(position);
    // console.log(threshold);

});

// var jump=function(e)
// {
//    if (e){
//        e.preventDefault();
//        var target = $(this).attr("href");
//    }else{
//        var target = location.hash;
//    }

//    $('html,body').animate(
//    {
//        scrollTop: $(target).offset().top
//    },500,function()
//    {
//        location.hash = target;
//    });

// }

// $('html, body').hide();

$(document).on('ready', function(){

    $('.intro-hex').find('.hex').addClass('fadein');

    $('#map').css({'pointer-events':'none'});

    $('.map').on('click', function() {

        $('#map').css({'pointer-events':'auto'});

    });

    var windowWidth = $(window).width();
    var calculatedHeight = windowWidth/(16/9);
    // console.log(calculatedHeight);
    $('section.video').attr('style', 'height:'+calculatedHeight+'px !important');

    var md = new MobileDetect(window.navigator.userAgent);

    if (md.phone() != null) {
        $('#video').empty();
    }

});

$(window).on('resize', function() {
    var windowWidth = $(window).width();
    var calculatedHeight = windowWidth/(16/9);
    // console.log(calculatedHeight);
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

    var contentString = '<div id="content" style="padding-top:6px;">'+
          '<p style="margin:0; font-size: 0.88rem; text-align: center"><em>A:</em> 1300 Alness Street, Unit 3<br>Vaughan, ON L4K 2W6</p>'+
          '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300,
      });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.785305, -79.481908),
        // position: new google.maps.LatLng(43.785729, -79.4838277),
        map: map,
        title: 'AT Bubble Soccer',
        icon: 'img/1x/map-marker.png'
    });

    infowindow.open(map, marker);

}