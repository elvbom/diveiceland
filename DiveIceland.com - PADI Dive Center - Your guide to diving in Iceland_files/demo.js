$(document).ready(function(){

	$('.accordion').accordion({
		autoHeight  : false,
		collapsible : true,
		active      : false // start compressed
	});

	
	$('#slider3')
	.anythingSlider({
	autoPlay            : true, 
		navigationFormatter : function(i, panel){
			return ['1', '2', '3', '4', '5'][i - 1];
		}
	})
	.anythingSliderFx({
		'.caption-top'    : [ 'caption-1', '50px' ],
		'.caption-right'  : [ 'caption-2', '130px', '1000', 'easeOutBounce' ],
		'.caption-bottom' : [ 'caption-3', '50px' ],
		'.caption-left'   : [ 'caption-4', '50px', '1000', 'easeOutBounce' ]
	})
	/* use this code to have the caption slide in and out from the bottom with each panel
	.anythingSliderFx({
		inFx: {
			'.caption-1'    : { top: 0, opacity: 0.8, duration: 400 },
			'.caption-2'  : { right: 0, opacity: 0.8, duration: 400 },
			'.caption-3' : { bottom: 0, opacity: 0.8, duration: 400 },
			'.caption-4'   : { left: 0, opacity: 0.8, duration: 400 }
		},
		outFx: {
			'.caption-1'    : { top: -50, opacity: 0, duration: 350 },
			'.caption-2'  : { right: -150, opacity: 0, duration: 350 },
			'.caption-3' : { bottom: -50, opacity: 0, duration: 350 },
			'.caption-4'   : { left: -150, opacity: 0, duration: 350 }
		}
	}) */
	// add a close button (x) to the caption
	
	.find('div[class*=caption]')
		.css({ position: 'absolute' })
		.prepend('<span class="close">x</span>')
		.find('.close').click(function(){
			var cap = $(this).parent(),
				ani = { bottom : -50 }; // bottom
			if (cap.is('.caption-1')) { ani = { top: -50 }; }
			if (cap.is('.caption-2')) { ani = { left: -150 }; }
			if (cap.is('.caption-3')) { ani = { right: -150 }; }
			cap.animate(ani, 400, function(){ cap.hide(); } );
		});


	/*  use this code if you only want the caption to appear when you hover over the panel
	.find('.panel')
		.find('div[class*=caption]').css({ position: 'absolute' }).end()
		.hover(function(){ showCaptions( $(this) ) }, function(){ hideCaptions( $(this) ); });

	showCaptions = function(el){
		var $this = el;
		if ($this.find('.caption-1').length) { $this.find('.caption-1').show().animate({ 1: 0, opacity: 1 }, 400); }
		if ($this.find('.caption-2').length) { $this.find('.caption-2').show().animate({ 2: 0, opacity: 1 }, 400); }
		if ($this.find('.caption-3').length) { $this.find('.caption-3').show().animate({ 3: 0, opacity: 1 }, 400); }
		if ($this.find('.caption-4').length) { $this.find('.caption-4').show().animate({ 4: 0, opacity: 1 }, 400); }
	};
	hideCaptions = function(el){
		var $this = el;
		if ($this.find('.caption-1').length) { $this.find('.caption-top').stop().animate({ 1: -50, opacity: 0 }, 400, function(){ $this.find('.caption-top').hide(); }); }
		if ($this.find('.caption-2').length) { $this.find('.caption-right').stop().animate({ 2: -150, opacity: 0 }, 400, function(){ $this.find('.caption-right').hide(); }); }
		if ($this.find('.caption-3').length) { $this.find('.caption-bottom').stop().animate({ 3: -50, opacity: 0 }, 400, function(){ $this.find('.caption-bottom').hide(); }); }
		if ($this.find('.caption-4').length) { $this.find('.caption-left').stop().animate({ 4: -150, opacity: 0 }, 400, function(){ $this.find('.caption-left').hide(); }); }
	};

	// hide all captions initially
	hideCaptions( $('#slider3 .panel') );
*/
});