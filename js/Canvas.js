function Canvas() {
	var self = this;
	self.element;
	self.colour;
	
	self.construct = function() {
		self.initializeElement();
		self.changeColour();
	};
	
	self.initializeElement = function() {
		var defaultWidth = window.innerWidth;
		var defaultHeight = window.innerHeight - document.getElementById('footer').offsetHeight - 2;
		
		var element = document.createElement('canvas');
		element.id = 'canvas';
		element.width = config.canvas.width || defaultWidth;
		element.height = config.canvas.height || defaultHeight;
		document.getElementById('body').appendChild(element);
		self.element = element.getContext('2d');
	};
	
	self.changeColour = function() {
		var colour = Math.floor(Math.random() * config.colours.length);
		self.colour = config.colours[colour];
	};
	
	self.construct();
}