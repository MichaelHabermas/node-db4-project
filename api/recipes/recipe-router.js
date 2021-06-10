const express = require('express');
// const { validateAction } = require('../middleware/middleware');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res, next) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(next);
});

module.exports = router;
