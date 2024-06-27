import submitForm from "../model/submitStudentDetails.js";

export default class submitController {
  addFormDetails(req, res) {
    const { name, email } = req.body;
    const imageUrl = "/images" + req.file.filename;
    const newStudent = submitForm.add(name, email, imageUrl);
    console.log(newStudent);
    if (newStudent) {
      res.render("thankyouPage", { newStudent: newStudent });
    } else {
      res.status("401").send("error while adding newStudent");
    }
  }
}
