module.exports = function(app) {

  // Returns whether checked person is suspected or not
  app.get('/check/:id', (req, res) => {

	console.log("Athlete subscription status check requested");

	// Athletes with invalid subscription
	var invalidAthleteIDs = [3,5,22,36,47,48,50,88,123,143];

  	var receivedValue = req.params["id"];

	if (isNaN(receivedValue)) {
		// Invalid input
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("Invalid input value");
		res.end();
		return;
	}

	var id = parseInt(receivedValue, 10);

	if (id <= 0 || id > 150) {
		// Not found!
		res.writeHead(404, {"Content-Type": "text/html"});
		res.write("Athlete not found");
		res.end();
		return;
	}

	var isValid = true;

	if (invalidAthleteIDs.indexOf(id) > 0) {

		isValid = false;

	}

	var result = new Object();
	result.id = id;
	result.valid = isValid;

	res.send(JSON.stringify(result));
	return;

  });

};