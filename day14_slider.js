(function($) { // $ === jQuery

var sliderUl = $('div.slider').css('overflow', 'hidden').children('ul'),
	imgs = sliderUl.find('img'),
	imgWidth = imgs.width();
	imgsLen = imgs.length;
	current = 1,
	totalImgsWidth = imgWidth * imgsLen;

$('#slider-nav').show().find('button').on('click', function() {
	var direction = $(this).data('dir'),
		loc = imgWidth;

	// update current value
	(direction === 'next') ? ++current : --current;

	// if first image
	if (current === 0) {
		current = imgsLen;
		loc = totalImgsWidth - imgWidth;
		direction = 'next';
	} else if (current - 1 === imgsLen) {
		current = 1;
		loc = 0;
	}

	transition(sliderUl, loc, direction);
});

function transition(container, loc, direction) {
	var unit; // -=, +=

	if (direction && loc !== 0) {
		unit = ( direction === 'next') ? '-=' : '+=';
	}

	container.animate({
		// if unit is undefined, then move to first or last.
		// if it's not, move to next or prev.
		'margin-left': unit ? (unit + loc) : loc
	});
}

})(jQuery);

// maybe $ != jQuery