var dist = Y.map(function(rssi) {
	return Math.pow(10, (rssi + 62) / (-10 * 2));
});

var distData = {
	labels: dist.map(function(y, i) {
		return i;
	}),
	datasets: [
		{
			label: 'RSSI measurements at 1m',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: '#A3BBBF',
			pointColor: '#1AA7BE',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: dist
		}
	]
};

Reveal.addEventListener('ready', function() {

	var ctx = $('#chart-dist').get(0).getContext('2d');
	var line = new Chart(ctx).Line(distData, {
		scaleShowGridLines: true,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		datasetStrokeWidth: 5,
		pointDotRadius: 6
	});
});
