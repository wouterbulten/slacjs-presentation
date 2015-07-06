var fixedMovementMean = [
    0.393955267525,
    0.40434458858,
    0.28908208213,
    0.487520171825,
    0.374156216623,
    0.509915660282,
    0.345175334069,
    0.347492819169
];

var fixedMovementStd = [
    0.0742364038047,
    0.115269978698,
    0.132667752855,
    0.249258796976,
    0.196221598552,
    0.338258141463,
    0.171278883586,
    0.0420016950547
];

var noisyMovementMean = [
    0.650312595851,
    0.614027432326,
    0.560954909217,
    0.784000322472,
    0.686265788576,
    0.711669745135,
    0.607472613775,
    0.587797359452
];
var noisyMovementStd = [
    0.206318729953,
    0.312350233838,
    0.306987140019,
    0.319347076572,
    0.325686671658,
    0.40225400707,
    0.30013718867,
    0.313162223804
];

var labels = ['Average', 'Beacon 1', 'Beacon 2', 'Beacon 3', 'Beacon 4', 'Beacon 5', 'Beacon 6', 'Beacon 7'];

var simData1 = {
	labels: labels,
	datasets: [
		{
			label: 'Perfect world simulation',
			fillColor: 'rgba(201,48,119,0.3)',
			strokeColor: 'rgba(201,48,119,0.4)',
			pointColor: 'rgba(201,48,119,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: fixedMovementMean
		},
		{
			label: 'Simulation with noisy movement',
			fillColor: 'rgba(55,14,156,0.3)',
			strokeColor: 'rgba(55,14,156,0.4)',
			pointColor: 'rgba(55,14,156,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: noisyMovementMean
		},
		{
			label: 'Real world',
			fillColor: 'rgba(220,220,220,0)',
			strokeColor: 'rgba(26,167,190,0.4)',
			pointColor: 'rgba(26,167,190,1.0)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: []
		}
	]
};

Reveal.addEventListener('chart-sim-1', function() {

	var ctx = $('#chart-sim-1').get(0).getContext('2d');
	var rssiLine = new Chart(ctx).Bar(simData1, {
		scaleShowGridLines: true,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		datasetStrokeWidth: 5,
		pointDotRadius: 6,
		scaleFontSize: 20,
		legendTemplate: "<% for (var i=0; i<datasets.length; i++){%><span style=\"color:<%=datasets[i].strokeColor%>\">&nbsp;&nbsp;&FilledSmallSquare;</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%><%}%>"

	});

	$('#chart-sim-1-legend').html(rssiLine.generateLegend());
});
