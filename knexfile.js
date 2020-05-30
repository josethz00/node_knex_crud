// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:'knex_test',
      user:'postgres',
      password:'',
    }, 
    migrations:{
      tableName: 'knex_migrations', //define o nome q sera dado às novas migrações
      directory: `${__dirname}/src/database/migrations`  //define o diretório ao qual elas serão automaticamente criadas
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
