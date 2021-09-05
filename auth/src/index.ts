import mongoose from "mongoose";
import "express-async-errors";

import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be specified");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to Mongo");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Auth: listening on 3000");
});

start();
