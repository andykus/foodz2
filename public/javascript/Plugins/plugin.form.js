define(['text!../../templates/form.main.handlebars','text!../../templates/form.field.handlebars', 'text!../../templates/form.textarea.handlebars', 'handlebars'], function(formTemplate, formFieldTemplate, textarea, Handlebars){

	var FormPlugin = function(options, model){
		this.generateForm(options);
		this.bindForm(options.$el, model);
	};



/**
 * Binds the changes on the form to the model
 * @param  {Object} $el JQuery object representing the container of the form.
 * @param  {Object} model The model to bind the form to
 * @return {Object} Returns the plugin itself for chaining.
 */
FormPlugin.prototype.bindForm = function($el, model){
	var property;
	var $field;

	$el.find('form :input').each(function(){					
		$(this).change(function(){
			$field = $(this);
			property = $field.attr('id').split('-').pop();
			model.set(property, $field.val());
		});
	});

	return this;
},


/**
 * 
 * @param  {Object} options Object containing form settings
 * @return {Object} Returns the plugin itself for chaining.
 */
FormPlugin.prototype.generateForm = function(options){

	Handlebars.registerHelper('formFields', function(context, options){
			// Temporary parent div. Needed to get the complete html for 
			// the created div's as text 
			var $html = $('<div>');
			var fields = context.fields;
			var template;
			var rowHtml = '';
			var form;
			var formHtml;
			var templateMap = {
				defaultTemplate: formFieldTemplate, 
				select: '',
				textarea: textarea
			};

			for(var i = 0; i < fields.length; i++){	// Loop field rows
				for(var k = 0; k < fields[i].length; k++){ // Loop 'field cols'
					template = templateMap[fields[i][k].type] || templateMap['defaultTemplate'];
				template = Handlebars.compile(template);
				_.extend(fields[i][k], {formName: context.formName})
				rowHtml += template(fields[i][k]);
			}

				// Append the actual row content to the temporary div
				$('<div>', {class: fields[i].length > 1 ? 'controls controls-row' : 'controls'})
				.html(rowHtml)
				.appendTo($html);

				rowHtml = '';
			}

			return $html.html();
		});

	form = Handlebars.compile(formTemplate);
	formHtml = form(options);
	options.$el.html(formHtml);

	return this;
};

return FormPlugin;
});