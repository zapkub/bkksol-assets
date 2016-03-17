var FormValidation = function () {
    var handleValidation = function() {
        var form = $('#form');
        var error = $('.alert-danger', form);
        var success = $('.alert-success', form);

        //IMPORTANT: update CKEDITOR textarea with actual content before submit
        form.on('submit', function() {
            for(var instanceName in CKEDITOR.instances) {
                CKEDITOR.instances[instanceName].updateElement();
            }
        })

        form.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            rules: {
                page_name: {
                    minlength: 2,
                    required: true
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit
                success.hide();
                error.show();
                Metronic.scrollTo(error, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success.show();
                error.hide();
                form[0].submit(); // submit the form
            }

        });
    }
    return {
        //main function to initiate the module
        init: function () {
            handleValidation();
        }

    };

}();