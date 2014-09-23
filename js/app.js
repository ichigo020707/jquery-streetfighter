$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
	})
	.mousedown(function() {
		playHadouken();
		$(this).find('.ryu-cool').css({'display' : 'none'});
		$(this).find('.ryu-ready').css({'display' : 'none'});
		$(this).find('.ryu-still').css({'display' : 'none'});
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({'left' : '1100px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '500px');
		}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$('html').on('keydown', function(event) {
		if (event.which == 88) {
		playCool();
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
		}
	});
	$('html').on('keyup', function(event) {
		if (event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playCool() {
	$('#hadouken-cool')[0].volume = 0.5;
	$('#hadouken-cool')[0].load();
	$('#hadouken-cool')[0].play();
}

