exports.up = function (knex) {
	return knex.schema
		.createTable('recipes', table => {
			table.increments('recipe_id');
			table.string('recipe_name');
			table.string('date_created');
		})
		.createTable('ingredients', table => {
			table.increments('ingredient_id');
			table.string('ingredient_name');
		})
		.createTable('steps', table => {
			table.increments('step_id');
			table.string('step_number');
			table.string('recipe_id');
			table.string('step_text');
		})
		.createTable('steps-ingredients', table => {
			table.increments('step-ingredient_id');
			table.string('step_id');
			table.string('ingredient_id');
			table.string('quantity');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('steps-ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
