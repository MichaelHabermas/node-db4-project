const common = {
	client: 'sqlite3',
	useNullAsDefault: true,
	migrations: { directory: './data/migrations' },
	seeds: { directory: './data/seeds' },
	pool: {
		afterCreate: (conn, done) => {
			conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
		}
	}
};

module.exports = {
	...common,
	development: {
		connection: {
			filename: './data/recipe-book.db3'
		}
	},
	testing: {
		...common,
		connection: {
			filename: './data/test.db3'
		}
	}
};
