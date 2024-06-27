import express from "express";

import JobsController from "../controller/jobsController.js";
import basicAuthentication from "../middleware/basicAuth.js";

const router = express.Router();

const jobController = new JobsController();
router.get("/", basicAuthentication, jobController.getalljobs);
router.get("/:id", jobController.getdescription);

export default router;
