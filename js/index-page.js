$(function() {
	// wow js
	new WOW().init();



	// jQuery smooth scrolling
	$('.go_to1').click(function() { // ловим клик по ссылке с классом go_to1
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

	  if(scrolled > 500) {
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



	// magnific-popup
	//$('.image-link').magnificPopup({type:'image'});
	$('.popup-link1').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true,
			duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
	  // other options
	});



	$('.header-promo-top-reg .enter').on('click', function(e) {
		e.preventDefault();
		// $('.header-popup-login').fadeToggle('400');
		$('.header-popup-login').toggle('slow');
	});

	$('.registration-right .enter').on('click', function(e) {
		e.preventDefault();
		// $('.header-popup-login').fadeToggle('400');
		$('.header-popup-login').toggle('slow');
	});



	// accordion jquery
	$('#accordion-js').find('h2').click(function() {
		$(this).next().stop().slideToggle();

		// my
		$(this).toggleClass('active');
	}).next().stop().hide();

	// accordion2 jquery
	$('#accordion-js2').find('h2').click(function() {
		$(this).next().stop().slideToggle();

		// my
		$(this).toggleClass('active');
	}).next().stop().hide();



	// Initialize a new plugin instance for all
	// e.g. $('input[type="range"]') elements.
	$('input[type="range"]').rangeslider({

    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    verticalClass: 'rangeslider--vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {},

    // Callback function
    onSlide: function(position, value) {

    	var resultMonth = 0;
    	var result3Month = 0;
    	var resultYear = 0;

    	if(value == 1) {
    		$('.statistic-right-top-item.ticket3 span').text(value + ' тикет');
    	}
    	if(value > 1 && value <= 4) {
    		$('.statistic-right-top-item.ticket3 span').text(value + ' тикета');
    	}
    	if(value >= 5 && value <= 9) {
    		$('.statistic-right-top-item.ticket3 span').text(value + ' тикетов');
    	}
    	if(value >= 10 && value <= 200) {
    		$('.statistic-right-top-item.ticket3 span').text(value + ' тикетов');
    	}



    	if(value >= 1 && value <= 4) {
    		resultMonth = (value*50*0.85/100)*22;
    		result3Month = (value*50*0.85/100)*66;
    		resultYear = (value*50*0.85/100)*264;
    	}
    	if(value >= 5 && value <= 9) {
    		resultMonth = (value*50*0.90/100)*22;
    		result3Month = (value*50*0.90/100)*66;
    		resultYear = (value*50*0.90/100)*264;
    	}
    	if(value >= 10 && value <= 19) {
    		resultMonth = (value*50*0.95/100)*22;
    		result3Month = (value*50*0.95/100)*66;
    		resultYear = (value*50*0.95/100)*264;
    	}
    	if(value >= 20 && value <= 49) {
    		resultMonth = (value*50*1/100)*22;
    		result3Month = (value*50*1/100)*66;
    		resultYear = (value*50*1/100)*264;
    	}
    	if(value >= 50 && value <= 99) {
    		resultMonth = (value*50*1.1/100)*22;
    		result3Month = (value*50*1.1/100)*66;
    		resultYear = (value*50*1.1/100)*264;
    	}
    	if(value >= 100 && value <= 200) {
    		resultMonth = (value*50*1.2/100)*22;
    		result3Month = (value*50*1.2/100)*66;
    		resultYear = (value*50*1.2/100)*264;
    	}

    	// количество тикетов
    	$('.statistic-right-bottom-left span').text(Math.round(resultMonth));
    	$('.statistic-right-bottom-middle span').text(Math.round(result3Month));
    	$('.statistic-right-bottom-right span').text(Math.round(resultYear));



    	// $('.calc .container .input-tooltip').css({'left' : v});
    	// $('.calc .container .input-tooltip').text(value+'$');

			// var invest_sum2 = 0;
			// $('.ticket-js').val(invest_sum2).change();
			// console.log(invest_sum2);

    },

    // Callback function
    onSlideEnd: function(position, value) {}
	});















	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			$('.popup').slideUp('300', function() {
				
			});
			$('.popup-overlay').css('display', 'none');
			
	  });
	});

	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	//   // поиск popup и popup-overlay для их открытия
	//   // $('.popup').css('display', 'block');
	//   // $('.popup-overlay').css('display', 'block');
	//   // or
	//   $('.popup2').slideDown();
	//   $('.popup-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-overlay').on('click', function(e) {
	// 		// $('.popup').css('display', 'none');
	// 		// $('.popup-overlay').css('display', 'none');
	// 		// or
	// 		$('.popup2').slideUp();
	// 		$('.popup-overlay').css('display', 'none');
	//   });
	// });



	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",	// url: "smart.php", даже если js и php не в одной папке!
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "../mailer/thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		return false;
	});

	

});