//Variables
var https = require("https");
var username = "johnmedcraft123456789";
//Print Msg
function printMessage (username, badgeCount, points) {
	 var message = "User " + username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
	 console.log(message);
}
//Print Error Msg
function printError(error){
	console.error(error.message);
}
//Make Request
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
	var body = "";
	response.on('data', function(chunk){
		body += chunk;
	});
	response.on('end', function(){
		try {
			var profile = JSON.parse(body);
			printMessage(username, profile.badges.length, profile.points.JavaScript);
		} catch(error) {
			//Parse Error
			printError(error);
		}
		
	});
});
//Connection Error
request.on("error", printError);