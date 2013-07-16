define(['backbone'], function(Backbone){
	
	var IngredientModel = Backbone.Model.extend({

		url: function(){
			return this.get('id') ? 'ingredient/'  + this.get('id') : 'ingredient';
		}

	});

	return new IngredientModel();

});