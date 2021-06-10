const express = require('express');
const { validateRecipeID } = require('./recipe-middleware');

const Recipes = require('./recipe-model');
const router = express.Router();

router.get('/', (req, res, next) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(next);
});

router.get('/:id', validateRecipeID, (req, res, next) => {
	res.status(200).json(req.recipe);
});

module.exports = router;
