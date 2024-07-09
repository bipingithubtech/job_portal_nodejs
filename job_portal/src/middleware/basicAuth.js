import userModel from "../model/user.js";

const models = new userModel();

const basicAuthentication = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Corrected to `headers`

  console.log(authHeader, !authHeader);
  if (!authHeader) {
    return res.status(401).send("unauthorized"); // Changed status code to 401 for unauthorized
  }

  const basic64Crendetial = authHeader.replace("Basic ", ""); // Added a space after "Basic"
  const decode = Buffer.from(basic64Crendetial, "base64").toString("utf8");

  const cred = decode.split(":");

  const result = models
    .getAllUser()
    .find((u) => u.email == cred[0] && u.password == cred[1]);

  if (result) {
    next(); // Call next() to proceed to the next middleware/route handler
  } else {
    res.status(401).send("unauthorized"); // Send unauthorized response
  }
};

export default basicAuthentication;
