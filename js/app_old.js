$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show();
		.animate({'left' : '1000px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '500px');
		});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	/*$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
		else {
			event.preventDefault();
		}
	});
	$(document).keyup(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});*/
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

$(document).keydown(function(event) {
		if (event.which == 88) {
			playCool();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
		else {
			event.preventDefault();
		}
	});
	$(document).keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-cool').hide();
			$('ryu-ready').hide();
			$('.ryu-still').show();
		}
	});
