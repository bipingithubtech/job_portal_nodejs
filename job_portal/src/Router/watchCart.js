import express from "express";
import addToWatchList from "../controller/watch.js";

const cart = express.Router();

cart.post("/", addToWatchList);

export default cart;
