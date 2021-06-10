const express = require('express');
const server = express();
const recipesRouter = require('./recipes/recipe-router');
const { logger } = require('./recipes/recipe-middleware');

server.use(express.json());
server.use('/api/recipes', recipesRouter);
server.use(logger);

server.use((err, req, res, next) => {
	console.log('err handling middleware kicking in!', err.message);
	res.status(err.status || 500).json({
		custom: 'something exploded inside the app',
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;
