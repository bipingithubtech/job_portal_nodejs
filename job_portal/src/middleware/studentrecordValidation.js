function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const fromValidation = (req, res, next) => {
  const { name, email, password, number } = req.body;
  const error = [];

  if (!name) {
    error.push(" please fill the name");
  }
  if (!email) {
    error.push("please enter the email");
  } else if (!isValidEmail(email)) {
    error.push("invalid email format");
  }
  if (!number) {
    error.push("please provide the number correctly");
  }
  if (!password) {
    error.push("password is required");
  }

  if (error.length > 0) {
    return res.render("signUp", {
      errorMessage: error[0],
      name,
      email,
      password,
      number,
    });
  }
  next();
};

export default fromValidation;
