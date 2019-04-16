$(function() {
	// wow js
	// new WOW().init();



	// tabs
	$(".promo__tab-item").not(":first").hide();
	$(".promo__tab").click(function() {
	
		setTimeout(function() { $('.slider').slick('slickGoTo', 0, false); }, 50);
	
		$(".promo__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".promo__tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



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



	// popup Есть вопрос?
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
	  $('.popup').slideDown();
	  $('.popup-overlay').css('display', 'block');
	  
	  // поиск button close popup
	  $('.js-close-popup, .popup-overlay').on('click', function(e) {
			// $('.popup').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			// or
			$('.popup').slideUp('300', function() {
				
				// stop iframe video play after close popup
				// var video = $(".popup iframe").attr("src");
				// $(".popup iframe").attr("src", "");
				// $(".popup iframe").attr("src", video);
			});
			$('.popup-overlay').css('display', 'none');
			// $('.popup').find("input").val(""); // off in wp
	  });
	});

	// email popup
	$('.main-form').submit(function(event) {
		event.preventDefault();

		$.ajax({
			type: "POST",
			url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
			data: $(this).serialize()
		}).done(function(data) {
			$(this).find("input").val("");
			
			//alert("Заявка отправлена!");
			window.location.href = "thanks.html";
			
			$("form").trigger("reset");
			
			$('.popup').slideUp();
			$('.popup-overlay').css('display', 'none');
		});
		
		return false;
	});
});