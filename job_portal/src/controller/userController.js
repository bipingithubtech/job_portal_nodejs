import userModel from "../model/user.js";
import JobsObject from "../model/jobs.js";
import jwt from "jsonwebtoken";

export default class userControllers {
  getloginpage(req, res) {
    res.render("signUp", { errorMessage: null });
  }
  directLoginPage(req, res) {
    const allUser = userModel.getAllUser();
    console.log(allUser);
    res.render("login", { allUser, errorMessage: null });
  }

  registerUser(req, res) {
    const { name, email, password, number } = req.body;
    const user = userModel.register(name, email, password, number);
    console.log(user);
    res.render("login", { user: user });
    console.log(req.body);
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const valid = userModel.login(email, password);

    if (!valid) {
      return res.render("login", { error: "invalid credential" });
    } else {
      const tokens = jwt.sign(
        {
          userId: valid.userId,
          userEmal: valid.userEmal,
        },
        "1563353F4DF726E17FF731CDC5F95",
        { expiresIn: "1h" }
      );
      const product = JobsObject.getProduct();
      return res

        .status(201)
        .cookie("jwtToken", tokens, { maxAge: 900000, httpOnly: true })
        .render("jobs", { product: product });
    }
  }
}
