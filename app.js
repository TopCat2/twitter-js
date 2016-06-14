var express = require( 'express' );
var swig=require('swig');
var routes = require("./routes");


var app = express(); // creates an instance of an express application
app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname + '/views');
app.use(express.static('public'));
swig.setDefaults({ cache: false });


// app.use(function(req, res, next) {
// 	console.log("Request with method: ", req.method, "and path", req.path);
// 	next();
// });


app.use('/', routes);

// app.get("/", function(req, res, next) {
//
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
//     console.log(output);
// });

// 	//res.send("Welcome to our tiny server!");
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

app.listen(3000);