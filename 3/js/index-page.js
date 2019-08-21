$(function() {
	// wow js
	new WOW().init();



	// owl
	$('.owl-carousel').owlCarousel({
		items: 5,
		loop: true,
		autoWidth: true,
		margin: 25,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 2800,
		autoplayHoverPause:false,
		nav: false,
		dots: false
	});

	$(window).on('focus', function () {
	  $('.owl-next').trigger('click');
	});

	// $('.owl-carousel').on('changed.owl.carousel', function(event) {
	//  	setTimeout(function()
	// 	  {
	//  		$('.owl-dot.active').click();

	// 	  	// получение центрального слайда
	// 	  	//console.log($('.owl-dot.active').index());

	// 	  	// сброс значений
	// 	  	$('.zero').css('display', 'none');
	// 	  	$('.one').css('display', 'none');
	// 	  	$('.two').css('display', 'none');

	// 	  	// применение новых данных для центрального дива
	// 	  	if ($('.owl-dot.active').index() == 0) {
	// 	  		$('.zero').css('display', 'block');
	// 	  	}
	// 	  	if ($('.owl-dot.active').index() == 1) {
	// 	  		$('.one').css('display', 'block');
	// 	  	}
	// 	  	if ($('.owl-dot.active').index() == 2) {
	// 	  		$('.two').css('display', 'block');
	// 	  	}
	// 	  }, 140);
	// });

	var link = $('.header__top-inner-left');
	var offset = link.offset();

	var top = offset.top;
	var left = offset.left;
	link.css({"position" : "relative", "left" : -left});



	// questions block switcher
	$('.page-questions-texts__item button').on('click', function(e) {
		$('.page-questions-texts__item button').removeClass('active');
		$(this).addClass('active');
		idblock =$(this).attr('data-id');

		$('.page-questions-texts__result-description').hide(600);
		$(".page-questions-texts__result").find("[id='"+idblock+"']").show(600);
	});






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

	// .popup-login
	$(".js-popup-login").on("click", function(e) {
	  e.preventDefault();

	  $(".popup-login").slideToggle(600);
	  
	  // поиск button close popup-login
	  // $(".js-close-popup-login").on("click", function(e) {
	  // 	e.preventDefault();

			// $(".popup-login").slideUp(600, function() {

			// });
	  // });
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
		
		return false;
	});

});