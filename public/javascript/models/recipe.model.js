define(['backbone'], function(Backbone){
	
	var RecipeModel = Backbone.Model.extend({

		url: function(){
			return this.get('id') ? 'recipe/'  + this.get('id') : 'recipe';
		}

	});

	return new RecipeModel();

});