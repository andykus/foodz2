(function(){require.config({

	urlArgs: 'bust=' + (new Date()).getTime(),

	paths: {
		'jquery' : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.1/jquery.min',
		'underscore' : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min',
		'backbone'  : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min'
	}, 

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone':{
			exports: 'Backbone',
			deps: [
				'underscore',
				'jquery'
			]
		}
	}	

	});

	require(['env/router'], function(Router){


	});
}());