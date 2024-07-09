import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies;
  //   const token = req.headers["authorization"];
  //   console.log(token);
  try {
    const authStatus = jwt.verify(jwtToken, "1563353F4DF726E17FF731CDC5F95");
    // res.status(200).json({success:true,msg:"login successfull",authStatus});
    req.userId = authStatus.userId;
    next();
  } catch (error) {
    res.render("signUp", { errorMessage: null });
  }
};
export default jwtAuth;
