import userModel from "../model/user.js";
import JobsObject from "../model/jobs.js";

export default class userControllers {
  getloginpage(req, res) {
    res.render("signUp", { errorMessage: null });
  }

  registerUser(req, res) {
    const { name, email, password, number } = req.body;
    const user = userModel.register(name, email, password, number);
    res.render("login", { user: user });
    console.log(req.body);
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const valid = userModel.login(email, password);

    if (!valid) {
      return res.render("login", { error: "invalid credential" });
    }
    const product = JobsObject.getProduct();
    return res.status(200).render("jobs", { product: product });
  }
}
