define(['backbone', 'models/recipeingredient.model'], function(Backbone, recipeIngredient){
	
	var IngredientModel = Backbone.RelationalModel.extend({
		relations: [{
			type: Backbone.HasMany, 
			key: 'recipeIngredients',
			relatedModel: recipeIngredient,
			collectionType: 'RecipeIngredientCollection',
			reverseRelation: {
				key: 'recipeId', 
				includeInJSON: 'id'
			}
		}],
		url: function(){
			return this.get('id') ? 'ingredient/'  + this.get('id') : 'ingredient';
		}

	});

	return new IngredientModel();

});