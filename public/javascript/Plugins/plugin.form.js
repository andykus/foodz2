define(['text!../../templates/form.main.handlebars','text!../../templates/form.field.handlebars', 'text!../../templates/form.custom.handlebars', 'handlebars'], function(formTemplate, formFieldTemplate, formCustomContent, Handlebars){

	var FormPlugin = function(options){
		this.generateForm(options);
	};

	FormPlugin.prototype.generateForm = function(options){
		var form = Handlebars.compile(formTemplate);
		// Handlebars.registerPartial('content', this.generateFields(options));
		var customContentTemplate = Handlebars.compile(formCustomContent);
		customContentHtml = customContentTemplate(this.generateFields(options));
		Handlebars.registerPartial('content', customContentHtml);
		var formHtml = form({});
		$('#content').html(formHtml);
	};

	FormPlugin.prototype.generateFields = function(options){
		var fields = options.fields;		
		var field;
		var result = {};
		result.fields = {};		

		for(var i = 0; i < fields.length; i++){
			if(!fields[i].type !== 'select'){
				field = Handlebars.compile(formFieldTemplate);
				result.fields[fields[i].property] = field(fields[i]);

			}else{
				// Create select template
			}

			return result;
		}
	}

	return FormPlugin;
});

// Bestäm hur formulär ska genereras, automatiskt/egen template/nedan
fields: [
	{property:title},
	[[{},{}], [{}, {}, {}]]
]