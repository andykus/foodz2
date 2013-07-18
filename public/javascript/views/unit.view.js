define(['backbone', 'models/unit.model'], function(Backbone, unitModel){

	var UnitView = Backbone.View.extend({

		id: "unit-view",
		model: unitModel,

		initialize: function(){
			this.on('load', this.loadView, this);
			this.model.on('fetched', this.render, this);
		},

		loadView: function(id){		
			var form = new this.Form({
				formName: 'unit-form',
				$el: this.$el,
				fields: [
				[
					{
						property: 'unit',  // Model property name
						niceName: 'Enheten',
						label: 'Ange en enhet',
						type: 'text', // Input type
						placeHolder: 'deciliter, liter m.m.',
						maxLength: 3,
						dataType: 'string',											
					}
				],				
				[
					{
						type: 'button', // Input type
						classes: ['js-unit-form-save'],
						value: 'Spara enhet'
					}
				]
				]}, this.model);		
		},

		render: function(){
		},

		events:{
			// 'click .js-unit-form-save' : 'saveUnit'
			'click .js-unit-form-save' : 'navigate'
		},

		saveUnit:function(){
			this.model._save();
		},

		navigate:function(){ // TODO remove
			this.navigateTo('ingredient');
		}
	});

	return new UnitView();
});