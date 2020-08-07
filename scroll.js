$(window).on('scroll', function() {
  var $nav = $('.base'),
    scroll = $(this).scrollTop();

  if (scroll >= 100) {
    $nav.addClass('base_scroll');
  } else {
    $nav.removeClass('base_scroll');
  }
});

button_left.onclick = function() {
	alert( 'Вот так это работает!' );
};