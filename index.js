import express from "express";
import router from './routes/routes.js';
import cors from 'cors';
// import dbConnection from "../client/src/database/db.js";
import dbConnection from "./database/db.js";
const app = express();

app.use(cors())
app.use('/' , router )
const port = 8000;
dbConnection();
app.listen(port , () => console.log(`Server is running on the port ${port}`));