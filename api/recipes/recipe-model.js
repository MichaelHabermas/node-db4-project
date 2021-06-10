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
			'r.recipe_name',
			's.step_number',
			's.step_text',
			'i.ingredient_name',
			'si.quantity',
			'r.date_created'
		)
		.where('r.recipe_id', id)
		.orderBy('s.step_number', 'asc');

	return {
		recipe_name: recipe[0].recipe_name,
		steps: recipe.map(step => {
			return {
				step_number: step.step_number,
				step_instructions: step.step_text,
				ingredients: step.ingredient_name
			};
		})
	};
	//     SELECT r.recipe_name, s.step_number, s.step_text, i.ingredient_name, si.quantity, r.date_created
	// FROM recipes AS r
	// LEFT JOIN steps as s
	//     ON r.recipe_id = s.recipe_id
	// LEFT JOIN [steps-ingredients] as si
	//     ON si.step_id = s.step_id
	// LEFT JOIN ingredients as i
	//     ON i.ingredient_id = si.ingredient_id
	// WHERE r.recipe_id = 3;
}

module.exports = {
	getRecipes,
	getRecipeByID
};
