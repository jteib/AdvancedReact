const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    added: 2018,
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    added: 2014,
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    added: 2015,
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    added: 2012,
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    added: 2017,
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    added: 2015,
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    added: 2013,
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    added: 2013,
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    added: 2012,
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    added: 2010,
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  {
    id: 1,
    firstName: "Cory",
    lastName: "House",
    slug: "cory-house"
  },
  {
    id: 2,
    firstName: "Scott",
    lastName: "Allen",
    slug: "scott-allen"
  },
  {
    id: 3,
    firstName: "Dan",
    lastName: "Wahlin",
    slug: "dan-wahlin"
  }
];

const newCourse = {
  id: null,
  title: "",
  added: null,
  authorId: null,
  category: ""
};

const newAuthor = {
  id: null,
  firstName: "",
  lastName: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  newAuthor,
  courses,
  authors
};
