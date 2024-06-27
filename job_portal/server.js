import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/Router/router.js";
import bodyParser from "body-parser";
import FormRouter from "./src/Router/formRoter.js";
import userRouter from "./src/Router/signupuser.js";

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse application/json
server.use(bodyParser.json());
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src/view"));

// Serve static files
server.use(express.static(path.join(__dirname, "src")));
server.use("/api/product/", router);
server.use("/api/form", FormRouter);
server.use("/api/register", userRouter);

server.get("/", (req, res) => {
  res.render("home");
});

server.listen(3002, () => {
  console.log("port is running on port number 3002");
});
