const db = require('../../data/db-config');

function getRecipes() {
	return db('recipes');
}

module.exports = {
	getRecipes
};
