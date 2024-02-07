user = {
  name: "Harrison Buford",
  followers: 523,
  following: 7,
  favorites: [],
  location: "Hog Wallow, KY",
  email: "hbuford34@aol.com",
  website: "harrisonisawesome34.com",
  twitter: "",
  highlights: [],
  organizations: [],
  repositories: [{
    id: 1,
    name: "",
  }],
  projects: [
    {
    id: 1,
    name:"oh, Geez",
    description: "I don't know what I'm doing."
  },
   {
    id: 2,
    name:"Panic inducing.",
    description: "I can't get this to work."
   },
   {
    id: 3,
    name:"Last Project",
    description: "If this doesn't work I quit."
   }
  ],
  packages: [{
    id: 1,
    name: "Docker",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-docker-registry",
  },
  {
    id: 2,
    name: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry",
  },
  {
    id: 3,
    name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry",
  },
  {
    id: 4,
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry",
  },
  {
    id: 5,
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",
  },
  {
    id: 6,
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images.",
    learnUrl: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",
  }],
}

const deleteMe =[{name:"To be changed later"}]

//utility function
const renderToDom = (divId, html) =>{
  const selectedDiv = document.querySelector(divId)
  selectedDiv.innerHTML = html
}

//function to display projects "page"
const renderProjects = (array) =>{
  let reference = ""
  array.forEach((element) => {
    reference += `<div id="display-body" class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Delete</a>
    </div>
  </div>`

  const projectCreator = () =>{
    const display =
    `<form id="submit-form">
  <h5>Create a new Project</h5>
    <input type="text" class="form-name" id="name" placeholder="Name" required>
    <input type ="text" class="form-description" placeholder="Description">
    <button type="submit" class="btn" id="submit-btn">Create</button>
  </form>`
  return display
  }  
  renderToDom("#submit-form",projectCreator())
  });
  renderToDom("#display-body", reference)
}

//function for Overview display currently all placeholder 
const renderOverview = (item) =>{
let reference = ""
item.forEach((item) =>{
reference += `<div id ="display-body" class="card">
<div class="card-header">
  Pinned Repos
</div>
<div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
})
renderToDom("#display-body", reference)
}
renderOverview(deleteMe)

//selectors to flip displayed page
document.querySelector("#projects-page").addEventListener("click", () => {renderProjects(user.projects)})
document.querySelector("#overview-page").addEventListener("click", () => {renderOverview(deleteMe)})
