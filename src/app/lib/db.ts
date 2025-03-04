"use server";

import mysql from "mysql2/promise";

let connection: mysql.Connection;
export const createConnection = async () => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const port = process.env.NEXT_PUBLIC_PORT;
  const user = process.env.NEXT_PUBLIC_USER;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const database = process.env.NEXT_PUBLIC_DATABASE;

  // console.log(process.env.NEXT_PUBLIC_HOST);
  // console.log(process.env.NEXT_PUBLIC_PORT);
  // console.log(process.env.NEXT_PUBLIC_USER);
  // console.log(process.env.NEXT_PUBLIC_PASSWORD);
  // console.log(process.env.NEXT_PUBLIC_DATABASE);
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      port: "3305",
      user: "root",
      password: "root",
      database: "products",
    });

    // connection = await mysql.createConnection({
    //   host: host,
    //   port: port,
    //   user: user,
    //   password: password,
    //   database: database,
    // });
  }

  return connection;
};
// const connection = mysql.createPool();
// export default connection;
