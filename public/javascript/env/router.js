define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({

	routes:{
	'recipe(/:id)':'recipe',		
	}

	});

	var router = new Router();

	router.on('route', function (section, params) {
		
		require(['views/' + section + '.view'], function (View) {

			if(params[0]){
				View.trigger('load', params[0]);				
			}	else{
				View.trigger('load');
			}
		});
		
	});

	Backbone.history.start();

	return Router;

});