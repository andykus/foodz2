define(['backbone'], function(Backbone){
	
	var UnitModel = Backbone.RelationalModel.extend({

		url: function(){
			return this.get('id') ? 'unit/'  + this.get('id') : 'unit';
		}

	});

	return new UnitModel();

});