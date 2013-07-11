define(['backbone', 'plugins/plugin.form'], function(Backbone, Form){

	Backbone.View.prototype.Form = Form;

	return Backbone.View;
});