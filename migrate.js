import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import { Book } from "./models/Book.js";

const server = new Sequelize("", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

try {
  await server.authenticate();
  console.log("Connected to MySQL.");

  await server.query(
    "CREATE DATABASE IF NOT EXISTS CRUD_LibraryBookCatalog;"
  );
  console.log("Database created or already exists.");

  await sequelize.authenticate();
  await Book.sync();
  console.log("Books table created successfully.");
} catch (error) {
  console.error("Migration failed:", error.message);
  process.exitCode = 1;
} finally {
  await server.close();
  await sequelize.close();
}