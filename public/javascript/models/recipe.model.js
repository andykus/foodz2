define(['backbone'], function(Backbone){
	
	var RecipeModel = Backbone.Model.extend({

		url: function(){
			return 'recipe/show/1';
		}

	});

	return new RecipeModel();

});