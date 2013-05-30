define(['backbone'], function(Backbone){

	var Foodz = {};

	var LibraryModel = Backbone.Model.extend({

			views: new Backbone.Collection()
		})

	Foodz.library = new LibraryModel();

	return Foodz;
});



