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
		$("#registerStudent").validate({
			rules: {
				studentfullname: {
					required: true
				},
				parentfullname: {
					required: true
				},
				studentmobileno: {
					required: true
				},
				gender: {
					required: true
				},
				firstchoice: {
					required: true
				},
				secondchoice: {
					required: true
				},
				thirdchoice: {
					required: true
				},
				catagory: {
					required: true
				}
			},
			messages: {
				studentfullname: {
					required: "Student Name Required"
				},
				parentfullname: {
					required: "Parents Name Required"
				},
				studentmobileno: {
					required: "Mobile Number Required"
				},
				gender: {
					required: "Select Gender"
				},
				firstchoice: {
					required: "Choice Required"
				},
				secondchoice: {
					required: "Choice Required"
				},
				thirdchoice: {
					required: "Choice Required"
				},
				catagory: {
					required: "Select Category"
				}
			},
			errorElement: 'div',
			errorLabelContainer: '.validationmsg'
		});
});