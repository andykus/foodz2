// All cred goes to Derick Bailey at http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
define(['backbone'], function(Backbone){

	var ViewManager = function(){
		var currentView;
		var el = "#container-view";
		var view = {};

		var closeView = function(view){
			if(view && view.close){
				view.close();
			}
		};

		var openView = function(view){
			view.render();
			$(el).html(view.el);
			view.delegateEvents();
			if(view.loadView){
				view.loadView();
			}
		};

		view.show = function(view){
			closeView(currentView);
			currentView = view;
			openView(currentView);
		};

		return view;
	};

	return new ViewManager();
});