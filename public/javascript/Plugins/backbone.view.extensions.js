define(['backbone', 'handlebars', 'plugins/plugin.form', 'env/router'], function(Backbone, Handlebars, Form, router){

	Backbone.View.prototype.Form = Form;	


	/**
	 * Navigates to the view submitted as argument
	 * @param  {[type]} url [description]
	 * @return {Object} Returns the view itself for chaining.
	 */
	Backbone.View.prototype.navigateTo = function(url){
		if(url && url.split('/')[0] !== Backbone.history.fragment){			
			router.navigate(url, {trigger: true});
		}

		return this;
	};

	/**
	 * Calls stopListening to remove any bound events that the view has listenTo'd.
	 * @return {Object} Returns the view itself for chaining.
	 */
	 Backbone.View.prototype.close = function(){

	 	this.stopListening();

	 	return this;
	 };


	/**
	 * If the view is requested with a parameter 'id' fetch the model with that id and call render on 
	 * the view when the model is fetched. If no parameter 'id' is submitted call render on the view immediatly. 
	 * @param  {string} id Id on the model connected to the view. 
	 * @return {Object} Returns the view itself for chaining.     
	 */
	 Backbone.View.prototype.loadView = function(id){
	 	if(id){
	 		this.model.set('id', id);
 			this.model.fetch();
	 	}else{
	 		this.render();
	 	}

	 	return this;
	 };


	 /**
	  * Appends the views' template to this.$el. 
	  * @return {Object} Returns the view itself for chaining.
	  */
	 Backbone.View.prototype.render = function(){
 		var compiledTemplate = Handlebars.compile(this.template); 

 		this.$el.html(compiledTemplate(this.model || {}));	 
 		if(this.waitThereIsMore){
 			this.waitThereIsMore();
 		}		
 		this.trigger('rendered', this);	 			 	

	 	return this;
	 };


 return Backbone.View;
});