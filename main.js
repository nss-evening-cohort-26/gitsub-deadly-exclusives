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
    name: "greys-anatomy-lorem-ipsum-generator",
    description: "A lorem ipsum generator with medical terms and words from the show Grey's Anatomy.",
    tags: ["netlify", 'jamstack', 'lorem-ipsum-generator', 'medical', 'serverless', 'react'],
    language: "JavaScript",
    favorites: 8,
    forks: 3,
    license: "",
    issues: 1,
    timestamp: new Date(2024, 0, 29, 22, 21, 43, 32),
    star: false,
  }, {
    id: 2,
    name: "how-many-days-until",
    description: "A React countdown app of days between today and next year.",
    tags: ['react', 'countdown', 'hacktoberfest'],
    language: "JavaScript",
    favorites: 6,
    forks: 33,
    license: "",
    issues: 0,
    timestamp: new Date(2024, 0, 13, 8, 55, 55, 0),
    star: false,
  }, {
    id: 3,
    name: "httriri",
    description: "HTTRiRi - HTTP Status Codes as Portrayed by Rihanna GIFs",
    tags: ['http', 'status-codes', 'gifs', 'rihanna', 'hacktoberfest'],
    language: "TypeScript",
    favorites: 37,
    forks: 22,
    license: "",
    issues: 4,
    timestamp: new Date(2024, 1, 6, 17, 45, 9, 0),
    star: false,
  }, {
    id: 4,
    name: "ambition-fund-website",
    description: `Website for www.ambitionfund.org, micro-grant program to provide support for underrepresented 
                  people who need financial assistance pursuing professional development opportunities in the technology sector.`,
    tags: ['donation', 'landing-page'],
    language: "JavaScript",
    favorites: 7,
    forks: 6,
    license: "MIT License",
    issues: 3,
    timestamp: new Date(2022, 1, 1, 2, 32, 1, 78),
    star: false,
  }
],
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
    <p class="card-text">${element.description}</p>
    <a href="#" class="btn btn-primary">Delete</a>
    </div>
    </div>`
  })
  const projectCreator = () =>{
    const display =
    `<form id="submit-form">
  <h5>Create a new Project</h5>
    <input type="text" class="form-name" id="name" placeholder="Name" required>
    <input type ="text" class="form-description" id="description" placeholder="Description">
    <button type="submit" class="btn" id="submit-btn">Create</button>
  </form>`
  return display
}  
  renderToDom("#submit-form",projectCreator())
  renderToDom("#display-body", reference)
}


const projectNameInput = document.querySelector("#name");
const projectDescriptionInput = document.querySelector("#description");

const addNewProject = (e) =>{
  e.preventDefault()
  const newProject ={
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    id: user.projects.length +1,
  }
  user.projects.push(newProject)
  renderProjects(user.projects)
  form.reset()
  console.log(user.projects)
}

const form = document.querySelector("#submit-form")



const repoHTML = (repos = user.repositories) => {
  let htmlString = ""
  
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
const startUp = () => {
  if (window.location.href.includes("index.html")) {
    renderOverview(deleteMe)
  } else if (window.location.href.includes("repos.html")) {
    
  } else if (window.location.href.includes("projects.html")) {
    renderProjects(user.projects)
  } else if (window.location.href.includes("packages.html")) {
    
  }
}



//selectors to flip displayed page
// document.querySelector("#projects-page").addEventListener("click", () => {renderProjects(user.projects)})
// document.querySelector("#overview-page").addEventListener("click", () => {renderOverview(deleteMe)})

startUp()

document.querySelector("#submit-btn").form.addEventListener("submit",(e) =>{ 
  e.preventDefault()
  addNewProject(e)
  renderProjects(user.projects)
})
