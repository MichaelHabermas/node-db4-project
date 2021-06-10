exports.seed = function (knex, Promise) {
	return knex('recipes').insert([
		{
			recipe_name: 'Cereal',
			date_created: new Date().toString()
		},
		{
			recipe_name: 'Ham Sandwich',
			date_created: new Date().toString()
		},
		{
			recipe_name: 'Avocado Toast',
			date_created: new Date().toString()
		}
	]);
};
