var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use(function(req, res, next) {
	console.log("Request with method: ", req.method, "and path", req.path);
	next();
});

app.get("/", function(req, res, next) {
	res.send("Welcome to our tiny server!");
})

app.listen(3000);