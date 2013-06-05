define(['backbone', 'models/recipe'], function(Backbone, recipeModel){

	var RecipeView = Backbone.View.extend({

		el: "#content",
		model: recipeModel,

		initialize:function(){
			this.on('load', this.loadView, this);
			this.template = _.template($('#recipe-template').html(), {});
		},

		loadView: function(){
			console.log('loaded');
			this.$el.html(this.template);			
			recipeModel.fetch();
		}
	});

	return new RecipeView();
});