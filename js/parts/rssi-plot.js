var Y = [-62, -62, -62, -65, -62, -62, -59, -64, -63, -65, -59, -63, -59, -63, -63, -59, -62, -59, -62, -62, -63, -58, -62, -62, -58, -63, -59, -58, -62, -64, -65, -64, -63, -62, -62, -63, -62, -63, -62, -59, -58, -65, -64, -62, -62, -59, -59, -65, -58, -63, -63, -59, -63, -58, -58, -57, -65, -62, -62, -64, -63, -62, -65, -63, -64, -59, -65, -62, -65, -62, -63, -62, -63, -59, -59, -59, -58, -62, -62, -62, -59, -63, -65, -62, -58, -65, -59, -63, -63, -65, -59, -62, -59, -59, -65, -65, -59, -65, -59, -64, -64, -59, -65, -58, -62, -65, -62, -58, -62, -62, -59, -62, -59, -59, -59, -59, -65, -62, -59, -63, -64, -63, -62, -62, -59, -59, -62, -63, -62, -63, -59, -59, -63, -59, -65, -63, -63, -58, -64, -65, -59, -62, -62, -59, -59, -59, -58, -58, -65, -62, -65, -65, -63, -62, -59, -58, -59, -62, -63, -65, -62, -65, -57, -62, -59, -58, -63, -58, -58, -59, -58, -63, -59, -59, -59, -63, -59, -58, -63, -59, -59, -59, -59, -62, -59, -63, -63, -58, -62, -59, -59, -62, -57, -62, -59, -62, -59, -62, -59, -62, -63, -62, -59, -63, -59, -59, -65, -59, -59, -70, -59, -59, -65, -62, -62, -64, -57, -65, -63, -62, -59, -62, -62, -59, -59, -62, -59, -63, -62, -63, -65, -62, -65, -62, -62, -59, -62, -64, -59, -63, -59, -58, -62, -59, -59, -59, -64, -58, -62, -65, -63, -63, -63, -62, -62, -65, -65, -63, -62, -63, -65, -63, -62, -63, -62, -59, -59, -64, -62, -64, -59, -62, -59, -59, -63, -62, -63, -63, -59, -62, -65, -57, -59, -63, -63, -64, -63, -59, -64, -58, -62, -63, -63, -60, -62, -57, -63, -62, -59, -62, -59, -65, -59, -63, -58, -62, -58, -62, -59, -62, -65, -62, -59, -59, -62, -59, -62, -59, -59, -62, -65, -65, -62, -62, -59, -62, -59, -65, -63];

Reveal.addEventListener('rssi-plot', function() {
	$('#rssi-chart').highcharts({
        title: {
            text: 'Signal Strength at constant distance',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Signal strength (RSSI) in mdB'
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
            valueSuffix: 'mdB'
        },
        series: [{
            name: 'RSSI at 60cm',
            data: Y
        }]
    });
});
