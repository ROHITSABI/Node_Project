import { createConnection } from "mysql";
function main() {
  console.log("MYSQL QUERY DEMO");
  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "rohit123",
    database: "webtech",
  };

  let connection = createConnection(connectionUri);
  connection.connect();
  let sql = `Insert into message (message,reply) values('Hello World',0)`;
  connection.query(sql);
  connection.end();
}
main();
