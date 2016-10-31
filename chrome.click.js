setInterval(function() {
	var currentDate = new Date();
	var currentHours = currentDate.getHours() + 1;
	if ( currentHours >= 10 ) {
		document.write(currentHours);
	}
}, 1000);


