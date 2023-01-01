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

  //Using ID because i'm using primary key(id)
  let sql = `Insert into message (id,message,reply) values(2,'Hello Universe',0)`;
  connection.query(sql);
  connection.end();
}
main();
