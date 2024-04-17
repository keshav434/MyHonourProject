const { Charsets } = require('mysql');

require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      Charset: "utf8",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.STAGING_DB_HOST,
      user: process.env.STAGING_DB_USER,
      password: process.env.STAGING_DB_PASSWORD,
      database: process.env.STAGING_DB_NAME,
      port: process.env.STAGING_DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './backend/db/migrations' 
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PRODUCTION_DB_HOST,
      user: process.env.PRODUCTION_DB_USER,
      password: process.env.PRODUCTION_DB_PASSWORD,
      database: process.env.PRODUCTION_DB_NAME,
      port: process.env.PRODUCTION_DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
