define(['text!../../templates/form.main.handlebars','text!../../templates/form.field.handlebars', 'handlebars'], function(formTemplate, formFieldTemplate, Handlebars){

	var FormPlugin = function(options, model){
		this.generateForm(options);
		this.bindForm(options.$el, model);
	};



/**
 * Binds the changes on the form to the model
 * @param  {[type]} $el
 * @param  {[type]} model
 * @return {[type]}
 */
FormPlugin.prototype.bindForm = function($el, model){
	$el.find('form :input').each(function(){			
		var property;
		var $field;
		
		$(this).change(function(){
			$field = $(this);
			property = $field.attr('id').split('-').pop();
			model.set(property, $field.val());
		});
	});
},


/**
 * 
 * @param  {[type]} options
 * @return {[type]}
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
				select: ''
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
};

return FormPlugin;
});