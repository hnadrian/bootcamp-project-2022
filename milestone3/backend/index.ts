import { Express } from "express";
import recipeRouter from './routes/recipe';

const express = require("express"); // 1. includes Express
const app: Express = express(); // 2. initializes Express
app.use(express.json());
const mongoose = require("mongoose");
const connection_url = "mongodb+srv://newUser:newPassword@cluster0.wcxshhl.mongodb.net/RecipesDB?retryWrites=true&w=majority";

mongoose.connect(connection_url)
.then(() => console.log("Successfully connected"))
.catch((error: any) => console.error(`Could not connect due to ${error}`));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.use("/recipe", recipeRouter);

app.listen(3001);