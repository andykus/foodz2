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
			view.once('rendered', appendViewToDom, this);		
			view.loadView(); 
		};
		
		var appendViewToDom = function(view){
			if(currentView.cid === view.cid){ // TODO not sure about this. I was thinking that.. if someone goes bananas on the links you prob want to load the latest view. 
				$(el).html(view.el);			
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