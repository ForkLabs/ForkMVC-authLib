/* -----------------
 *	Auth.JS
 * -----------------
 *
 * Author: 	Devontrae M. Walls
 * Company: ForkLabs, LLC | http://forklabsllc.com
 * Contact: devontrae@gmail.com
 *
 * --------------- */

 var Authenticate = function() {
 	// The constructor
 };

 Authenticate.prototype.submit_login = function() {
 	// Get the form data
 	var token_value = $('#memberBox-login_form-token').val();
 	var username = $('#memberBox-login_form-username').val();
 	var password = $('#memberBox-login_form-password').val();

 	$.ajax({
	  type: "POST",
	  url: "auth/login",
	  dataType: "json",
	  data: { username: username, password: password, token: token_value }
	})
	  .done(function( msg ) {
	    console.log( msg );
	    if(msg.status == 'SUCCESS') {
	    	document.cookie = msg.cookie;
		  	// We redirect here
		  	window.location = '/user/';
	    } else {
	    	console.log('Login Failed.');
	    }
	  });
 };

 Authenticate.prototype.destroy_session = function() {
 	$.get('/auth/logout', function(data) {
 		// We use the data as the new cookie
 		document.cookie = data;
 	});
 };

 var auth = new Authenticate();
