import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/Router/router.js";
import bodyParser from "body-parser";
import FormRouter from "./src/Router/formRoter.js";
import userRouter from "./src/Router/signupuser.js";
import cookieParser from "cookie-parser";
import CourseRouter from "./src/Router/course.js";
import cart from "./src/Router/watchCart.js";

const server = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse application/json
server.use(bodyParser.json());
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src/view"));
server.use(cookieParser());

// Serve static files
server.use(express.static(path.join(__dirname, "src")));
server.use("/api/product/", router);
server.use("/api/form", FormRouter);
server.use("/api/register", userRouter);
server.use("/api/course", CourseRouter);
server.use("/api/cart", cart);

server.get("/", (req, res) => {
  res.render("home");
});

server.use((req, res) => {
  res.render("404Page").status(404);
});

server.listen(3002, () => {
  console.log("port is running on port number 3002");
});
