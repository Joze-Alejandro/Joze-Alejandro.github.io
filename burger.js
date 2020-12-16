$(document).ready(function() {
	$('.base__menu-icon').click(function() {
		$('.base__menu-icon,.base__menu,.base,.base__logo').toggleClass('active');
		$('body').toggleClass('lock');
	});
});