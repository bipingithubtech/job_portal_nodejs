import express from "express";
import userControllers from "../controller/userController.js";
import fromValidation from "../middleware/studentrecordValidation.js";

const userRouter = express.Router();

const userController = new userControllers();

userRouter.get("/", userController.getloginpage);
userRouter.post("/", fromValidation, userController.registerUser);
userRouter.get("/login", userController.directLoginPage);
userRouter.post("/login", userController.postLogin);

export default userRouter;
