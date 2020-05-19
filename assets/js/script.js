$(document).ready(function () {
	
	$('.menu-item').on('click', function () {
		$('.menu-item').removeClass('active');
		$(this).addClass('active');

	});

	$('.menu-open').on('click', function () {
		$('.menu-responsive').addClass('show-menu-responsive');
	});

	$('.menu-close').on('click', function () {
		$('.menu-responsive').removeClass('show-menu-responsive');
	});
});

function changeSrc(e) {
	$('.gallery span img').removeClass('active');
	e.classList.add('active');
	$('.avatar-pro img').attr('src', e.src);
}
