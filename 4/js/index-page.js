$(function() {
	// wow js
	// new WOW().init();


	$('.js-header-popup').on('click', function(e) {
		$('.header-popup').fadeToggle('500');
	});




	$('.js-history').on('click', function(e) {
		$('.page-bisinesswallet-history__bottom').toggle('slow');
		$(this).toggleClass('active');

		if($(this).is('.active')) {
			$(this).text('развернуть');
		}
		else {
			$(this).text('свернуть');
		}
	});




	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-question-lk').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup').slideDown(600);
	  
	  $('.popup-overlay').fadeIn('slow');
	  // $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp(600, function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').fadeOut('slow');
			// $('.popup-overlay').css('display', 'none');

			// $('.popup').find("input").val(""); // off in wp
	  });
	});



	// $('.js-in-balance').on('click', function(e) {
	//   e.preventDefault();

	//   $('.popup-out-balance').slideDown();
	//   $('.popup-out-balance-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-out-balance-overlay').on('click', function(e) {
	// 			e.preventDefault();
	// 		$('.popup-out-balance').slideUp();
	// 		$('.popup-out-balance-overlay').css('display', 'none');
	//   });
	// });

	// $('.js-out-balance').on('click', function(e) {
	//   e.preventDefault();

	//   $('.popup-in-balance').slideDown();
	//   $('.popup-in-balance-overlay').css('display', 'block');
	  
	//   // поиск button close popup
	//   $('.js-close-popup, .popup-in-balance-overlay').on('click', function(e) {
	// 			e.preventDefault();
	// 		$('.popup-in-balance').slideUp();
	// 		$('.popup-in-balance-overlay').css('display', 'none');
	//   });
	// });







	// js-in-balance вывести средства
		$('.js-in-balance').on('click', function(e) {
		  // e.preventDefault();
		  $(window).scrollTop(0);

		  $('.popup-in-balance').slideDown();
		  $('.popup-in-balance-overlay').css('display', 'block');
		  
		  // поиск button close popup
		  $('.js-close-popup-in-balance, .popup-in-balance-overlay').on('click', function(e) {
				// $('.popup').css('display', 'none');
				// $('.popup-overlay').css('display', 'none');
				// or
				$('.popup-in-balance').slideUp('300', function() {
					
					// stop iframe video play after close popup
					// var video = $(".popup iframe").attr("src");
					// $(".popup iframe").attr("src", "");
					// $(".popup iframe").attr("src", video);
				});
				$('.popup-in-balance-overlay').css('display', 'none');
				// $('.popup').find("input").val("");
		  });
		});

		// выбор check для popup
		$('.popup-in-balance__method1 >label, .popup-in-balance__method2 >label').on('click', function(e) {
			$('.popup-in-balance__method1 .perf >img').css('display', 'none');
			$('.popup-in-balance__method1 .adv >img').css('display', 'none');
			$('.popup-in-balance__method1 .payeer >img').css('display', 'none');
			$('.popup-in-balance__method1 .bitcoin >img').css('display', 'none');
			$('.popup-in-balance__method1 .ya >img').css('display', 'none');
			$('.popup-in-balance__method1 .visa >img').css('display', 'none');
			$('.popup-in-balance__method1 .master >img').css('display', 'none');

			$('.popup-in-balance__method2 .perf >img').css('display', 'none');
			$('.popup-in-balance__method2 .adv >img').css('display', 'none');
			$('.popup-in-balance__method2 .payeer >img').css('display', 'none');
			$('.popup-in-balance__method2 .bitcoin >img').css('display', 'none');
			$('.popup-in-balance__method2 .ya >img').css('display', 'none');
			$('.popup-in-balance__method2 .visa >img').css('display', 'none');
			$('.popup-in-balance__method2 .master >img').css('display', 'none');

			$(this).find('>img').show(200);
		});



		// js-out-balance Пополнение баланса
		$('.js-out-balance').on('click', function(e) {
		  // e.preventDefault();
		  $(window).scrollTop(0);

		  $('.popup-out-balance').slideDown();
		  $('.popup-out-balance-overlay').css('display', 'block');
		  
		  // поиск button close popup
		  $('.js-close-popup-out-balance, .popup-out-balance-overlay').on('click', function(e) {
				// $('.popup').css('display', 'none');
				// $('.popup-overlay').css('display', 'none');
				// or
				$('.popup-out-balance').slideUp('300', function() {
					
					// stop iframe video play after close popup
					// var video = $(".popup iframe").attr("src");
					// $(".popup iframe").attr("src", "");
					// $(".popup iframe").attr("src", video);
				});
				$('.popup-out-balance-overlay').css('display', 'none');
				// $('.popup').find("input").val("");
		  });
		});

		// выбор check для popup
		$('.popup-out-balance__method1 >label, .popup-out-balance__method2 >label').on('click', function(e) {
			$('.popup-out-balance__method1 .perf >img').css('display', 'none');
			$('.popup-out-balance__method1 .adv >img').css('display', 'none');
			$('.popup-out-balance__method1 .payeer >img').css('display', 'none');
			$('.popup-out-balance__method1 .bitcoin >img').css('display', 'none');
			$('.popup-out-balance__method1 .ya >img').css('display', 'none');
			$('.popup-out-balance__method1 .visa >img').css('display', 'none');
			$('.popup-out-balance__method1 .master >img').css('display', 'none');

			$('.popup-out-balance__method2 .perf >img').css('display', 'none');
			$('.popup-out-balance__method2 .adv >img').css('display', 'none');
			$('.popup-out-balance__method2 .payeer >img').css('display', 'none');
			$('.popup-out-balance__method2 .bitcoin >img').css('display', 'none');
			$('.popup-out-balance__method2 .ya >img').css('display', 'none');
			$('.popup-out-balance__method2 .visa >img').css('display', 'none');
			$('.popup-out-balance__method2 .master >img').css('display', 'none');

			$(this).find('>img').show(200);
		});
		














































	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();
		
		// проверка на стороне клиента формы через js что форма не пустая
		// var name = $('.name1').val();
		// var phone = $('.tel1').val();
		// console.log(name);
		// console.log(phone);

		$.ajax({
			type: "POST",
			url: "smart-question-lk.php",	// url: "smart-question-lk.php", даже если js и php не в одной папке!
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		// if (name !== '' & phone !== '') {
		// 	$.ajax({
		// 		type: "POST",
		// 		url: "mailer/smart.php",
		// 		data: $(this).serialize()
		// 	}).done(function() {
		// 		$(this).find("input").val("");
				
		// 		//alert("Заявка отправлена!");
		// 		window.location.href = "../mailer/thanks.html";
				
		// 		$("form").trigger("reset");
				
		// 		$('.popup').slideUp();
		// 		$('.popup-overlay').css('display', 'none');
		// 	});
		// } else {
		// 	alert('Данные не заполнены!');
		// }
		
		return false;
	});

	// email - old
	//$('.main-form').submit(function(event) {
	//	event.preventDefault();
	//	$.ajax({
	//		type: "POST",
	//		url: "mailer/smart.php",
	//		data: $(this).serialize()
	//	}).done(function() {
	//		$(this).find("input").val("");
	//		alert("Сообщение успешно отправлено");
	//		$("form").trigger("reset");
	//		
	//		$('.popup').slideUp();
	//		$('.popup-overlay').css('display', 'none');
	//	});
	//	return false;
	//});


});