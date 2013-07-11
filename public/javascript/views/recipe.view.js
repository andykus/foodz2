define(['backbone', 'models/recipe.model'], function(Backbone, recipeModel){

	var RecipeView = Backbone.View.extend({

		el: "#content",
		model: recipeModel,

		initialize: function(){
			this.on('load', this.loadView, this);
			this.model.on('fetched', this.render, this);
		},

		loadView: function(id){		
			var form = new this.Form({fields: [
				{
					property: 'title',  // Model property name
					niceName: 'Titeln',
					label: 'Titel',
					type: 'text', // Input type
					placeHolder: 'Mitt fält',
					maxLength: 200,
					dataType: 'string',
					dataFormatter: '',
					classes: ['foodz']
				}
				]});		

			recipeModel.set('id', id)		
			recipeModel._fetch();
		},

		render: function(){
		}
	});

	return new RecipeView();
});