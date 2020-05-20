function changeSrc(e) {
	$('.gallery span img').removeClass('active');
	e.classList.add('active');
	$('.avatar-pro img').attr('src', e.src);
}
