"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-02

      Project to convert between celsius and fahrenheit
      Author: 
      Date:   

      Filename: project12-02.js
*/

$( () => {
	$("#cValue").change( e => {
		var celsius = $(this).val();
		var fahrenheit = 1.8 * celsius + 32;
		$("#fValue").val(fahrenheit.toFixed(0));
	});
	$("#fValue").change( e => {
		var fahrenheit = $(this).val();
		var celsius = (fahrenheit - 32) / 1.8;
		$("#cValue").val(celsius.toFixed(0));
	});
});