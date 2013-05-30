define(['backbone', 'Foodz'], function(Backbone, Foodz){

	var Router = Backbone.Router.extend({

	routes:{
	'':'home',	
	'otherview': 'otherview'
	}

	});

	var router = new Router();

	router.on('route', function (section) {
		
		require(['views/' + section + '.view'], function (View) {

			View.trigger('load');
		});

	});

	Backbone.history.start();

	return Router;

});