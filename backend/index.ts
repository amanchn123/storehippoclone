import express, { Request, Response } from 'express';

const app = express();
const connection=require("./connection.ts")
app.use(express.json())
const port = 5000;
const dotenv=require("dotenv")
dotenv.config()
connection()

app.use("/api",require("./routes/auth"))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});