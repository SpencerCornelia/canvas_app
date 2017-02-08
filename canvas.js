window.onload = function() {
	var canvas = document.getElementById("tshirtCanvas");
	if (canvas.getContext) { 
		var context = canvas.getContext("2d");
	} else {
		//no browser API support
	}	
	context.fillRect(10, 10, 100, 100);
}