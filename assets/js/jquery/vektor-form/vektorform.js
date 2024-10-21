jQuery(function($) {
	$.validator.messages.required = '';
	$.validator.messages.email = '';
	
	$("#contact_us").validate({
		errorPlacement: function(error, element) {
			return false;
		},
		rules: {
			cf_name: "required",
			cf_email: {
				required: true,
				email: true
			}
		}
	});
	
	$.validator.addMethod('phone', function(value, element){
		return this.optional(element) || /^\+[0-9]{6,20}$/.test(value);
	}, '');
	
	$('.demo-form').validate({
		errorPlacement: function(error, element) {
			return false;
		},
		rules: {
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phone: true
			}
		}
	});
	
	var $currentInput;
	$('.input-wrapper').find('input, textarea').focus(function(){
		$currentInput = $(this);
		if($currentInput.val() == '')
			$currentInput.siblings('label').addClass('hidden');
	}).blur(function(){
		if($currentInput.val() == '')
			$currentInput.siblings('label').removeClass('hidden');
	});
});