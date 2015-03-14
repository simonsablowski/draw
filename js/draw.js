var config = {
	canvas: {},
	colours: [
		'#ff0000',
		'#00ff00',
		'#0000ff',
		'#ffff00',
		'#ff00ff',
		'#00ffff',
		'#000000'
	],
	brush: {
		width: 6,
		style: 'round'
	},
	cursor: {
		url: 'cursor.cur',
		offsetTop: 4,
		offsetLeft: 4
	}
};
var canvas, renderer, mouseController;
var points = [];

document.addEventListener('DOMContentLoaded', function() {
	canvas = new Canvas();
	renderer = new Renderer();
	mouseController = new MouseController();
});