
//меню бургер
$('.burger-menu').click(function (event) {
	$('.menu, ._opacity').toggleClass('_active')
	$('body').toggleClass('_lock')
})
// Плавная прокрутка к якорям
$(document).ready(function () {
	$(".menu__body").on("click", "a", function (event) {
		// закрытие бургер при клике на ссылку
		$('.menu').removeClass('_active')
		$('body').removeClass('_lock')
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top}, 1500);
	});
});
$(document).ready(function () {
	$(".header__bottom").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - 50}, 1500);
	});
});

$(window).resize(function () {
	if (document.documentElement.clientWidth > 425) {
		$('.menu, ._opacity').removeClass('_active')
		$('body').removeClass('_lock')
	}
});