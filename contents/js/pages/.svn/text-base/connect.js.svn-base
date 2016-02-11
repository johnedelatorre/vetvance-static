// add page to namespace
VETAPP.namespace('VETAPP.pages.connect');

// create page
VETAPP.pages.connect = (function() {

	var self = {};

	self.init = function init() { console.log('init page: connect.js');

		var self = this;
		
		self.isMobile 	= window.orientation || Modernizr.touch;
		self.container 	= $('.main-container');
		self.pageId		= $('#pageId');

		// init Modules
		self.initModules();

		// bind page events
		if (self.pageId.hasClass('connect-container')) {
			// Bind events
			self.bindEvents();
		}
	}

	self.initModules = function()
	{
		var self = this;
	}

	self.buildPopover = function(id)
	{
		var self = this;		

		// Load template
		if (id == 'btnInterest')
			var source = $("#popover-interest-template").html();
		else
			var source = $("#popover-specialty-template").html();

		// Compile Handlebars template
		var template = Handlebars.compile(source);
		
		// Render html
		var html = template();
		
		// Return html
		return html;
	}

	self.bindEvents = function()
	{	
		var self = this;
		// cache elms
		var doc 			= $(document);
		var btnInterest 	= $('#btnInterest'),
			btnSpecialty	= $('#btnSpecialty')
			btnPopover 		= $('.btn-popover'),
			school			= $('input[name=school]');


		// bind popover buttons
		btnPopover.click(function(e){
			//set popover options
			var options = {
				animation: true,
				html: true,
				placement: 'right',
				trigger: 'manual',
				content: self.buildPopover(this.id)
			}			
			$(this).popover(options);
			$(this).popover('toggle');
		});


		btnSpecialty.on('shown.bs.popover', function () {		  
			// add iCheck plugin 
			$('.popover-content .icheck').iCheck({
				checkboxClass: 'icheckbox_minimal-orange',				
			});		  
		})

		// close popover
		doc.on('click', '.btn-cancel', function(e){
			if ($(this).hasClass('po-interest'))
				btnInterest.popover('hide');
			else
				btnSpecialty.popover('hide');
		});

		// add iCheck plugin 
		$('.connect-container .icheck').iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'iradio_minimal-orange',			
		});

		// add autofill
		// TO-DO: change source to AJAX (?)
		var availableTags = [
			"Cats and stuff",
			"dogs and apples",
			"school of dogs",
			"University of birds",
			"University of cats",
			"University of dogs",
			"University of wolfs"
		];
	   // bind autocomplete to school name
    	school.autocomplete({
      		source: availableTags
    	});
		
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.pages.connect.init();	
});
