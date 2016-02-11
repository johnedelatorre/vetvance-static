// add page to namespace
VETAPP.namespace('VETAPP.pages.module');

// create page
VETAPP.pages.module = (function() {

	var self = {};

	self.init = function init() { console.log('init page: module.js');

		var self = this;
		
		self.isMobile = window.orientation || Modernizr.touch;
		self.container = $('.main-container');
		
		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	self.toggleTabs = function(tab, activeClass){
		//get and cache tab element set current state
		var self = this;

		//turn clicked elem reference into jquery obj
		var tab = $(tab);

		if(tab.hasClass(activeClass)){
			//do nothing, joint is already active
		}else{
			//add active class to clicked tab, show matching panel, remove active class from sibling, hide current active panel
			tab.addClass(activeClass);
			$(tab.attr('data-content')).show();
			var otherTab = tab.siblings();
			otherTab.removeClass(activeClass);
			$(otherTab.attr('data-content')).hide();
		}

		
	}

	self.initModules = function()
	{
		var self = this;
	}

	self.bindEvents = function()
	{	
		//cache elements
		var self = this;
		var tabs = self.container.find('.tab');

		//trigger tab toggle function
		tabs.click(function(){
			self.toggleTabs(this, 'tab-active');
		});
	}

	return self;

}());

$(document).ready(function(){
	VETAPP.pages.module.init();	
});
