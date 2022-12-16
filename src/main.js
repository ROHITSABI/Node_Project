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
  let sql = `select * from message`;
  connection.query(sql, (error, result) => {
    console.log(result);
  });
  connection.end();
}
main();
