import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express"
import * as bodyParser from "body-parser"
import routes from "./routes"

const app = express()

createConnection().then(() => {
  console.log("Connected to the database");
}).catch(error => {
  console.error("Error connecting to the database:", error);
});

app.use(bodyParser.json())
app.use(routes)

app.listen(3333)