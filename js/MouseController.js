function MouseController() {
	var self = this;
	self.drag = false;
	
	self.construct = function() {
		window.addEventListener('mousedown', self.onMouseDown);
		window.addEventListener('mousemove', self.onMouseMove);
		window.addEventListener('mouseup', self.onMouseUp);
		self.changeCursor();
	};
	
	self.changeCursor = function() {
		document.getElementById('canvas').style.cursor = 'url(' + config.cursor.url + '), auto';
	};
	
	self.onMouseDown = function(event) {
		self.drag = true;
		canvas.changeColour();
		
		self.addPoint(self.correctPoint(event), false);
		renderer.render();
	};
	
	self.onMouseMove = function(event) {
		if (self.drag) {
			self.addPoint(self.correctPoint(event), true);
			renderer.render();
		}
	};
	
	self.onMouseUp = function(event) {
		self.drag = false;
	};
	
	self.correctPoint = function(event) {
		return {
			x: event.pageX - canvas.element.canvas.offsetLeft + config.cursor.offsetLeft,
			y: event.pageY - canvas.element.canvas.offsetTop + config.cursor.offsetTop
		};
	};
	
	self.addPoint = function(point, dragging) {
		points.push({x: point.x, y: point.y, dragging: dragging});
	};
	
	self.construct();
}