// Update with your config settings.
const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    seeds: {
      directory: './data/seeds'
    },
    migrations: {
      tableName: './app/migrations'
    }
  }
};
