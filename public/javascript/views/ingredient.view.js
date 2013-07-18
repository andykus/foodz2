define(['backbone', 'models/ingredient.model'], function(Backbone, ingredientModel){

	var IngredientView = Backbone.View.extend({

		id: "ingredient-view",
		model: ingredientModel,

		initialize: function(){
			this.on('load', this.loadView, this);
			this.model.on('fetched', this.render, this);
		},

		loadView: function(id){		
			var form = new this.Form({
				formName: 'ingredient-form',
				$el: this.$el,
				fields: [
				[
					{
						property: 'ingredient',  // Model property name
						label: 'Namn',
						type: 'text', // Input type
						placeHolder: 'Ingrediens',
						maxLength: 200,
					}
				],
				[
					{
						type: 'button', // Input type
						classes: ['js-ingredient-form-save'],
						value: 'Spara ingrediens'
					}
				]
				]}, this.model);		
		},

		render: function(){
			// TODO get some template stuffs
		},

		events: {
			'click .js-ingredient-form-save' : 'saveIngredient'
		},

		saveIngredient: function(){
			this.model._save();
		}
	});

	return new IngredientView();
});