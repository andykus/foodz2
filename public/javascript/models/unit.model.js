define(['backbone'], function(Backbone){
	
	var UnitModel = Backbone.Model.extend({

		url: function(){
			return this.get('id') ? 'unit/'  + this.get('id') : 'unit';
		}

	});

	return new UnitModel();

});