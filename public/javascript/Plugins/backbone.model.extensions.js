define(['backbone'], function(Backbone){	

	// Backbone.Model.extend({
	// 	fetch: function(){
	// 		Backbone.Model.prototype.fetch.call(this).complete(function(){
	// 			this.trigger('fetched');
	// 		});
	// 	}
	// });

	Backbone.Model.prototype.fetch = function(){
		
			Backbone.Model.prototype.fetch.call(this).complete(function(){
				this.trigger('fetched');
			});		
	}
});