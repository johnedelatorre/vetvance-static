// add module to namespace
VETAPP.namespace('VETAPP.Modules.Global');

// define global
VETAPP.Modules.Global = (function() {

	var self = this;

	self.init = function init() { console.log('init module: global.js');

		var self = this;
		self.isMobile 	= window.orientation || Modernizr.touch;
		self.container	= $('.main-container');
		self.pageId		= $('#pageId');
		self.siteNav 	= $('.sitenav');
				
		// init Modules
		self.initModules(); 
	}

	self.initModules = function() {

		var self = this;
		
		// load global site nav
		var siteNav = new VETAPP.Classes.Sitenav({ 
			page : self.pageId, 
			container : self.container 
		}, self.siteNav);
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.Modules.Global.init();
});
