define(['backbone', 'models/unit.model', 'text!../../templates/view.unit.handlebars'], function(Backbone, unitModel, template){

	var UnitView = Backbone.View.extend({

		id: "unit-view",
		model: unitModel,
		template: template, 

		initialize: function(){			
			this.model.on('fetched', this.render, this);			
		},

		waitThereIsMore: function(id){		
			var form = new this.Form({
				formName: 'unit-form',
				$el: this.$el.find('.unit-form-wrapper'),
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

				return this;		
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

	return UnitView;
});