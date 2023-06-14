ScrollReveal({ reset: true, distance: '60px', duration: 2500, delay: 400 });

ScrollReveal().reveal('.two, .three, .sixteen, .eightteen', {
	delay: 500,
	origin: 'top',
});
ScrollReveal().reveal('.projects-info, .five, .twelve, .seventeen', {
	delay: 500,
	origin: 'bottom',
});
ScrollReveal().reveal(
	'.header-title, .one, .six, .seven, .eight, .thirteen, .fifteen',
	{
		delay: 400,
		origin: 'left',
	}
);
ScrollReveal().reveal('.four, .nine, .ten, .eleven, .fourteen', {
	delay: 600,
	origin: 'right',
});
