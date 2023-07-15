$(document).ready(function () {
	//меню бургер
	$('.burger-menu').click(function (event) {
		$('.menu, ._opacity').toggleClass('_active');
		$('body').toggleClass('_lock');
	});

	// Плавная прокрутка к якорям
	$(".menu__body").on("click", "a", function (event) {
		// закрытие бургер при клике на ссылку
		$('.menu').removeClass('_active');
		$('body').removeClass('_lock');
		event.preventDefault();
		let id = $(this).attr('href');
		let top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	$(".header__bottom").on("click", "a", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top + 100 }, 1500);
	});
});

$(window).resize(function () {
	if (document.documentElement.clientWidth > 425) {
		$('.menu, ._opacity').removeClass('_active');
		$('body').removeClass('_lock');
	};
});