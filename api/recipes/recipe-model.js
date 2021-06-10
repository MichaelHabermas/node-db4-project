const db = require('../data/db-config.js');

function getAll() {
	return db('recipies');
}

module.exports = {
	getAll
};
