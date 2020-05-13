$(document).ready(function(){
	$('.menu-item').on('click', function() {
		$('.menu-item').removeClass('active');
		$(this).addClass('active');
		
	});

	$('.menu-open').on('click', function() {
		$('.menu-responsive.hidden-lg').addClass('show-menu-responsive');
	});

	$('.menu-close').on('click', function() {
		$('.menu-responsive.hidden-lg').removeClass('show-menu-responsive');
	})
});