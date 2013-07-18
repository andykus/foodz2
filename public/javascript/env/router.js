define(['backbone'], function(Backbone){

	var Router = Backbone.Router.extend({

		routes:{
			':view(/:id)': 'loadView'
			// 'recipe(/:id)':'recipe',		
			// 'ingredient(/:id)':'ingredient',		
			// 'unit(/:id)':'unit',		
		}

	});

	var router = new Router();

	// router.on('route', function (section, params) {
		
	// 	require(['views/' + section + '.view', 'plugins/viewmanager'], function (view, viewManager) {		
	// 		if(params[0]){
	// 			view.trigger('load', params[0]);				
	// 		}	else{
	// 			view.trigger('load');
	// 		}
	// 	});
		
	// });

	router.on('route:loadView', function (viewName, id) {
		
		// TODO what happens if the view doesn't exist? 
		require(['views/' + viewName + '.view', 'plugins/viewmanager'], function (view, viewManager) {		

			viewManager.show(view);
		});
		
	});

	Backbone.history.start();

	return router;

});