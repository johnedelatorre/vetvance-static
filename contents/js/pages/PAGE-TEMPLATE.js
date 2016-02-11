// add page to namespace
VETAPP.namespace('VETAPP.pages.PAGENAME');

// create page
VETAPP.pages.PAGENAME = (function() {

	var self = {};

	self.init = function init() { console.log('init page: PAGENAME.js');

		var self = this;
		
		self.isMobile = window.orientation || Modernizr.touch;
		self.container = $('.main-container');
		
		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	self.initModules = function()
	{
		var self = this;
	}

	self.bindEvents = function()
	{	
		var self = this;
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.pages.PAGENAME.init();	
});
