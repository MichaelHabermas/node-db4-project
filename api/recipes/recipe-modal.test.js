const db = require('../../data/db-config');
const Recipes = require('./recipe-model');

test('sanity', () => {
	expect(process.env.DB_ENV).toBe('testing');
});

beforeAll(async () => {
	await db.migrate.rollback();
	await db.migrate.latest();
});
beforeEach(async () => {
	await db('recipes').truncate();
	await db.seed.run();
});
afterAll(async () => {
	await db.destroy();
});

describe('recipes model', () => {
	describe('getAll', () => {
		test('returns all recipes in db', async () => {
			const data = await Recipes.getRecipes();
			expect(data).toHaveLength(3);
		});
		test('returns the correct recipes with all their props', async () => {
			const data = await Recipes.getRecipes();
			expect(data).toMatchObject([
				{
					date_created: 'Thu Jun 17 2021',
					recipe_id: 1,
					recipe_name: 'Cereal'
				},
				{
					date_created: 'Thu Jun 17 2021',
					recipe_id: 2,
					recipe_name: 'Ham Sandwich'
				},
				{
					date_created: 'Thu Jun 17 2021',
					recipe_id: 3,
					recipe_name: 'Avocado Toast'
				}
			]);
		});
	});
	describe('getRecipeByID', () => {
		test('returns the Recipes by the given id', async () => {
			const cereal = await Recipes.getRecipeByID(1);
			expect(cereal).toMatchObject({
				created: 'Thu Jun 17 2021',
				recipe_id: 1,
				recipe_name: 'Cereal',
				steps: [
					{
						ingredients: {
							ingredient_id: 5,
							ingredient_name: 'cereal',
							quantity: '5oz'
						},
						step_instructions: 'pour cereal in bowl',
						step_number: 1
					},
					{
						ingredients: {
							ingredient_id: 1,
							ingredient_name: 'milk',
							quantity: '4oz'
						},
						step_instructions: 'add milk',
						step_number: 2
					}
				]
			});
		});
	});

	describe('insert', () => {
		test('returns the inserted row', async () => {
			const input = { name: 'bilbo' };
			const bilbo = await Recipes.createRecipe(input);
			// expect(bilbo).toMatchObject({ id: 5, name: 'bilbo' });

			// probably should be a different test
			const data = await db('recipes'); // DO NOT DO Recipes.getAll HERE!!!!
			expect(data).toHaveLength(4);
		});
	});
});
