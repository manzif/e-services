// import envConfig from '../../envirnoment';
//  config = {
//   "development": {
//     "username": "postgres",
//     "password": "password",
//     "database": "eservices",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }


const config  = {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'eservices',
    host: '127.0.0.1',
    dialect: 'postgres',
    "operatorsAliases": false
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_CARL,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
    ssl: true,
    dialectOptions: {
        ssl: {
          "require":true
        }
    }
  }
};
module.exports = config;
