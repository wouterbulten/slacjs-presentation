var dist = Y.map(function(rssi) {
	return Math.pow(10, (rssi + 62) / (-10 * 2));
});

var sum = dist.map(function(d) {
	return Math.abs(d - 1);
})
.reduce(function(total, d) {
	return total + d;
});

console.log(sum / dist.length);

Reveal.addEventListener('dist-plot', function() {
	$('#dist-chart').highcharts({
        title: {
            text: 'Predicted distance',
            x: -20 //center
        },
        yAxis: {
            title: {
                text: 'Distance in meters'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#be311a'
            }]
        },
		chart: {
			animation: {
				duration: 20000
			}
		},
		legend: {
			enabled: false
		},
        tooltip: {
            valueSuffix: 'm'
        },
        series: [{
            name: 'Predicted distance at 100cm',
            data: dist
        },
		{
			name: 'True distance',
			data: [[0,1], [330, 1]]
		}]
    });
});
