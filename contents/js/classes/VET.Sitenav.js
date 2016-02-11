/**
 * Class VETAPP.Sitenav
 * author: 	Jonathan Schmidt
**/

// add to name space
VETAPP.namespace('VETAPP.Classes');

// define class
VETAPP.Classes.Sitenav = Class.extend({

	init : function init(options, elem)  {  console.log('init: Class VETAPP.Sitenav loaded');
		
		this.isMobile 	= window.orientation || Modernizr.touch;		
		this.options 	= $.extend({}, this.options, options);

		// cache elems
		this.siteNav 	= elem;		
		this.page 		= $(this.options.page).attr('class');
		// render
		this.render();
		this.bindEvents();
	},
	
	options : {},
	
	render : function()
	{
		var self = this;
		// set active nav item		
		switch (self.page) {

			case 'index-container':
			$(siteNav).find('.home img').attr('src', 'contents/imgs/home-active.png');
			break;

			case 'advanced-container':
			$(siteNav).find('.advanced').addClass('active');
			break;

			case 'connect-container':
			$(siteNav).find('.connect').addClass('active');
			break;
			
			case 'job-container':
			$(siteNav).find('.search').addClass('active');
			break;

			case 'whoweare-container':
			$(siteNav).find('.whoweare').addClass('active');
			break;
		}
	},

	bindEvents : function()
	{
		var self = this;
		var navItems = siteNav.find('a');
		var btnHome	= siteNav.find('.home');

		// add mouseover for home button
		if (self.page !== 'index-container')
		{
			btnHome.on({
				mouseenter: function(){
					$(this).find('img').attr('src', 'contents/imgs/home-active.png');
				},
				mouseleave: function(){
					$(this).find('img').attr('src', 'contents/imgs/home.png');
				}
			});			
		}

		// check nav constraints
		navItems.click(function(e){
			//e.preventDefault()
			//console.log(this);
		});

	}
});
