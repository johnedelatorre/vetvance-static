// add page to namespace
VETAPP.namespace('VETAPP.pages.index');

// create page
VETAPP.pages.index = (function() {

	var self = {};

	self.init = function init() { console.log('init page: index.js');

		var self = this;
		
		self.isMobile = window.orientation || Modernizr.touch;
		self.container = $('.main-container');
		
		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	self.animateSlides = function()
	{
		var activeSlide = 1, slideCount = 5;

		// fade in first slide
		$('#slide'+activeSlide).fadeIn(500, 'easeInSine');

		// slide fade timer
		var timerFunction = function() {

			if (activeSlide < slideCount)
				// fade slides
				$('#slide'+activeSlide).fadeOut(500, 'easeOutSine', function(){
					activeSlide ++;
			  		$('#slide'+activeSlide).fadeIn(500, 'easeInSine');
			  	});
			else
				clearInterval(timer);
		}

		// set slide timer
		var timer = setInterval(timerFunction, 4000);
	}

	self.initModules = function()
	{
		var self = this;

		// activate slide timer
		self.animateSlides();
	}

	self.bindEvents = function()
	{	
		var self = this;
	}

	return self;

}());

$(document).ready(function(){
	VETAPP.pages.index.init();	
});
