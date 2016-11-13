$(document).ready(function() {
	$('.time time.timeago').timeago();
	var tweetComposeHeight = $('.tweet-compose').height();
	var charCount = parseInt($('#char-count').text());
	var charTyped = 0;
	var myAvatarImg = 'me_avatar.jpg';
	var myUserName = ' @suuperman';
	$('#tweet-controls').hide();
	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();

	$('.tweet').hover(function() {
		$(this).find('.tweet-actions').show();
	}, function() {
		$(this).find('.tweet-actions').hide();
	});

	$('.tweet').on('click', function() {
		$(this).find('.stats').slideDown();
		$(this).find('.reply').slideDown();
		$(this).mouseleave(function() {
			$('.stats').slideUp();
			$('.reply').slideUp();
		});
	});
	


	
	//when user clicks on textarea and it is in focus
	$('.tweet-compose').focusin(function() {
		// twitter submit button appears
		$('#tweet-controls').show();

		// new height for text area is calculated
		var newHeight = tweetComposeHeight * 2;
		// new height is applied to text area
		$(this).height(newHeight);

		$(this).keyup(function() {
			// Each time keyup event is fired, the new length is applied.
			charTyped = $(this).val().length;
			// the new length (chartyped) will be subtracted from (charCount)
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

		});
		//when user clicks out of the text area, it will lose focus and hide controls and reset height.
		
		$('#tweet-submit').on('click', function(e) {
			e.preventDefault();
			$('#stream').prepend('<div class="tweet">' +
									'<div class="content">' +
									'<img class="avatar" src="img/'+ myAvatarImg +'" />' +
									'<strong class="fullname">Robert DelValle</strong>' +
									'<span class="username">'+ myUserName +'</span>' +
									'<p class="tweet-text">' + 'test-input' + '</p>' +
									'<div class="tweet-actions">' +
									'<ul>' +
										'<li><span class="icon action-reply"></span> Reply</li>' +
										'<li><span class="icon action-retweet"></span> Retweet</li>' +
										'<li><span class="icon action-favorite"></span> Favorite</li>' +
										'<li><span class="icon action-more"></span> More</li>' +
									'</ul>' +
								'</div>' +
								'<div class="stats">' +
									'<div class="retweets">' +
										'<p class="num-retweets">30</p>' +
										'<p>RETWEETS</p>' +
									'</div>' +
									'<div class="favorites">' +
										'<p class="num-favorites">6</p>' +
										'<p>FAVORITES</p>' +
									'</div>' +
									'<div class="users-interact">' +
										'<div>' +
											'<img src="img/jennyshen.jpg" />' +
											'<img src="img/damenleeturks.jpg" />' +
										'</div>' +
									'</div>' +
									'<div class="time">' +
										'<time class="timeago" datetime="' + $('time').timeago('update') + '"></time>' +
									'</div>' +
								'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @suuperman"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>');

		})

		$(this).focusout(function() {
			if ($('.tweet-compose').val() === '') {
				$('#tweet-controls').hide();
			
				$('.tweet-compose').height(tweetComposeHeight);
			}
			
		});
	});


});

