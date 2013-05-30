define(['backbone'], function(Backbone){
	
	var OtherView = Backbone.View.extend({

		el: '#home',

		initialize:function(){
			this.on('load', this.loadView, this);
		},

		loadView: function(){
			console.log('loaded OtherView');
		}
	});

	return new OtherView();
});