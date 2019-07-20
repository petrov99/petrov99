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

		$('.example__right input').attr('min', min);
		$('.example__right input').attr('max', max);

		process();
	});

	$('.example__left-top-right-buttons button').on('click', function(e) {
		currentSymbol = $(this).attr('data-current');

		$('.example__left-top-right-buttons button').css({"border":"2px solid #fff", "background":"transparent"});
		$(this).css({"border":"2px solid transparent", "background":"#15c39a"});

		process();
	});

	$('.example__right input').on('input', function(e) {
		amount = Math.abs(Number($(this).val()));
		
		$(this).attr('min', min);
		$(this).attr('max', max);

		process();
	});

	$('.example__right input').on('blur', function(e) {
		amount = Math.abs(Number($(this).val()));

		if(week == 2) {
			if(amount < 10) { amount = 10; $(this).val(amount); }
			if(amount > 100) { amount = 100;  $(this).val(amount); }
		}
		if(week == 8) {
			if(amount < 101) { amount = 101;  $(this).val(amount); }
			if(amount > 10000) { amount = 10000;  $(this).val(amount); }
		}

		process();
	});



	// for test only
	$('.js-example-open-deposit').on('click', function(e) {
		// e.preventDefault();

		// alert(currentSymbol+', '+procent+', '+amount);
	});












	// login
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// sing-up
	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup2').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// forgot password
	$('.js-popup3').on('click', function(e) {
	  e.preventDefault();

	  $('.popup3').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup3').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// forgot password email
	$('.js-popup4').on('click', function(e) {
	  e.preventDefault();

	  $('.popup4').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup4').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// reset password
	$('.js-popup5').on('click', function(e) {
	  e.preventDefault();

	  $('.popup5').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup5').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});



	// .js-close-this-open-login
	$('.js-close-this-open-login').on('click', function(e) {
	  e.preventDefault();
		
		// close-this
		$('.popupall').find('.js-close-popup').trigger('click');

		// open login
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// .js-close-this-open-signup
	$('.js-close-this-open-signup').on('click', function(e) {
	  e.preventDefault();
		
		// close-this
		$('.popupall').find('.js-close-popup').trigger('click');

		// open signup
	  $('.popup2').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup2').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});

	// .js-close-this-open-forgot
	$('.js-close-this-open-forgot').on('click', function(e) {
	  e.preventDefault();
		
		// close-this
		$('.popupall').find('.js-close-popup').trigger('click');

		// open forgot
	  $('.popup3').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			$('.popup3').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
	  });
	});



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