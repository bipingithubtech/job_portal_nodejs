import express from "express";
import submitController from "../controller/from.js";
import { uploadFile } from "../middleware/multerFile.js";

const FormRouter = express.Router();

const formcontroller = new submitController();

FormRouter.post(
  "/",
  uploadFile.single("imageUrl"),
  formcontroller.addFormDetails
);

export default FormRouter;
