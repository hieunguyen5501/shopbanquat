$(document).ready(function () {
	$('.menu-item').on('click', function () {
		$('.menu-item').removeClass('active');
		$(this).addClass('active');

	});

	$('.menu-open').on('click', function () {
		console.log(1);
		$('.menu-responsive').addClass('show-menu-responsive');
	});

	$('.menu-close').on('click', function () {
		$('.menu-responsive').removeClass('show-menu-responsive');
	});
});