const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');

routes.get('tweets', TweetController.index);
routes.post('tweet', TweetController.store);

module.exports = routes;
