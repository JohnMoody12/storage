//const config = require("./config");
const { Client } = require("pg");

const logQuery = (statement, parameters) => {
  let timeStamp = new Date();
  let formattedTimeStamp = timeStamp.toString().substring(4, 24);
  console.log(formattedTimeStamp, statement, parameters);
};

const isProduction = config.NODE_ENV === "production";
const CONNECTION = {
  connectionString: process.env.DATABASE_URL,
  //ssl: isProduction,  // See note below
  ssl: { rejectUnauthorized: false },
};

const CONNECTION2 = {
  database: "todo-lists",
  user: "postgres",
  password: "123",
  port: 5432,
  host: "localhost",
};

module.exports = {
  async dbQuery(statement, ...parameters) {
    let client = new Client(CONNECTION);

    await client.connect();
    logQuery(statement, parameters);
    let result = await client.query(statement, parameters);
    await client.end();

    return result;
  },
};
