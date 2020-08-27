"use strict";

/*
 * Aman Modi
 * HackAThon Back2School Project
 * 8/27
 */

	$("#home").click(function () {
		window.location = "index.html";
	});
	$("#information").click(function () {
		window.location.href = "information.html";
	});

	$("#reach").click(function () {
		window.location = "reach.html";
	});
	$("#contact").click(function () {
		window.location = "contact.html";
	});



function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearForm() {
	$('#msg').html('');
	$('#name').val('');
	$('#email').val('');
	$('#subject').val('');

}

function validate() {
	var errorMessage = "";
	var firstNameInput = $('#name').val().trim();
	var email1 = $('#email').val().trim();
	var message = $('#subject').val().trim();

	if(firstNameInput === "")
		errorMessage += "Name cannot be empty.<br>";
	if(!(validEmail(email1)))
		errorMessage += "Your email is not valid.<br>";
	if(message === "")
		errorMessage += "Message cannot be empty.<br>";
	return errorMessage;		

}

$(document).ready(function () {


	$("#submit").click(function () {
		var errorMessage = validate();
		if(errorMessage === ""){
			clearForm();
			$('#msg').html("Message sent to your school faculty");
		}
		else
			$('#msg').html(errorMessage);
	});


});
