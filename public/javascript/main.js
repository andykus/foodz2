(function(){require.config({	

	// No .js at the end
	paths: {
		'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.1/jquery.min',
		'underscore' : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
		'backbone'  : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
		'backbone-relational' : '//cdnjs.cloudflare.com/ajax/libs/backbone-relational/0.8.5/backbone-relational',
		'handlebars' : 'vendors/handlebars'
	}, 

	shim: {
		'underscore': {
			// Exports is name used as the first parameter in the require call
			exports: '_'
		},
		'backbone-relational':{
			exports: 'relational', 
			deps: [
			'underscore', 
			'backbone'
			]
		},
		'backbone':{
			exports: 'Backbone',
			deps: [
			'underscore',
			'jquery'
			]
		}, 
		'handlebars': {
			exports: 'handlebars'
		}
	}	

});

require([
	'env/router',
	'plugins/backbone.model.extensions',
	'plugins/backbone.view.extensions',
	'plugins/backbone.collection.extensions', 
	'backbone-relational'
	]);
}());