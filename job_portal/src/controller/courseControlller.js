import courseModel from "../model/courseMode.js";

export default class CourseControll {
  gettCourse(req, res) {
    const course = courseModel.getAllCourse();
    if (!course) {
      res.status(401).send("Bad request");
    } else {
      res.render("course", { course: course });
    }
  }
}
