define(['backbone', 'models/home'], function(Backbone, homeModel){

	var HomeView = Backbone.View.extend({

		el: "#content",
		model: homeModel,

		initialize:function(){
			this.on('load', this.loadView, this);
			this.template = _.template($('#home-template').html(), {});
		},

		loadView: function(){
			console.log('loaded');
			this.$el.html(this.template);
			azerbadjan // TODO FIXA ROUTES!
			homeModel.fetch();
		}
	});

	return new HomeView();
});