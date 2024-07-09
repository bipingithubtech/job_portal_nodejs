import express from "express";

import JobsController from "../controller/jobsController.js";
import jwtAuth from "../middleware/jwt.js";

const router = express.Router();

const jobController = new JobsController();
router.get("/", jwtAuth, jobController.getalljobs);
router.get("/:id", jobController.getdescription);

export default router;
