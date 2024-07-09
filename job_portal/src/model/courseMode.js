export default class courseModel {
  constructor(id, name, image, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
  }

  static getAllCourse() {
    return course;
  }
}

let course = [
  new courseModel(
    1,
    "HTML Basic",
    "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D",
    "Learn the fundamentals of HTML including tags, attributes, and semantic markup."
  ),
  new courseModel(
    2,
    "CSS Styling",
    "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNzcyUyMGNvZGV8ZW58MHx8MHx8fDA%3D",
    "Master CSS styling techniques such as selectors, box model, flexbox, and grid"
  ),
  new courseModel(
    3,
    "JavaScript Fundamental",
    "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGphdmFzY3JpcHQlMjAlMjBjb2RlfGVufDB8fDB8fHww",
    "Explore the core concepts of JavaScript including variables, functions, and loops."
  ),
  new courseModel(
    4,
    "React development",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_jr94DgO1cRa2sHM5CCox47ipuAwytXNHtSIqCyyFQhEXhWJD0dXruRxV5OSK1qs0Ow&usqp=CAU",
    "Build dynamic web applications with React.js, including state management and component-based architecture"
  ),
  new courseModel(
    5,
    "Next.js Essentials",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBHzDnsOmfE06hGLquOworhqB5qntEhCQD6OwXPyo4lp7z9B9lFb3qFy07tTf6l16mbI&usqp=CAU",
    ">Discover the power of Next.js for server-side rendering, routing, and API integration."
  ),
  new courseModel(
    5,
    "TypeScript for Web Development",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5n5lhaRv5j7yN_RgCDtWHEVBl8dVJ8CYf2hLacuHllOINcilQmOpmPrKYwVYZ-ucbUE&usqp=CAU",
    "TypeScript to enhance the development of scalable and maintainable web applications."
  ),
];
