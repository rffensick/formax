$(function() {

	// var hf = function() {
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }

	// $(window).bind('load resize', hf)

	$('header#header .main-nav nav ul li a').click(function() {
		$('header#header .main-nav nav ul li a').parents('header#header .main-nav nav ul li').removeClass('active')
		$(this).parents('header#header .main-nav nav ul li').addClass('active')
	})

});
