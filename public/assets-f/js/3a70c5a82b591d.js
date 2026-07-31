(function( $ ) {
	$.fn.Page_AccuCMSForm = function() {
		var $form = $(this);

		if(!$form.data("initialized")) {
			AccuCMSForm_Init($form);
		}

		function AccuCMSForm_Init($form) {
			$form.data("initialized", true)
			$form.attr("onSubmit", "");

			$form.find('.form_email_control').inputmask({alias: "email", "clearIncomplete": true, "showMaskOnHover":false });
			$form.find('.form_phone_control').attr("data-inputmask-regex", "[0-9()+-]{25}").inputmask("Regex", {"clearIncomplete": false, "showMaskOnHover":false });
			$form.find(".form_date_control").inputmask({alias: "mm/dd/yyyy", "clearIncomplete": true, "showMaskOnHover":false });
			$form.find(".form_date_control").datepicker({changeMonth: true, changeYear: true, showOtherMonths: true, selectOtherMonths: true});
			$form.find('.form_time_control').inputmask({ alias: "hh:mm t", "clearIncomplete": true, "showMaskOnHover":false, "hourFormat": 12});

			$form.prepend('<div style="display:none;" class="text-start mb form_status alert alert-success"></div>');
			$form.prepend('<div style="display:none;" class="text-start mb form_error alert alert-danger"></div>');
			$form.find(".frm_submit_btn").after('<button type="button" class="btn btn-primary frm_loading_btn" onClick="javascript:void(0)" style="display:none;">Submitting <span class="icon-last fas fa-spinner fa-pulse"></span></button>');

			$form.$formStatus = $form.find(".form_status");
			$form.$formError = $form.find(".form_error");
			$form.$formSubmitButton = $form.find(".frm_submit_btn");
			$form.$formLoadingButton = $form.find(".frm_loading_btn");
			$form.$recaptchaKey = $form.find("input[name='recaptcha_key']");
			$form.$recaptchaToken = $form.find("input[name='recaptcha_token']");

			$form.ShowStatus = function($obj, msg){
				$form.$formLoadingButton.hide();
				$form.$formSubmitButton.show();
				$obj.html(msg).show();
				ScrollToAnchor("#"+$form.attr("id"));
			}

			$form.SaveData = function(){
				var $inputs = $('input[type="file"]:not([disabled])', $form); //select input files
		    	$inputs.each(function(_, input) {
   			    	if (input.files.length > 0) return ;
	       			$(input).prop('disabled', true) //if the input doesn't have uploaded files will be disable - safari bugfix
			    })

    			var formData = new FormData($form[0]);// create the form data
		    	$inputs.prop('disabled', false);//

				$form.$formStatus.html("").hide();
				$form.$formError.html("").hide();
				$form.$formSubmitButton.hide();
				$form.$formLoadingButton.show();	

				$.ajax({
					type   : "POST",
					cache  : false,
					contentType: false,
					processData: false,
					url    : $form.attr("action"),
					data   : formData,
					dataType: "json",
					success: function (data) {
						setTimeout(function(){
							if (data.status=="1") {
								$form.clearForm();
								if (data.redirect_url != "") {
									window.location.href = data.redirect_url;
								} else {
									$form.ShowStatus($form.$formStatus, data.msg);
								}
							} else {
								$form.ShowStatus($form.$formError, data.msg);
							}
						}, 400); 
					},
					error: function(jqxhr, status, errorMsg) {
						setTimeout(function(){
							$form.ShowStatus($form.$formError, "Internal Error");
						}, 400); 
					}
				});
			}

			$form.submit(function(e){
				e.preventDefault();

				if($form.$recaptchaKey.length){
					grecaptcha.ready(function() {
						grecaptcha.execute($form.$recaptchaKey.val(), {action: 'submit'}).then(function(token) {
							$form.$recaptchaToken.val(token);
							$form.SaveData();
						});
					});
				}else{
					$form.SaveData();
				}
			});
		}

	}
})(jQuery);

$(document).ready(function(){
	$("form[data-cms-form=true]").each(function(){
		$(this).Page_AccuCMSForm();
	});
});
