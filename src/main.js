import { createConnection } from "mysql";
function main() {
  console.log("MYSQL DEMO");
  let connectionUri = {
    host: "localhost",
    user: "root",
    password: "rohit123",
    database: "webTech",
  };

  let connection = createConnection(connectionUri);
  connection.connect();
  console.log("Connection Done!!");
  connection.end();
}
main();
