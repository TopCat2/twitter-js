var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: list } );

});

router.get('/id/:idLabel', function(req, res) {
  var idString = req.params.idLabel;
  var list = tweetBank.find( {id: idString} );
res.render( 'index', { title: 'Twitter.js - Posts with ID '+ idString, tweets: list } );

});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;