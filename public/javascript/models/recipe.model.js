define(['backbone', 'models/recipeingredient.model'], function(Backbone, recipeIngredient){
	
	var RecipeModel = Backbone.RelationalModel.extend({

		defaults: {
			title: 'Testar testfallen'
		},

		// relations: [{
		// 	type: Backbone.HasMany, 
		// 	key: 'recipeIngredients',
		// 	relatedModel: recipeIngredient,
		// 	collectionType: 'RecipeIngredientCollection',
		// 	reverseRelation: {
		// 		key: 'recipeId', 
		// 		includeInJSON: 'id'
		// 	}
		// }],

		url: function(){
			return this.get('id') ? 'recipe/'  + this.get('id') : 'recipe';
		}

	});

	return new RecipeModel();

});