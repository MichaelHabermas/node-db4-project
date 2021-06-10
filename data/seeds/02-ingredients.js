exports.seed = function (knex) {
	return knex('ingredients').insert([
		{ ingredient_name: 'milk' },
		{ ingredient_name: 'bread' },
		{ ingredient_name: 'ham' },
		{ ingredient_name: 'cheese' },
		{ ingredient_name: 'cereal' },
		{ ingredient_name: 'paprika' },
		{ ingredient_name: 'avocado' }
	]);
};
