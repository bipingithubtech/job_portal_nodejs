export default class userModel {
  constructor(id, name, email, password, number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.number = number;
  }

  static register(name, email, password, number) {
    const newStudent = new userModel(
      user.length + 1,
      name,
      email,
      password,
      number
    );
    user.push(newStudent);
  }
  static login(email, password) {
    const result = user.find(
      (userInfo) => userInfo.email == email && userInfo.password == password
    );
    return result;
  }
  static getAllUser() {
    return user;
  }
}

var user = [];

// import userModel from "../model/user.js";

// const models = new userModel();

// const basicAuthentication = (req, res, next) => {
//   const authHeader = req.header["authorization"];

//   if (!authHeader) {
//     res.status(201).send("unauthorized");
//   }

//   const basic64Crendetial = authHeader.replace("Basic", "");
//   const decode = Buffer.from(basic64Crendetial, "base64").toString("utf8");

//   const cred = decode.split(":");

//   const result = models.getAllUser.find(
//     (u) => u.email == cred[0] && u.password == cred[1]
//   );

//   if (result) {
//     res.status(200);
//     next();
//   } else {
//     res.status(401);
//   }
// };
// export default basicAuthentication;
