// add page to namespace
VETAPP.namespace('VETAPP.pages.whoweare');

// create page
VETAPP.pages.whoweare = (function() {

	var self = {};

	self.init = function init() { console.log('init page: whoweare.js');

		var self = this;		
		self.isMobile = window.orientation || Modernizr.touch;
		self.container = $('.whoweare-container');

		// keep track of rendered modal templates
		self.modals = [];

		// modal template
		self.template = {};

		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	self.initModules = function()
	{
		var self = this;
	}

	self.buildModal = function(data, id, cb)
	{
		var self = this;		

		// Load template
		var source = $("#modal-template").html();

		// Compile Handlebars template
		var template = Handlebars.compile(source);
		
		// Render html
		var html = template(data);

		// create modal storage array
		var modal = {
			id: id,
			html: html
		}

		// push modal to array
		self.modals.push(modal);

		// Add modal to dom
		$('.modal-container').append(html);
		
		// Callback		
		cb.call();
	}

	self.openModal = function(id, source)
	{
		var self = this;

		// check if modal was rendered
		if ( _.findWhere(self.modals, {id: id}) == undefined) {

			// parse data
			var data = {
				person: [{
					id : id,
					fullname : source.find('.fullname').html(),
					status : source.find('.status').html(),
					blurb : source.find('.blurb').val(),
					title : source.find('.title').val(),
					company : source.find('.company').val(),
					photo : source.find('.photo').attr('data-hires')
				}]
			};
			// build modal 
			self.buildModal(data, id, function(){
				self.openId	= id;
				$('#contributorModal'+ id).modal();	
			});

		} else {
			// open rendered modal
			$('#contributorModal'+ id).modal();
		}		
	}

	self.bindEvents = function()
	{	
		var self = this;
		
		// cache elements
		person = self.container.find('.show-contributor');

		// close modal
		$(document).on('click', '.close-modal', function(e){
			e.preventDefault();
			$('#contributorModal'+ $(this).attr('data-id')).modal('hide');
		});

		// add modal
		person.click(function(e){
			// get item vals
			var id = $(this).attr('data-id');
			var source = $(this).parent();
			self.openModal(id, source);
		});
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.pages.whoweare.init();	
});
