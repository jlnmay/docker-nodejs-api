module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      database: "db",
      user: "root",
      password: "123456",
      port: "3307"
    },
    migrations: {
      tableName: "migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    acquireConnectionTimeout: 1000000
  }
};
