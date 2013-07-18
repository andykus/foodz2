define(['backbone', 'models/ingredient.model', 'text!../../templates/view.ingredient.handlebars'], function(Backbone, ingredientModel, template){

	var IngredientView = Backbone.View.extend({

		id: "ingredient-view",
		model: ingredientModel,
		template: template,

		initialize: function(){
			this.on('load', this.loadView, this);
			this.model.on('fetched', this.render, this);			
		},

		waitThereIsMore: function(id){					
			var form = new this.Form({
				formName: 'ingredient-form',
				$el: this.$el.find('.ingredient-form-wrapper'),
				fields: [
				[
					{
						property: 'ingredient',  // Model property name
						label: 'Ny ingrediens',
						type: 'text', // Input type
						placeHolder: 'entrecote, mjöl, mjölk etc.',
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

			return this;
		},


		events: {
			'click .js-ingredient-form-save' : 'saveIngredient'
		},

		saveIngredient: function(){
			this.model._save();

			return this;
		}
	});

	return IngredientView;
});