define(['backbone', 'models/recipe.model'], function(Backbone, recipeModel){

	var RecipeView = Backbone.View.extend({

		el: "#content",
		model: recipeModel,

		initialize:function(){
			_.templateSettings = {
			    interpolate: /\{\{\=(.+?)\}\}/g,
			    evaluate: /\{\{(.+?)\}\}/g
			};
			this.on('load', this.loadView, this);
			this.template = _.template($('#recipe').html());
			this.model.on('fetched', this.render, this);
		},

		loadView: function(id){			
			
			recipeModel.set('id', id)		
			recipeModel.fetch();
		},

		render:function(){
			var content = this.template({hej: 'tja'});
			$(this.el).html(content);

		}
	});

	return new RecipeView();
});