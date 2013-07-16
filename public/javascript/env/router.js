define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({

		routes:{
			'recipe(/:id)':'recipe',		
			'ingredient(/:id)':'ingredient',		
			'unit(/:id)':'unit',		
		}

	});

	var router = new Router();

	router.on('route', function (section, params) {
		
		require(['views/' + section + '.view'], function (view) {		

			if(params[0]){
				view.trigger('load', params[0]);				
			}	else{
				view.trigger('load');
			}
		});
		
	});

	Backbone.history.start();

	return router;

});