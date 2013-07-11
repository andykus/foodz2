define(['backbone'], function(Backbone){	

	Backbone.Model.prototype._fetch = function(){
		Backbone.Model.prototype.fetch.call(this, {success: $.proxy(function(){
			this.trigger('fetched');
		}, this)});
	};

	Backbone.Model.prototype._save = function(attrs){
		Backbone.Model.prototype.save.call(this, attrs, {success: $.proxy(function(){
			this.trigger('saved');
		}, this)});
	};	

	Backbone.Model.prototype._destroy = function(){
		Backbone.Model.prototype.destroy.call(this, {success: $.proxy(function(){
			this.trigger('destroyed');
		}, this)});
	};
	
});