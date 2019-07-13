$(function() {
	// wow js
	new WOW().init();



	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	  
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});

	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 700) {
	    // $('.arrow').css('display', 'block');
	    $('.arrow').show('slow', function() {
	      //
	    });
	  }
	  else {
	    // $('.arrow').css('display', 'none');
	    $('.arrow').hide('slow', function() {
	      //
	    });
	  }
	}



	// calc example
	var procentAll = 1.10;
	var procent = 1;
	var week = 2;
	var days = 10; // 14
	var currentSymbol = '$';
	var amount = 0;
	var min = 10;
	var max = 100;

	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
	var date = curr_date + "." + curr_month + "." + curr_year;
	$('.example__right .date span').text(date);

	function process() {
		// input
		// $('.example__right input').val(1);
		// Minimum amount
		$('.example__right .min span').text(min+' '+currentSymbol);
		// Maximum amount
		$('.example__right .max span').text(max+' '+currentSymbol);
		// Period
		$('.example__right .period span').text(week+' weeks');

		// End date
		d = new Date();
		d.setDate(d.getDate() + days);
		curr_date = d.getDate();
		curr_month = d.getMonth() + 1;
		curr_year = d.getFullYear();
		date = curr_date + "." + curr_month + "." + curr_year;
		$('.example__right .date span').text(date);
		
		// Total profit
		$('.example__right h4').text((amount*procentAll).toFixed(2)+' '+currentSymbol);
	}

	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		if(nextSlide == 0) {
			procentAll = 1.1;
			procent = 1;
			week = 2;
			days = 10; //14

			min = 10;
			max = 100;	
		}
		if(nextSlide == 1) {
			procentAll = 1.57;
			procent = 2.88;
			week = 8;
			days = 40; // 56

			min = 101;
			max = 10000;
		}

		process();
	});

	$('.example__left-top-right-buttons button').on('click', function(e) {
		currentSymbol = $(this).attr('data-current');

		$('.example__left-top-right-buttons button').css({"border":"2px solid #fff", "background":"transparent"});
		$(this).css({"border":"2px solid #3494e6", "background":"linear-gradient(to right, #3494e6, #ec6ead)"});

		process();
	});

	$('.example__right input').on('input', function(e) {
		amount = Math.abs(Number($(this).val()));

		process();
	});

	// for test only
	$('.js-example-open-deposit').on('click', function(e) {
		// e.preventDefault();

		// alert(currentSymbol+', '+procent+', '+amount);
	});












	// popup
	// ставим на кнопку которая вызывает данный popup
	// $('.js-popup').on('click', function(e) {
	//   e.preventDefault();

	//   $('.popup').slideDown();
	//   $('.popup-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-overlay').on('click', function(e) {
	// 		$('.popup').slideUp('300', function() {
				
	// 		});
	// 		$('.popup-overlay').css('display', 'none');
	//   });
	// });



	// email
	// $('.main-form').submit(function(event) {
	// 	event.preventDefault();
		
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mailer/smart.php",	// url: "smart.php", даже если js и php не в одной папке!
	// 		data: $(this).serialize()
	// 	}).done(function(data) {
	// 		$(this).find("input").val("");
			
	// 		window.location.href = "../mailer/thanks.html";
			
	// 		$("form").trigger("reset");
			
	// 		$('.popup').slideUp();
	// 		$('.popup-overlay').css('display', 'none');
	// 	});
		
	// 	return false;
	// });
});