$(document).ready(function(){

	$(".solutions-slider").each(function(){
		var $solutionsSlider = $(this);

		$solutionsSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$solutionsSlider.parent().find(".solutions-slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$solutionsSlider.data("cnt")+'</span>' );
		});
		$solutionsSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			appendArrows: $solutionsSlider.parent().find(".solutions-slider-controls"),
			appendDots: $solutionsSlider.parent().find(".solutions-slider-controls"),
			autoplay:false,
			variableWidth:true,
			touchThreshold:20,
			slidesToShow:3,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false
					}
				}
			]
		});
	});


	$('.news-slider').each(function(){
		var $newsSlider = $(this);

		$newsSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$newsSlider.parent().find(".news-slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$newsSlider.data("cnt")+'</span>' );
		});

		$newsSlider.slick({
			infinite: true,
			dots:true,
			arrows:true,
			appendArrows: $('.news-slider-controls'),
			appendDots: $('.news-slider-controls'),
			autoplay:false,
			touchThreshold:20,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false
					}
				}
			]
		});
	});

	$('.featured-projects-slider').each(function(){
		var $featuredProjectsSlider = $(this);

		$featuredProjectsSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$featuredProjectsSlider.parent().find(".featured-projects-slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$featuredProjectsSlider.data("cnt")+'</span>' );
		});
		$featuredProjectsSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			appendArrows: $featuredProjectsSlider.parent().find(".featured-projects-slider-controls"),
			appendDots: $featuredProjectsSlider.parent().find(".featured-projects-slider-controls"),
			autoplay:false,
			fade:true,
			touchThreshold:20,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						adaptiveHeight:true
					}
				}
			]
		});
	});

	$('.projects-slider').each(function(){
		var $projectsSlider = $(this);

		$projectsSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$projectsSlider.parent().find(".slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$projectsSlider.data("cnt")+'</span>' );
		});
		$projectsSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			autoplay:false,
			appendArrows: $projectsSlider.parent().find(".slider-controls"),
			appendDots: $projectsSlider.parent().find(".slider-controls"),
			touchThreshold:20,
			slidesToShow:3,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 576,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:1
					}
				}
			]
		});
	});

	$(".partners-slider").each(function(){
		var $partnersSlider = $(this);

		$partnersSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$partnersSlider.parent().find(".partners-slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$partnersSlider.data("cnt")+'</span>' );
		});
		$partnersSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			appendArrows: $partnersSlider.parent().find(".partners-slider-controls"),
			appendDots: $partnersSlider.parent().find(".partners-slider-controls"),
			autoplay:false,
			touchThreshold:20,
			slidesToShow:6,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:5
					}
				},
				{
					breakpoint: 576,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:4
					}
				},
				{
					breakpoint: 361,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:3
					}
				}
			]
		});
	});

	$('.bordered-slider').each(function(){
		var $borderedSlider = $(this);

		$borderedSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$borderedSlider.parent().find(".slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$borderedSlider.data("cnt")+'</span>' );
		});
		$borderedSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			autoplay:false,
			appendArrows: $borderedSlider.parent().find(".slider-controls"),
			appendDots: $borderedSlider.parent().find(".slider-controls"),
			touchThreshold:20,
			slidesToShow:4,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow:3
					}
				},
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 576,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:1
					}
				}
			]
		});
	});

	$('.latest-slider').each(function(){
		var $latestSlider = $(this);

		$latestSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$latestSlider.parent().find(".slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$latestSlider.data("cnt")+'</span>' );
		});
		$latestSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			autoplay:false,
			appendArrows: $latestSlider.parent().find(".slider-controls"),
			appendDots: $latestSlider.parent().find(".slider-controls"),
			touchThreshold:20,
			slidesToShow:3,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 576,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:1
					}
				}
			]
		});
	});

	$('.tech-slider').each(function(){
		var $techSlider = $(this);

		$techSlider.on('afterChange', function(event, slick, currentSlide){
			var $slide = $(slick.$slides.get(currentSlide));                                   
			$techSlider.parent().find(".slider-controls .slides-counter").html( '<span class="current">'+$slide.data("cnt")+'</span><span>&nbsp;/&nbsp;</span><span class="total">'+$techSlider.data("cnt")+'</span>' );
		});
		$techSlider.slick({
			infinite: true,
			dots:false,
			arrows:true,
			autoplay:false,
			appendArrows: $techSlider.parent().find(".slider-controls"),
			appendDots: $techSlider.parent().find(".slider-controls"),
			touchThreshold:20,
			slidesToShow:3,
			slidesToScroll:1,
			prevArrow: '<button type="button" class="slick-prev"><span class="fas fa-chevron-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="fas fa-chevron-right"></span></button>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: true,
						arrows:false,
						slidesToShow:2
					}
				},
				{
					breakpoint: 576,
					 settings: {
						dots: true,
						arrows:false,
						slidesToShow:1
					}
				}
			]
		});
	});


	$(".textbox img").each(function(){
		var $img = $(this);
		if($img.css("float")=="left")$img.css("padding", "1rem 1rem 1rem 0");
		if($img.css("float")=="right")$img.css("padding", "1rem 0rem 1rem 1rem");
		//if($img.css("float")=="none")$img.css("padding", "1rem 0rem 1rem 0rem");
	});

	$(".content-section").each(function(){
		var $content = $(this);
		if( ($content.find("iframe").length==0) && ($content.text().trim().length<3) )$content.remove();
	});

});
