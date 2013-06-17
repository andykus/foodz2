define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({

	routes:{
	'recipe':'recipe',		
	}

	});

	var router = new Router();

	router.on('route', function (section) {
		
		require(['views/' + section + '.view'], function (View) {

			View.trigger('load', 35);
		});

	});

	Backbone.history.start();

	return Router;

});