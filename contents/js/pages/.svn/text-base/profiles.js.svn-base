// add page to namespace
VETAPP.namespace('VETAPP.pages.profiles');

// create page
VETAPP.pages.profiles = (function() {

	var self = {};

	self.init = function init() { console.log('init page: profiles.js');

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

		
		$('.btn-update-profile').click(function(){
			window.location.href = 'update.html';
		});

		$('.btn-cancel-update-profile').click(function(){
			window.location.href = 'profile.html';
		});
		
		// add iCheck plugin 
		
		$('.profile-container input').iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'iradio_minimal-orange'
		});
		
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.pages.profiles.init();	
});
