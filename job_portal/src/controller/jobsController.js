import JobsObject from "../model/jobs.js";
export default class JobsController {
  getalljobs(req, res) {
    const product = JobsObject.getProduct();
    if (product) {
      res.status(200).render("jobs", { product });
    } else {
      console.log("error while calling the products");
    }
  }
  getdescription(req, res) {
    const jobId = req.params.id;
    const jobDetails = JobsObject.getById(jobId);

    if (jobDetails) {
      res.render("descriptionPage", { jobDetails: jobDetails });
    } else {
      res.status(404).send("Job not found");
    }
  }
}
