// add page to namespace
VETAPP.namespace('VETAPP.pages.courselanding');

// create page
VETAPP.pages.courselanding = (function() {

	var self = {};

	self.init = function init() { console.log('init page: courselanding.js');

		var self = this;
		
		self.isMobile = window.orientation || Modernizr.touch;
		self.container = $('.main-container');
		
		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	//this entire function will be rewritten in angular
	self.initPopovers = function(presenters){
		//convert dom elements to jquery objects
		presenters = $(presenters);

		//TODO: Set up handler for managing different popover placements based on screen loc
		
		function getContent(presenter){
			//this html packaging depends on the api call...this should reside in the angular. Using static data now
			var html = '<div class="popover-header"><img class="circle" src="http://placehold.it/50x50"><div class="header-text"><h4 class="purple">Dr.Mitch Blanding,<small> DVM, MS</small></h4><h5 class="muted">Associate Director, Beef Technical Services</h5></div></div><div class="clearfix"></div><div class="popover-body">This is where the body text will go, my friends.</div>'
			return html;
		}

		//set options
		var options = {
			animation: true,
			html: true,
			placement: 'right',
			trigger: 'hover',
			content: getContent()
		}

		//initialize popovers for all presenters
		$('[rel="popover"]').popover(options);
	
			
	}

	self.initModules = function()
	{
		var self = this;
		var presenters = self.container.find('.presenter-popover');
		self.initPopovers(presenters); 
	}

	self.bindEvents = function()
	{	
		var self = this;
	}

	return self;

}());

$(document).ready(function(){
	VETAPP.pages.courselanding.init();	
});
