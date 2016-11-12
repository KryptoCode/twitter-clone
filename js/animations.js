$(document).ready(function() {
	var tweetComposeHeight = $('.tweet-compose').height();
	var charCount = parseInt($('#char-count').text());
	var charTyped = 0;
	console.log(charTyped);
	console.log(charCount);
	$('#tweet-controls').hide();

	$('.tweet-compose').focusin(function() {
		$('#tweet-controls').show();
		
		var newHeight = tweetComposeHeight * 2;
		
		$(this).height(newHeight);

		$(this).keyup(function() {
			charTyped = $(this).val().length;
			$('#char-count').text(charCount - charTyped);
			console.log(charCount - charTyped);

			if (charCount - charTyped <= 10) {
				// When Counter is 10 or less, color changes to red as a warning.
				$('#char-count').css('color', 'red');
				if (charCount - charTyped < 0) {
					// When Counter hits below 0 Tweet button is disabled
					$('button').prop('disabled', true);
				} else {
					// As long as counter is 0 or higher, it is enabled.
					$('button').prop('disabled', false);
				}
			} else {
				// color is reset to initial color when above 10 characters
				$('#char-count').css('color', '#999');
			}

			$('tweet-submit').on('click', function() {
				// $('#stream').prepend('<div class="tweet">' +
				// 					'<div class="content">' +
				// 					'<img class="avatar" src="img/alagoon.jpg" />' +
				// 					'<strong class="fullname">Robert DelValle</strong>' +
				// 					'<span class="username">@suuperman</span>' +
				// 					'<p class="tweet-text">' + 'test-input' + '</p>' +
				// 					'<div class="tweet-actions">' +
				// 					'<ul>' +
				// 						'<li><span class="icon action-reply"></span> Reply</li>' +
				// 						'<li><span class="icon action-retweet"></span> Retweet</li>' +
				// 						'<li><span class="icon action-favorite"></span> Favorite</li>' +
				// 						'<li><span class="icon action-more"></span> More</li>' +
				// 					'</ul>' +
				// 				'</div>' +
				// 				'<div class="stats">' +
				// 					'<div class="retweets">' +
				// 						'<p class="num-retweets">30</p>' +
				// 						'<p>RETWEETS</p>' +
				// 					'</div>' +
				// 					'<div class="favorites">' +
				// 						'<p class="num-favorites">6</p>' +
				// 						'<p>FAVORITES</p>' +
				// 					'</div>' +
				// 					'<div class="users-interact">' +
				// 						'<div>' +
				// 							'<img src="img/jennyshen.jpg" />' +
				// 							'<img src="img/damenleeturks.jpg" />' +
				// 						'</div>' +
				// 					'</div>' +
				// 					'<div class="time">' +
				// 						'1:04 PM - 19 Sep 13' +
				// 					'</div>' +
				// 				'</div>' +
				// 			'<div class="reply">' +
				// 				'<img class="avatar" src="img/alagoon.jpg" />' +
				// 				'<textarea class="tweet-compose" placeholder="Reply to @suuperman"/></textarea>' +
				// 			'</div>' +
				// 		'</div>' +
				// 	'</div>')
			});

		});

		$(this).focusout(function() {
			$('#tweet-controls').hide();
			$('.tweet-compose').height(tweetComposeHeight);
			
		});
	});

});