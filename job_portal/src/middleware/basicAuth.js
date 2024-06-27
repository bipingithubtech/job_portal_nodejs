import userModel from "../model/user.js";

const models = new userModel();

const basicAuthentication = (req, res, next) => {
  const authHeader = req.header["authorization"];
  console.log(authHeader, !authHeader);
  if (!authHeader) {
    res.status(201).send("unauthorized");
  }

  const basic64Crendetial = authHeader.replace("Basic", "");
  const decode = Buffer.from(basic64Crendetial, "base64").toString("utf8");

  const cred = decode.split(":");

  const result = models.getAllUser.find(
    (u) => u.email == cred[0] && u.password == cred[1]
  );

  if (result) {
    res.status(200);
    next();
  } else {
    res.status(401);
  }
};
export default basicAuthentication;
