//навигация
  $('document').ready(function() {
    let section = $("#slider-container");// убрать-проверить 
	
    $('#slider-container').append('<div id=arrows-wrapper class=" "/>');
	//влево. HTML сущности 
	$('#arrows-wrapper').append('<p>&#10094</p>')  
	$('p').addClass('slider-arrow').addClass('center_y');
	$('p').attr('id', 'arrow-prev');
	//вправо	
	$('#arrows-wrapper').append('<p>&#10095</p>')
	$('p:last').addClass('slider-arrow').addClass('center_y');
	$('p:last').attr('id', 'arrow-next');
	//dots навигация	   
	$('#slider-container').append('<div id=dots-wrapper class=center_x/>');
	//слайды=ВСЕ картинки
	let slides = $('.slide'); 
	for ( let i = 1; i <= slides.length; i++ ){
	$('.center_x').append('<div class=dot-navigation></div>');
	$('.dot-navigation').attr('data-index', i);
	};
	
	let INDEX = 0;

function showSlides(index) {
    // извлекаем слайды и навигационные точки
    let dots = $('.dot-navigation');

    // // проверка диапазона индекса
    if (index > slides.length - 1) INDEX = 0;

    if (index < 0) INDEX = slides.length - 1;

    slides.css('display', 'none').eq(INDEX).css('display', 'block');
    dots.removeClass('active-dot').eq(INDEX).addClass('active-dot');
};

	showSlides(INDEX);

	// событие при нажатии на левую стрелку
	$("#arrow-prev").on('click', function () {
    showSlides(--INDEX);
});

	// событие при нажатии на правую стрелку
	$("#arrow-next").on('click', function () {
    showSlides(++INDEX);
});

	$('.dot-navigation').on('click', function () {
    showSlides( $(this).attr('data-index') )
});

// автоматическое слайд-шоу
	setInterval(function () {
    showSlides(--INDEX);
}, 10000);
  });
	/*
let INDEX = 0; // реальный индекс INDEX //глобальный-желаемый индекс index
function showSlides(index) {
    // извлекаем слайды и навигационные точки
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-navigation');
    // проверка диапазона индекса
    if (index >= slides.length) INDEX = 0;
    if (index < 0) INDEX = slides.length - 1; //3-1=2 нужно отнять 1 и итерацию начать с 0

    // скрытие слайдов и удаление активной точки в навигации-все скрыты
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
		dots[i].classList.remove("active-dot");
    }
    // показ активного слайда и активация точки навигации
    slides[INDEX].style.display = "block";
		dots[INDEX].classList.add("active-dot");
};
	showSlides(INDEX);
// событие при нажатии на левую стрелку
document.querySelector("#arrow-prev").addEventListener('click', function () {
    showSlides(--INDEX);
});
// событие при нажатии на правую стрелку
document.querySelector("#arrow-next").addEventListener('click', function () {
    showSlides(++INDEX);
});
// обработка событий для точек
for (let elem of document.querySelectorAll('.dot-navigation')) {
    elem.addEventListener('click', function (event) {
        let dotIndex = event.target.getAttribute('data-index');
    // вызов функции для прокрутки слайдера
        showSlides(INDEX = dotIndex - 1)
    });
};
// автоматическое слайд-шоу
setInterval(function () {
    showSlides(++INDEX); //по убывающей--INDEX. по нарастающей++INDEX
}, 10000);*/