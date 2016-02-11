// add page to namespace
VETAPP.namespace('VETAPP.pages.members');

// create page
VETAPP.pages.members = (function() {

	var self = {};

	self.init = function init() { console.log('init page: members.js');

		var self = this;
		
		self.isMobile 		= window.orientation || Modernizr.touch;
		self.container 	= $('.main-container');
		self.pageId			= $('#pageId');

		// init Modules
		self.initModules();
		// Bind events
		self.bindEvents();
	}

	self.initModules = function()
	{
		var self = this;

		// override jquery validate plugin defaults for bootstrap error class
		$.validator.setDefaults({
		    highlight: function(element) {
		        $(element).closest('.form-group').addClass('has-error');
		    },
		    unhighlight: function(element) {
		        $(element).closest('.form-group').removeClass('has-error');
		    }
		});		
	}

	self.setUpRegistrationForm = function()
	{
    	// cache elms
    	var school 			= $('#school'),
    		schoolnames 	= $('#schoolnames'),
    		register_form 	= $('#register-form');

      // clear school vals
		$('.members-container .radiobtn').on('ifChecked', function(event){
            schoolnames.html('');
            school.val('');

            // show school input field
            school.show();

            // set autocomplete 
            if ($(this).val() !== 'Vet') {
            	// destroy autocomplete
            	school.autocomplete( "destroy" );
            } else {        
		    	
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
		});

		// get career types
		$.ajax({
		   url: "/api/careertypes",
		   // data: { key: val },
		   format: JSON
		}).done(function (data) {
		   var _careerhtml = '<option value="-1">--Select--</option>';
		   $.each(data, function (_careerkey) {
		       _careerhtml += '<option value="' + data[_careerkey].careertypeid + '">';
		       _careerhtml += data[_careerkey].careertypename;
		       _careerhtml += '</option>';
		   });
		   $('#careertypeid').html(_careerhtml);
		});

		// get security questions
		$.ajax({
		   url: "/api/securityquestions",
		   // data: { key: val },
		   format: JSON
		}).done(function (data) {
		   console.log(data);

		   var _securityhtml = '<option value="-1">--Select--</option>';
		   $.each(data, function (_securitykey) {
		       _securityhtml += '<option value="' + data[_securitykey].securityquestionname + '">';
		       _securityhtml += data[_securitykey].securityquestionname;
		       _securityhtml += '</option>';
		   });
		   $('#securityquestion').html(_securityhtml);
		});

		// validate registration form
		register_form.validate({
		  	rules: {	    
		    	email: {
		    		required: true,
		      	email: true
				},
		    	email_confirm: {
		    		required: true,
	     			equalTo: "#email"    				
				},
				password: {
    				required: true,
    				minlength: 8
				},
    			password_confirm: {
    				required: true,
      			equalTo: "#password"
    			},
    			firstname: {
    				required: true,
    				minlength: 2
    			},
    			lastname: {
    				required: true,
    				minlength: 2
    			},
    			careertypeid: "required",
    			school: {
    				required: true,
    				minlength: 2
    			},
    			graduation: "required",
    			securityquestion: "required",
    			securityanswer: "required"

		  	},
		  	invalidHandler: function(event, validator) {    			
    			var errors = validator.numberOfInvalids();    			
    			if (errors > 0)
    				$('.required-msg')
    					.html('Please check the highlighted fields below')
    					.addClass('has-error');
    		}
		});	
	}

	self.bindEvents = function()
	{	
		var self = this;
        
		if (self.pageId.hasClass('register-form'))
			self.setUpRegistrationForm();		
		
		// add iCheck plugin 
		$('.members-container .icheck').iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'iradio_minimal-orange'
		});	
	}

	return self;
}());

$(document).ready(function(){
	VETAPP.pages.members.init();	
});
