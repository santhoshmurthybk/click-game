var myVar = null;
var x = null;

$(document).ready(function () {
	$('#counter').hide()

	function changePlace() {
		var top = Math.random() * 400;
		var left = Math.random() * 400;

		document.getElementById("btn").style.left = left + "px";
		document.getElementById("btn").style.top = top + "px";
		document.getElementById("btn").style.display = "block";
	}

	$('#start').on('click', function () {
		var countDownDate = new Date().getTime() + (1 * 60 * 1000);
		var clicks = 0;
		$('#start').hide();
		$('#counter').show();
		changePlace()
		document.getElementById("btn").onclick = function () {
			clicks++;
			if (clicks === 30) {
				clearTimeout(myVar);
				clearInterval(x);
				document.getElementById("demo").innerHTML = "";
				var clickStr = 'clicks';

				$('body').css('cursor', 'auto');
				$('h1').text('You won the game');

				if (clicks == 1) {
					clickStr = 'click'
				}
				$('h2').text('You got ' + clicks + ' ' + clickStr + '.');
				$('h3').html('<a href="index.html">Try Again?</a>');
				$('#start').hide();
				$('#btn').hide();
				$('#number').hide();
				$('#counter').hide();
			} else {
				$('#counter').text("No of Clicks: "+ clicks);
				document.getElementById("btn").style.display = "none";
				changePlace();
			}
		}

		x = setInterval(function() {
			var now = new Date().getTime();
			var distance = countDownDate - now;
			
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			document.getElementById("demo").innerHTML = "Time Remaining : " + seconds + "s ";
		  
		  }, 1000);

		myVar = setTimeout(function () {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "";
			var clickStr = 'clicks';

			$('body').css('cursor', 'auto');
			$('h1').text('Time\'s Up!');

			if (clicks == 1) {
				clickStr = 'click'
			}
			$('h2').text('You got ' + clicks + ' ' + clickStr + '.');
			$('h3').html('<a href="index.html">Try Again?</a>');
			$('#start').hide();
			$('#number').hide();
			$('#btn').hide();
			$('#counter').hide();
		}, 60000);

	});

});