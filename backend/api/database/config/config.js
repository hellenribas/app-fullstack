require('dotenv/config')
module.exports = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "db_project",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOSTNAME,
    "dialect": "mysql"
  },
}
