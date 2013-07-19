define(['backbone'], function(Backbone){

	var view;
	var Router = Backbone.Router.extend({

		routes:{
			':view(/:id)': 'loadView'
			// 'recipe(/:id)':'recipe',		// TODO so yeah, I changed this. Thinking of changing it back again. Matches frikkin everything.
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
			require(['views/' + viewName + '.view', 'plugins/viewmanager'], function (View, viewManager) {		
				view = new View(); // TODO Tell Andreas that the events where removed when the remove() function runned and maybe it's good that the contructor runs
				// and sets all events again each time the view is loaded 
				viewManager.show(view, id);
			});
			
		});

	Backbone.history.start();

	return router;

});