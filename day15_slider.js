function Slider(container, nav) {
	this.container = container;
	this.nav = nav.show();

	this.imgs = this.container.find('img');
	this.imgsWidth = this.imgs[0].width;
	this.imgsLen = this.imgs.length;

	this.current = 0;

	// Well, I can do this but this one would waste of mem.
	// this.transition = function() {}
}

Slider.prototype.transition = function (coords) {
	this.container.animate({
		'margin-left': coords || -(this.current * this.imgsWidth)
	});
};

Slider.prototype.setCurrent = function(dir) {
	var pos = this.current;

	pos += (~~(dir === 'next') || -1);

	this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

	return pos;
};