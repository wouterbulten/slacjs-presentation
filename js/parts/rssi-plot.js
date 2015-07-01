//var Y = [-62, -62, -62, -65, -62, -62, -59, -64, -63, -65, -59, -63, -59, -63, -63, -59, -62, -59, -62, -62, -63, -58, -62, -62, -58, -63, -59, -58, -62, -64, -65, -64, -63, -62, -62, -63, -62, -63, -62, -59, -58, -65, -64, -62, -62, -59, -59, -65, -58, -63, -63, -59, -63, -58, -58, -57, -65, -62, -62, -64, -63, -62, -65, -63, -64, -59, -65, -62, -65, -62, -63, -62, -63, -59, -59, -59, -58, -62, -62, -62, -59, -63, -65, -62, -58, -65, -59, -63, -63, -65, -59, -62, -59, -59, -65, -65, -59, -65, -59, -64, -64, -59, -65, -58, -62, -65, -62, -58, -62, -62, -59, -62, -59, -59, -59, -59, -65, -62, -59, -63, -64, -63, -62, -62, -59, -59, -62, -63, -62, -63, -59, -59, -63, -59, -65, -63, -63, -58, -64, -65, -59, -62, -62, -59, -59, -59, -58, -58, -65, -62, -65, -65, -63, -62, -59, -58, -59, -62, -63, -65, -62, -65, -57, -62, -59, -58, -63, -58, -58, -59, -58, -63, -59, -59, -59, -63, -59, -58, -63, -59, -59, -59, -59, -62, -59, -63, -63, -58, -62, -59, -59, -62, -57, -62, -59, -62, -59, -62, -59, -62, -63, -62, -59, -63, -59, -59, -65, -59, -59, -70, -59, -59, -65, -62, -62, -64, -57, -65, -63, -62, -59, -62, -62, -59, -59, -62, -59, -63, -62, -63, -65, -62, -65, -62, -62, -59, -62, -64, -59, -63, -59, -58, -62, -59, -59, -59, -64, -58, -62, -65, -63, -63, -63, -62, -62, -65, -65, -63, -62, -63, -65, -63, -62, -63, -62, -59, -59, -64, -62, -64, -59, -62, -59, -59, -63, -62, -63, -63, -59, -62, -65, -57, -59, -63, -63, -64, -63, -59, -64, -58, -62, -63, -63, -60, -62, -57, -63, -62, -59, -62, -59, -65, -59, -63, -58, -62, -58, -62, -59, -62, -65, -62, -59, -59, -62, -59, -62, -59, -59, -62, -65, -65, -62, -62, -59, -62, -59, -65, -63];
var Y = [-63, -66, -64, -63, -63, -63, -66, -65, -67, -58, -62, -63, -62, -62, -64, -60, -63, -64, -64, -64, -63, -64, -70, -61, -62, -62, -63, -65, -62, -86, -75, -62, -66, -65, -61, -61, -60, -66, -60, -64];

var Y30 = [-46, -50, -45, -47, -44, -47, -44, -50, -50, -50, -47, -50, -46, -44, -44, -43, -50, -46, -44, -50, -50, -50, -46, -50, -50, -50, -48, -44, -44, -47, -44, -43, -44, -47, -47, -44, -44, -46, -50, -46];
var Yroom = [-79, -74, -73, -75, -67, -60, -73, -82, -73, -80, -73, -81, -74, -75, -74, -72, -70, -78, -70, -72, -74, -71, -73, -75, -76, -74, -74, -72, -77, -76, -70, -73, -75, -77, -77, -72, -70, -74, -73, -75];
var Y60 = [-48, -48, -48, -48, -49, -49, -49, -43, -47, -47, -45, -48, -45, -49, -48, -45, -52, -45, -48, -45, -49, -48, -49, -45, -45, -49, -45, -46, -48, -45, -51, -48, -46, -44, -50, -44, -46, -45, -48, -49];
var Y100 = [-63, -66, -64, -63, -63, -63, -66, -65, -67, -58, -62, -63, -62, -62, -64, -60, -63, -64, -64, -64, -63, -64, -70, -61, -62, -62, -63, -65, -62, -86, -75, -62, -66, -65, -61, -61, -60, -66, -60, -64];
var Y300 = [-69, -71, -71, -67, -67, -70, -65, -72, -71, -73, -69, -64, -73, -73, -66, -72, -68, -69, -73, -71, -66, -66, -72, -70, -72, -66, -71, -72, -67, -74, -65, -71, -75, -66, -64, -69, -66, -72, -69, -71];



var rssiData = {
	labels: Y.map(function(y, i) {
		return i;
	}),
	datasets: [
		{
			label: '1m',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: '#A3BBBF',
			pointColor: '#1AA7BE',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Y100
		}
	]
};

var multiRssiData = {
	labels: Y.map(function(y, i) {
		return i;
	}),
	datasets: [
		{
			label: '30cm',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(201,48,119,0.4)',
			pointColor: 'rgba(201,48,119,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Y30
		},
		{
			label: '60cm',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(233,209,9,0.4)',
			pointColor: 'rgba(233,209,9,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Y60
		},
		{
			label: '1m',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(26,167,190,0.4)',
			pointColor: 'rgba(26,167,190,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Y100
		},
		{
			label: '3m',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(0,237,27,0.4)',
			pointColor: 'rgba(0,237,27,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Y300
		},
		{
			label: 'Different room',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(55,14,156,0.4)',
			pointColor: 'rgba(55,14,156,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: Yroom
		}
	]
};

Reveal.addEventListener('ready', function() {

	var ctx = $('#chart-rssi').get(0).getContext('2d');
	var line = new Chart(ctx).Line(rssiData, {
		scaleShowGridLines: true,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		datasetStrokeWidth: 5,
		pointDotRadius: 6,
		scaleFontSize: 20
	});
	$('#chart-rssi-legend').html(line.generateLegend());

	var ctx = $('#chart-rssi-multi').get(0).getContext('2d');
	var line = new Chart(ctx).Line(multiRssiData, {
		scaleShowGridLines: true,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		datasetStrokeWidth: 5,
		pointDotRadius: 6,
		scaleFontSize: 20,
		legendTemplate: "<% for (var i=0; i<datasets.length; i++){%><span style=\"color:<%=datasets[i].strokeColor%>\">&nbsp;&nbsp;&FilledSmallSquare;</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%><%}%>"

	});

	$('#chart-rssi-multi-legend').html(line.generateLegend());
});
