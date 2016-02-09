$(document).ready(function() {

	var resizedHeight = $('.video').width();
	resizedHeight = resizedHeight*(635/992);
	$('.video').css('height', resizedHeight);

	var resizedWidth = $('.video').width();
	resizedWidth = resizedWidth*(703/992);
	$('.video-footer-container').css('width', resizedWidth);

});

$(window).on('resize', function() {

	var resizedHeight = $('.video').width();
	resizedHeight = resizedHeight*(635/992);
	$('.video').css('height', resizedHeight);

	var resizedWidth = $('.video').width();
	resizedWidth = resizedWidth*(703/992);
	$('.video-footer-container').css('width', resizedWidth);

});