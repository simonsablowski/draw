function Renderer() {
	var self = this;
	
	self.render = function() {
		canvas.element.strokeStyle = canvas.colour;
		canvas.element.lineJoin = config.brush.style;
		canvas.element.lineWidth = config.brush.width;
		
		var i = points.length - 1;
		canvas.element.beginPath();
		if (points[i].dragging) {
			canvas.element.moveTo(points[i - 1].x, points[i - 1].y);
		} else {
			canvas.element.moveTo(points[i].x - 1, points[i].y);
		}
		canvas.element.lineTo(points[i].x, points[i].y);
		canvas.element.closePath();
		canvas.element.stroke();
	};
}