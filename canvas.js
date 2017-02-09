window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

	function previewHandler() {
		var canvas = document.getElementById("tshirtCanvas");
		var context = canvas.getContext("2d");
		fillBackgroundColor(canvas, context);

		var selectObj = document.getElementById("shape");
		var index = selectObj.selectedIndex;
		var shape = selectObj[index].value;

		if (shape == "squares") {
			for (var squares = 0; squares < 20; squares++) {
				drawSquare(canvas, context);
			}
		} else if (shape == "circles") {
			for (var circles = 0; circles < 20; circles++) {
				drawCircle(canvas, context);
			}
		}

		drawText(canvas, context);
	}

	function drawSquare(canvas, context) {
		var w = Math.floor(Math.random() * 40);

		var x = Math.floor(Math.random() * canvas.width);

		var y = Math.floor(Math.random() * canvas.height);

		context.fillStyle = "lightblue";
		context.fillRect(x, y, w, w);
	}

	function drawCircle(canvas, context) {
		var radius = Math.floor(Math.random() * 40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

		context.beginPath();
		context.arc(x, y, radius, 0, degreesToRadians(360), true)

		context.fillStyle = "lightblue";
		context.fill();
	}

	function fillBackgroundColor(canvas, context) {
		var selectObj = document.getElementById("backgroundColor");
		var index = selectObj.selectedIndex;
		var bgColor = selectObj[index].value;

		context.fillStyle = bgColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}

	function degreesToRadians(degrees) {
		return (degrees * Math.PI / 180);
	}

	function updateTweets(tweets) {
		var tweetSelection = document.getElementById("tweets");
		console.log(tweets);
		/*  ---> must be an update to twitter api because this isn't working
		for (var i = 0; i < tweets.length; i++) {
			tweet = tweets[i];
			var option = document.createElement("option");
			option.text = tweet.text;
			option.value = tweet.text.replace("\"", "'");
			tweetSelection.options.add(option);
		}
		*/
		var option = document.createElement("option");
		option.text = tweets[0];
		tweetSelection.options.add(option);

		var option2 = document.createElement("option");
		option2.text = tweets[1];
		tweetSelection.options.add(option2);

		tweetSelection.selectedIndex = 0;
	}
	var tweets = ["Hey first tweet.  Hi twitter", "Second tweet.  I'm starting to get the hang of this."];
	updateTweets(tweets);

	function drawText(canvas, context) {
		var selectObj = document.getElementById("foregroundColor");
		var index = selectObj.selectedIndex;
		var fgColor = selectObj[index].value;

		context.fillStyle = fgColor;
		context.font = "bold 1em sans-serif";
		context.textAlign = "left";
		context.fillText("I saw this tweet", 20, 40);

		var tweetObj = document.getElementById("tweets");
		var tweetIndex = tweetObj.selectedIndex;
		var tweet = tweetObj[tweetIndex].value;
		context.font = "italic 1.2em serif";
		context.fillText(tweet, 30, 100);

		context.font = "bold 1em sans-serif";
		context.textAlign = "right";
		context.fillText("and all I got was this lousy t-shirt!", canvas.width - 20, canvas.height - 40);
	}

}


