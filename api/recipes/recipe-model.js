const db = require('../../data/db-config');

function getRecipes() {
	return db('recipes');
}

async function getRecipeByID(id) {
	const recipe = await db('recipes as r')
		.leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
		.leftJoin('steps-ingredients as si', 'si.step_id', 's.step_id')
		.leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
		.select(
			'r.recipe_id',
			'r.recipe_name',
			's.step_number',
			's.step_text',
			'i.ingredient_name',
			'i.ingredient_id',
			'si.quantity',
			'si.quantity',
			'r.date_created'
		)
		.where('r.recipe_id', id)
		.orderBy('s.step_number', 'asc');

	return {
		recipe_id: recipe[0].recipe_id,
		recipe_name: recipe[0].recipe_name,
		created: recipe[0].date_created,
		steps: recipe.map(step => {
			return {
				step_number: step.step_number,
				step_instructions: step.step_text,
				ingredients: {
					ingredient_name: step.ingredient_name,
					ingredient_id: step.ingredient_id,
					quantity: step.quantity
				}
			};
		})
	};
}

module.exports = {
	getRecipes,
	getRecipeByID
};
