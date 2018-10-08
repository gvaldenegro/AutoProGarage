(function ($) {
	
	"use strict";

	var $document = $(document),
		$window = $(window),
		forms = {
			contactForm: $('#contactform'),
			appointmentForm: $('#appointment-form') ,
      quoteForm: $('#quote-form')
		};

	$document.ready(function () {
   
    // quote form
		if (forms.quoteForm.length) {
			var $quoteForm = forms.quoteForm;
			$quoteForm.validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					message: {
						required: true,
						minlength: 20
					},
					email: {
						required: true,
						email: true
					}

				},
				messages: {
					name: {
						required: "Please enter your name",
						minlength: "Your name must consist of at least 2 characters"
					},
					message: {
						required: "Please enter message",
						minlength: "Your message must consist of at least 20 characters"
					},
					email: {
						required: "Please enter your email"
					}
				},
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "form/process-quote.php",
						success: function () {
							$('#successQuote').fadeIn();
							$('#quote-form').each(function () {
								this.reset();
							});
						},
						error: function () {
							$('#quote-form').fadeTo("slow", 0, function () {
								$('#errorQuote').fadeIn();
							});
						}
					});
				}
			});
		}
    
    
		// appointment form
		if (forms.appointmentForm.length) {
			var $appointmentForm = forms.appointmentForm;
			$appointmentForm.validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					lastname: {
						required: true,
						minlength: 2
					},
					phone: {
						required: true,
						minlength: 2
					},
					message: {
						required: true,
						minlength: 20
					},
					email: {
						required: true,
						email: true
					},
					date: {
						required: true
					},
					time: {
						required: true
					},
					autoinfo: {
						required: true
					},
					year: {
						required: true
					},
					kilometers: {
						required: true
					}
				},
				messages: {
					name: {
						required: "Por favor, escriba su nombre",
						minlength: "Su nombre debe constar de al menos 2 caracteres"
					},
					lastname: {
						required: "Por favor, escriba sus apellidos",
						minlength: "Sus apellidos deben constar de al menos 2 caracteres"
					},
					message: {
						required: "Por favor, escriba su mensaje",
						minlength: "Su mensaje debe constar de al menos 20 caracteres"
					},
					email: {
						required: "Por favor, escriba su correo electrónico",
						email: "Por favor, ingrese un correo electrónico valido"
					},
					phone: {
						required: "Por favor, escriba su teléfono"
					},
					date: {
						required: "Por favor, seleccione la fecha"
					},
					time: {
						required: "Por favor, seleccione la hora"
					},
					autoinfo: {
						required: "Por favor, escriba la marca y modelo del vehículo"
					},
					year: {
						required: "Por favor, escriba el año del vehículo"
					},
					kilometers: {
						required: "Por favor, escriba los kilómetros del vehículo"
					}
				},
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "form/process-appointment.php",
						success: function () {
							$('#successAppointment').fadeIn();
							$('#appointment-form').each(function () {
								this.reset();
							});
						},
						error: function () {
							$('#appointment-form').fadeTo("slow", 0, function () {
								$('#errorAppointment').fadeIn();
							});
						}
					});
				}
			});
		}

		// contact page form
		if (forms.contactForm.length) {
			var $contactform = forms.contactForm;
			$contactform.validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true,
						minlength: 2
					},
					message: {
						required: true,
						minlength: 20
					}

				},
				messages: {
					name: {
						required: "Por favor, escriba su nombre",
						minlength: "Su nombre debe constar de al menos 2 caracteres"
					},
					message: {
						required: "Por favor, escriba su mensaje",
						minlength: "Su mensaje debe constar de al menos 20 caracteres"
					},
					email: {
						required: "Por favor, escriba su correo electrónico",
						email: "Por favor, ingrese un correo electrónico valido"
					},
					phone: {
						required: "Por favor, escriba su teléfono"
					}

				},
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "form/process-contact.php",
						success: function () {
							$('#success').fadeIn();
							$('#contactform').each(function () {
								this.reset();
							});
						},
						error: function () {
							$('#contactform').fadeTo("slow", 0, function () {
								$('#error').fadeIn();
							});
						}
					});
				}
			});
		}
		// datepicker
			if ($('.datetimepicker').length) {
				$('.datetimepicker').datetimepicker({
					format: 'DD/MM/YYYY',
					icons: {
						time: 'icon icon-clock',
						date: 'icon icon-calendar',
						up: 'icon icon-arrow_up',
						down: 'icon icon-arrow_down',
						previous: 'icon icon-arrow-left',
						next: 'icon icon-arrow-right',
						today: 'icon icon-today',
						clear: 'icon icon-trash',
						close: 'icon icon-cancel-music'
					}
				});
			}
			if ($('.timepicker').length) {
				$('.timepicker').datetimepicker({
					format: 'LT',
					icons: {
						time: 'icon icon-clock',
						up: 'icon icon-arrow_up',
						down: 'icon icon-arrow_down',
						previous: 'icon icon-arrow-left',
						next: 'icon icon-arrow-right'
					}
				});
			}

	});
	
})(jQuery);