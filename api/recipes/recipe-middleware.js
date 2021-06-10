function logger(req, res, next) {
	console.log('logger middleware');
	console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
	next();
}

module.exports = {
	logger
};
