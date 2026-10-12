import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "CRUD_LibraryBookCatalog",
  "root",
  "",
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
  }
);