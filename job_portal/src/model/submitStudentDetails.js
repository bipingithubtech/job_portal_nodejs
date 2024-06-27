export default class submitForm {
  constructor(name, email, imageUrl) {
    this.name = name;
    this.email = email;
    this.imageUrl = imageUrl;
  }
  static add(name, email, imageUrl) {
    const newUser = new submitForm(name, email, imageUrl);
    froms.push(newUser);
    return newUser;
  }
}
var froms = [];
