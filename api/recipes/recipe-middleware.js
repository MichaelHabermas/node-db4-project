const Recipes = require('./recipe-model');

function logger(req, res, next) {
	console.log('logger middleware');
	console.log(`[${new Date().toLocaleString()}] [${req.method}] ${req.path}`);
	next();
}

function validateRecipeID(req, res, next) {
	Recipes.getRecipeByID(req.params.id)
		.then(recipe => {
			if (!recipe) {
				next({
					status: 400,
					message: `recipe id: ${req.params.id} does not exist`
				});
			} else {
				req.recipe = recipe;
				next();
			}
		})
		.catch(next);
}

module.exports = {
	logger,
	validateRecipeID
};
