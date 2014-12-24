var http = require("http");
var key = "Fmjtd|luurn16b25%2Cal%3Do5-9wtshy";
var from = "Lancaster,PA";
var to = "York,PA";

// Print out error messages
function printError(error) {
	console.error(error.message);
}

function get(key, to, from) {
	var url = "http://open.mapquestapi.com/directions/v2/route?key=" + key + "&ambiguities=ignore&from=" +from + "&to=" + to + "&callback=renderNarrative";
	console.log(url);
	var request = http.get(url, function(response) {

		var body = "";

		response.on("data", function(chunk) {
			body += chunk;
		});

		response.on("end", function() {
			if (response.statusCode === 200) {
				try {
					var body2 = {body};
					var body3 = JSON.parse(body2);
					console.log(body3.renderNarrative)
				} catch (error) {
					// Parse Error
					console.log("1");
					printError(error);
				}
			} else {
				console.log("2");
				printError({message: "There was an error. (" + http.STATUS_CODES[response.statusCode] +")"});
			}
		});

	});

	// Connection Error
	request.on("error", printError);
}

get(key, to, from);