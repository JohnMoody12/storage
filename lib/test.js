const { Client } = require("pg");

class test2 {
  async testQuery1() {
    const SQL = "SELECT * FROM todolists";

    let client = new Client({
      database: "todo-lists",
      user: "postgres",
      password: "123",
      port: 5432,
      host: "localhost",
    });
    await client.connect();
    let result = await client.query(SQL);
    console.log("query1", result.rows);
    await client.end();
  }

  // omitted code
}

let test = new test2();
test.testQuery1();
