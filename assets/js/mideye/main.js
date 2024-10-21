var vektorScrollTo = function($ele, offset){
	var	hash,
		offset_top,
		$hash;
	
	offset = offset ? offset : 0;
	
	if($ele.data('href'))
		hash = $ele.data('href');
	else if($ele.attr('href'))
		hash = $ele.attr('href');
	else
		return;
	
	$hash = $(hash);
		
	if(!$hash.length)
		return;
	
	offset_top = $hash.offset().top;
	
	$('html, body').animate({scrollTop: offset_top - offset}, 500);
	return;
};


$(document).ready(function(){
	
	// Divs
	var $html = $('html'),
		$body = $('body'),
		$header = $('#header'),
		$nav = $('.main-menu'),
		$toggle = $('#toggle'),
		$parallax = $('.parallax'),
		$content = $('#content-wrapper');
	
	// Vars	
	var windowScroll,
		windowHeight = $(window).height(),
		headerHeight = $header.outerHeight(),
		contentHeight = $content.outerHeight();
	
	var isExplorer = $html.hasClass('lt-ie9');
	
	if(!isExplorer){
	
		$(window).scroll(function(){
			var windowScroll = $(window).scrollTop();
			if($body.hasClass('home')){
				parallaxImage(windowScroll);
			}
		});
		
	}
	
	function parallaxImage(windowScroll){
		var e = windowScroll / 1.5;
		$parallax.css('backgroundPositionY', e);
	}
	
	$toggle.click(function(e){
		e.preventDefault();
		$nav.stop().slideToggle();
	});
	
	$('.accordion').on('click', '.accordion-item', function(){
		$(this).toggleClass('open').find('.accordion-content').stop().slideToggle(100);
	});
	
	$('.parallax').on('click', '.slide-down', function(e){
		e.preventDefault();
		vektorScrollTo($(this));
	});
	$('#demo-form-link').on('click', function(e){
		e.preventDefault();
		vektorScrollTo($(this), 50);
	});

	// Fancybox media helper, ie for Vimeo, Youtube etc.
	$.fancybox && $('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
	
	$.flexslider && $('#testimonials').flexslider({
		controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		prevText: "Previous",           //String: Set the text for the "previous" directionNav item
		nextText: "Next",  
		slideshowSpeed: 7000,
		pauseOnHover: true
	});
	
	if($('.gallery').length){
		$('.gallery a').attr({"rel": "group"});
		$('.gallery a').fancybox({
			openEffect  : 'none',
			closeEffect : 'none'
		});
	}
	
	if($.pageslide) {
		/* Page Slide */
		$(".modal-button").click(function(){
			$('body').toggleClass('slide-menu-open');
		});
		$(".modal-button").pageslide({ direction: "left", modal: true });
		$(".pageslide-close").click(function(e){
			e.preventDefault();
			$('body').toggleClass('slide-menu-open');
			$.pageslide.close();
		});
	}
	
	var uxBoxesInterval,
		$uxBoxes = $('#user-content').find('.faded'),
		uxBoxesLength = $uxBoxes.length;
	$('#user-content').find('.boxes').waypoint(function(){
		$uxBoxes.first().removeClass('faded');
		
		uxBoxesInterval = setInterval(function(){
			var $currentUXBox = $uxBoxes.not('.faded');
			
			if($currentUXBox.index() == (uxBoxesLength - 1)) {
				$uxBoxes.removeClass('faded');
				clearInterval(uxBoxesInterval);
				return;
			}
			
			$currentUXBox.addClass('faded').next().removeClass('faded');
		}, 2000);
		
		$(this).waypoint('destroy');
	}, {offset: '50%'});
	
	/*
	 * THE TOUR
	 */
	if($(document.body).hasClass('page-template-tour-php')) {
		console.log('the tour!');
		
		var win = $(window),
			doc = $(document);
		
		var fade_in_delay = 800;
		
		var steps = $('.step'),
			step1 = $('#step1'),
			step2 = $('#step2'),
			step3 = $('#step3'),
			step2_fade_in = step2.find('.fade-in');
		
		step2.find('.boxes').waypoint(function(){
			console.log('step2 reporting in!');
			
			step2_fade_in.each(function(i, ele){
				setTimeout(function(){
					console.log(step2_fade_in.eq(i)[0]);
					step2_fade_in.eq(i).animate({'opacity': 1}, 1000);
				}, i * fade_in_delay);
			});
			setTimeout(function(){
				step2.find('.step-arrow-3').addClass('bounce');
			}, step2_fade_in.length * fade_in_delay)
		}, {offset: '20%'});
	}
	
	$(".clickable-rows").each(function(){
		$("a", this).click(function(e) {
			e.stopPropagation();
		});
		$(".clickable").click(function() {
			window.location = $("a", this).first().attr("href");
		});
	});
	
});