$(function() {
	// wow js
	// new WOW().init();



	// меняем слайды и меняем input radio
	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		console.log(currentSlide);
		if(currentSlide == 0) {
			// 0 - 4
			$('.right-mainpage-top-left-procent__inputs input').eq(0).prop('checked',true);

			// $('.right-mainpage-top-left-procent__inputs input').attr('checked',false);
			// $('.right-mainpage-top-left-procent__inputs input').eq(0).attr('checked',true);

			$('.right-mainpage-top-right-top__w span').text('Bitcoin wallet');
			var comms = $('.right-mainpage-top-left-procent__inputs input:nth-child(1)').attr('data-commission');
			// console.log(comms);
			$('.right-mainpage-top-right-top__c span').text(comms);



			$('.right-mainpage-top-left-balance__buttons__inputs input').eq(0).prop('checked',true);
			var comms2 = $('.right-mainpage-top-left-balance__buttons__inputs input:nth-child(1)').attr('data-commission');
			// console.log(comms2);
			$('.right-mainpage-top-right-top__c span').text(comms2);
		}
		if(currentSlide == 1) {
			// 0 - 4
			$('.right-mainpage-top-left-procent__inputs input').eq(1).prop('checked',true);

			// $('.right-mainpage-top-left-procent__inputs input').attr('checked',false);
			// $('.right-mainpage-top-left-procent__inputs input').eq(1).attr('checked',true);

			$('.right-mainpage-top-right-top__w span').text('Ethereum wallet');
			var comms = $('.right-mainpage-top-left-procent__inputs input:nth-child(2)').attr('data-commission');
			// console.log(comms);
			$('.right-mainpage-top-right-top__c span').text(comms);



			$('.right-mainpage-top-left-balance__buttons__inputs input').eq(1).prop('checked',true);
			var comms2 = $('.right-mainpage-top-left-balance__buttons__inputs input:nth-child(2)').attr('data-commission');
			// console.log(comms2);
			$('.right-mainpage-top-right-top__c span').text(comms2);
		}
		if(currentSlide == 2) {
			// 0 - 4
			$('.right-mainpage-top-left-procent__inputs input').eq(2).prop('checked',true);
			$('.right-mainpage-top-right-top__w span').text('Litecoin wallet');
			var comms = $('.right-mainpage-top-left-procent__inputs input:nth-child(3)').attr('data-commission');
			// console.log(comms);
			$('.right-mainpage-top-right-top__c span').text(comms);



			$('.right-mainpage-top-left-balance__buttons__inputs input').eq(2).prop('checked',true);
			var comms2 = $('.right-mainpage-top-left-balance__buttons__inputs input:nth-child(3)').attr('data-commission');
			// console.log(comms2);
			$('.right-mainpage-top-right-top__c span').text(comms2);
		}
		if(currentSlide == 3) {
			// 0 - 4
			$('.right-mainpage-top-left-procent__inputs input').eq(3).prop('checked',true);
			$('.right-mainpage-top-right-top__w span').text('Payeer wallet');
			var comms = $('.right-mainpage-top-left-procent__inputs input:nth-child(4)').attr('data-commission');
			// console.log(comms);
			$('.right-mainpage-top-right-top__c span').text(comms);



			$('.right-mainpage-top-left-balance__buttons__inputs input').eq(3).prop('checked',true);
			var comms2 = $('.right-mainpage-top-left-balance__buttons__inputs input:nth-child(4)').attr('data-commission');
			// console.log(comms2);
			$('.right-mainpage-top-right-top__c span').text(comms2);
		}
		if(currentSlide == 4) {
			// 0 - 4
			$('.right-mainpage-top-left-procent__inputs input').eq(4).prop('checked',true);
			$('.right-mainpage-top-right-top__w span').text('Perfect money wallet');
			var comms = $('.right-mainpage-top-left-procent__inputs input:nth-child(5)').attr('data-commission');
			// console.log(comms);
			$('.right-mainpage-top-right-top__c span').text(comms);



			$('.right-mainpage-top-left-balance__buttons__inputs input').eq(4).prop('checked',true);
			var comms2 = $('.right-mainpage-top-left-balance__buttons__inputs input:nth-child(5)').attr('data-commission');
			// console.log(comms2);
			$('.right-mainpage-top-right-top__c span').text(comms2);
		}
	});

	// slick slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});





	// Investing information:
	$('.right-mainpage-top-left-balance__buttons input').on('keyup', function(e) {
		var amount = $('.right-mainpage-top-left-balance__buttons input').val();
		$('.right-mainpage-top-right-top__amount span').text(amount);
	});

	









	// slick slider2
	$('.slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: false,
		autoplaySpeed: 3000,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});






	





	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
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
			// $('.popup').find("input").val(""); // off in wp
	  });
	});

	$('.js-popup2').on('click', function(e) {
	  e.preventDefault();

	  // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	  // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	  // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	  // поиск popup и popup-overlay для их открытия
	  // $('.popup').css('display', 'block');
	  // $('.popup-overlay').css('display', 'block');
	  // or
	  $('.popup2').slideDown(600);
	  $('.popup-overlay').fadeIn('slow');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
				e.preventDefault();
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup2').slideUp(600);
			$('.popup-overlay').fadeOut('slow');
	  });
	});



	// invest page - buttons
	$('.right-mainpage-top-left-procent-left').on('click', function(e) {
		$('.right-mainpage-top-left-procent-right').removeClass('active');
		$('.right-mainpage-top-left-procent-left').addClass('active');
	});
	$('.right-mainpage-top-left-procent-right').on('click', function(e) {
		$('.right-mainpage-top-left-procent-left').removeClass('active');
		$('.right-mainpage-top-left-procent-right').addClass('active');
	});



	// tabs jquery
	$(function() {
		$(".tab_item").not(":first").hide();
		$(".wrap .tab").click(function() {
			
			// нужно если slick+tab
			//$('.slider').slick('slickGoTo', 0, false);
			
			$(".wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");
	});



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
});