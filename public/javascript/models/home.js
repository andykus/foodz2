define(['backbone'], function(Backbone){
	
	var HomeModel = Backbone.Model.extend({

		url: function(){
			return 'hej/tja';
		}

	});

	return new HomeModel();

});