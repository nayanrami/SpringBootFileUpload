$(function() {
	$("#loginform").validate({
		rules: {
			id: {
				required: true
			},
			password: {
				required: true
			}
		},
		messages: {
			id: {
				required: "Username Required "
			},
			password: {
				required: "\n Password Required"
			}
		},
		errorLabelContainer: '.validationmsg'
	}),
		$("#alumni_form_process").validate({
			rules: {
				Enrolment_Number: {
					required: true
				}
			},
			messages: {
				Enrolment_Number: {
					required: "Please Select Enrollment Number"
				}
			},
			errorElement: 'div',
			errorLabelContainer: '.errormsg'
		});
});