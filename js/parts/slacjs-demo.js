var timeBetweenSteps = 1000;

var step = function() {
	var success = SlacApp.step();

	if (success) {
		setTimeout(step, timeBetweenSteps);
	}
}

Reveal.addEventListener('slacjs-demo', function() {

	if (SlacApp.user !== undefined) {
		SlacApp.reset();
	}

	SlacApp.initialize();
	setTimeout(step, timeBetweenSteps);
});
