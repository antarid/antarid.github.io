
/*global $:false */
/*global window: false */

(function(){
  "use strict";


	$(document).ready(function($) {

	// hide messages 
		
		// on submit...
		$("#contactForm #submit").click(function() {
					
			//required:
			
			//name
			var name = $("#contactForm input#name").val();
			var name_base = 'Provide Valid Name';

			//email (check if entered anything)
			var email = $("#contactForm input#email").val();
			var email_base = 'Provide Valid E-mail';
			//email (check if entered anything)

			// comments
			var comments = $("#contactForm #msg").val();
			var comments_base = 'Message must not be empty';


			function isValidEmailAddress(emailAddress) {
			    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
			    return pattern.test(emailAddress);
			}

			if(name == ""){
				$("#contactForm input#name").focus();
				$('#contactForm input#name').attr('placeholder',name_base);
				$('#contactForm input#name').addClass('error-msg');
				return false;
			}
			else if(email == ""){
				//$("#error").fadeIn().text("Email required");
				$("#contactForm input#email").focus();
				$('#contactForm input#email').attr('placeholder',email_base);
				$('#contactForm input#email').addClass('error-msg');
				return false;
			}
			else if (email != "") {  // If something was entered
				if (!isValidEmailAddress(email)) {
					$("#contactForm input#email").focus();
					$('#contactForm input#email').val('');
					$('#contactForm input#email').attr('placeholder',email_base);
					$('#contactForm input#email').addClass('error-msg');
					return false;  
				}
			} 
			if(comments == ""){
				$("#contactForm #msg").focus();
				$('#contactForm #msg').attr('placeholder',comments_base);
				$('#contactForm #msg').addClass('error-msg');
				return false;
			}
			else{
				
				return true;
			}
			
		});  
			
			
		// on success...
		 function success(){
		 	$("#success").fadeIn();
		 	$("#contactForm").fadeOut();
		 }

	});

})();

