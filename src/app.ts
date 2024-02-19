import express from "express";
import api from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(api);

const port = process.env.PORT;
app.listen(port, function () {
  console.log("node server started at " + port);
});
