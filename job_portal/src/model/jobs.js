export default class JobsObject {
  constructor(
    id,
    company,
    job_name,
    description,

    expreience,
    salary,
    location,
    skill
  ) {
    this.id = id;
    this.company = company;
    this.job_name = job_name;
    this.description = description;
    this.expreience = expreience;
    this.salary = salary;
    this.location = location;
    this.skill = skill;
  }
  static getProduct() {
    return jobs;
  }
  static getById(id) {
    const product = jobs.find((j) => j.id.toString() === id.toString());
    return product;
  }
}

var jobs = [
  new JobsObject(
    1,
    "Accenture",
    "MERN stack developer",
    "we are looking for a candidate who is fully quipped with the knowledge of MERN stck ,docker, DeVops",

    "1-2 yr",
    "14 lpa",
    "Pune",
    ["React", "mongodb", "nodeJs", "Express"]
  ),
  new JobsObject(
    2,
    "ABODE",
    "Django",
    "we are looking for candidate with industry experience ,Remote work.",
    "2-3 yr",
    "10 lpa",
    "hydrabad",
    ["Msql", "Django", "Python", "Sql", "DSA"]
  ),
  new JobsObject(
    3,
    "MicroSoft",
    " java deleveloper",
    "candidate with good DSA,resolving ability, good communication",
    "1-2 yr",
    "18 lpa",
    "gurgaon",
    ["C++", "JAVA", "DSA", "springBoot"]
  ),
];
