define(['backbone', 'plugins/plugin.form', 'env/router'], function(Backbone, Form, router){

	Backbone.View.prototype.Form = Form;	

	Backbone.View.prototype.cleanUp = function(){
		this.remove();
	};	

	Backbone.View.prototype.navigateTo = function(url){
		if(url && url.split('/')[0] !== Backbone.history.fragment){
			this.cleanUp();
			router.navigate(url, {trigger: true});
		}
	}


	return Backbone.View;
});