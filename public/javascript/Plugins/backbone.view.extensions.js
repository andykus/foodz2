define(['backbone', 'plugins/plugin.form', 'env/router'], function(Backbone, Form, router){

	Backbone.View.prototype.Form = Form;	


	Backbone.View.prototype.navigateTo = function(url){
		if(url && url.split('/')[0] !== Backbone.history.fragment){			
			router.navigate(url, {trigger: true});
		}
	}

	/**
	 * Calls stopListening to remove any bound events that the view has listenTo'd.
	 * @return {[type]} [description]
	 */
	 Backbone.View.prototype.close = function(){

	 	this.stopListening();
	 }


 return Backbone.View;
});