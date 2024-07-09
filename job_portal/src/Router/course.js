import express from "express";
import CourseControll from "../controller/courseControlller.js";
import jwtAuth from "../middleware/jwt.js";

const CourseRouter = express.Router();
const controller = new CourseControll();

CourseRouter.get("/", jwtAuth, controller.gettCourse);

export default CourseRouter;
