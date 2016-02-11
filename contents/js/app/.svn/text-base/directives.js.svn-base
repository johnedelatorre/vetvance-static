'use strict';

/* Directives */


angular.module('vetvance.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('selectize', function($timeout, $http, $templateCache){
  			var getTemplate = function(type, filename){
  				var templateLoader,
  				url = '/partials/',
  				templateUrl = url + filename;

  				templateLoader = $http.get(templateUrl, {cache: $templateCache});
  				return templateLoader;
  			}

  			var renderSelectize = function(item, option){
				/*
					Initialize selectize on the element
					options: Pass in an array containing values to be rendered in the new select, can be anything but must set 
				 	valueField: string value of the name of the property in 'options' which should be used as the value
				 	labelField: string value of the name of the property in 'options' which should be used as the label
				 	render:
				 		item: define how the selected items will render once selected
				 		option: define how the selected items will render as options
				 */
				//configure the options
				if(scope.source == 'json'){
					//prepare to load options through our init script
					var options = {
						valueField: scope.valuefield,
	  					labelField: scope.labelfield,
	  					searchField: scope.searchfield,
	  					options: [],
	  					render: {
	  						item: item,
	  						option: option
	  					}
					};

				}else if(scope.source == 'local'){
					//assume we're pulling data from scope
					var options = {
						valueField: scope.valuefield,
	  					labelField: scope.labelfield,
	  					searchField: scope.searchfield,
	  					options: scope.data,
	  					render: {
	  						item: item,
	  						option: option
	  					}
					};
				}else{
					//assume local, your template should respect the format & attributes of the select
					var options = {
						valueField: 'email',
						labelField: 'name',
						searchField: ['name', 'email'],
						options: [
					        {email: 'brian@thirdroute.com', name: 'Brian Reavis'},
					        {email: 'nikola@tesla.com', name: 'Nikola Tesla'},
					        {email: 'someone@gmail.com'}
					    ],
					    render:{
					    	item: item,
					    	option: option
					    }
					};
				}

				
				$(elem).selectize(options);
			}

  			var linker = function(scope, elem, attrs){
  				var itemScript = getTemplate(scope.itemtemplate),
  				optionScript = getTemplate(scope.itemtemplate);

  				$q.all([itemScript, optionScript]).then(function(responses){
  					angular.forEach(values, function(value, key){
  						//walk through the array of promises, first item then option
  						
  						//trigger renderSelectize(item, option)
  					})
  					

  				});
  			}

  				

  		return{
  			restrict: 'A',
  			scope: {
  				itemtemplate: '=itemtemplate',
  				optiontemplate: '=optiontemplate',
  				valuefield: '=valuefield',
  				labelfield: '=labelfield',
  				searchfield: '=searchfield',
  				source: '=source',
  				data: '=data'
  			},
  			link: linker
  		};
  });
