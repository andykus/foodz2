define(['backbone', 'models/recipe.model', 'text!../../templates/view.recipe.handlebars'], function(Backbone, recipeModel, template){

	var RecipeView = Backbone.View.extend({

		id: "recipe-view",
		model: recipeModel,
		template: template,

		initialize: function(){
			this.model.on('fetched', this.render, this);
		},

		waitThereIsMore: function(id){		
			var form = new this.Form({
				formName: 'recipe-form',
				$el: this.$el.find('.recipe-form-wrapper'),
				fields: [
				[
				{
						property: 'title',  // Model property name
						niceName: 'Titeln',
						label: 'Titel',
						type: 'text', // Input type
						placeHolder: 'Receptets namn',
						maxLength: 200,
						dataType: 'string'
					}
					],
					[
					{
						property: 'description',  // Model property name
						niceName: 'Utförandet',
						label: 'Utförande',
						type: 'textarea', // Input type
						placeHolder: 'Gör så här .. ',
						maxLength: 255,
						dataType: 'string',
						cols: 50, // TODO this is not responsive
						rows: 7		
					},
					],
					[
					{
						property: 'temperature',  // Model property name
						niceName: 'Temperaturen',
						label: 'Ange ugnstemperatur',
						type: 'text', // Input type
						placeHolder: 'Temperatur',
						maxLength: 3,
						dataType: 'integer'			
					}
					],
					[
					{
						property: 'time',  // Model property name
						niceName: 'Tiden',
						label: 'Tidsuppskattning',
						type: 'text', // Input type
						placeHolder: 'Tiden',
						maxLength: 3,
						dataType: 'float',					
					}
					],

					[
					{
						type: 'button', // Input type
						classes: ['foodz-btn'],
						value: 'Spara'
					}
					]
					]});		
}
});

return RecipeView;
});