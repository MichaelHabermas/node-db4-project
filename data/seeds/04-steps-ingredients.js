exports.seed = function (knex) {
	return knex('steps-ingredients').insert([
		{
			step_id: '1',
			ingredient_id: '5',
			quantity: '5oz'
		},
		{
			step_id: '2',
			ingredient_id: '1',
			quantity: '4oz'
		},
		{
			step_id: '3',
			ingredient_id: '2',
			quantity: '1'
		},
		{
			step_id: '4',
			ingredient_id: '3',
			quantity: '3'
		},
		{
			step_id: '5',
			ingredient_id: '4',
			quantity: '2'
		},
		{
			step_id: '6',
			ingredient_id: '2',
			quantity: '1'
		},
		{
			step_id: '7',
			ingredient_id: '2',
			quantity: '2'
		},
		{
			step_id: '9',
			ingredient_id: '7',
			quantity: '1'
		},
		{
			step_id: '11',
			ingredient_id: '6',
			quantity: '1tbs'
		}
	]);
};
