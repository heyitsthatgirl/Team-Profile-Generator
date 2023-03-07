// importing fs and inquire
const inquirer = require("inquirer");
const fs = require("fs");

// importing subclasses
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// importing template from generateHTML.js
const generateHTML = require("./src/generateHTML");

// path module is being imported
const path = require("path");
// determines the location of the new file when it's created
const newFilePath = path.resolve(__dirname, "dist");
// merges the new file path and file name to be used in writeFile function later
const teamRosterHTML = path.join(newFilePath, "teamRoster.html");

// an empty array to add team members to as they are created
const teamRoster = [];

// app is initialized with this function
async function init() {
  // establishes information about the Manager of the team
  const managerQuestions = [
    {
      type: "input",
      message: "Manager name:",
      name: "name",
    },
    {
      type: "input",
      message: "Manager ID#:",
      name: "id",
    },
    {
      type: "input",
      message: "Manager email:",
      name: "email",
    },
    {
      type: "input",
      message: "Manager Office#:",
      name: "officeNumber",
    },
  ];
  const managerInfo = await inquirer.prompt(managerQuestions);
  // takes the answers from managerQuestions and creates a new instance of the Manager subclass
  const manager = new Manager(
    managerInfo.name,
    managerInfo.id,
    managerInfo.email,
    managerInfo.officeNumber
  );
  // log Manager info
  console.log("Team Manager:", manager);
  // adds new Manager to the teamRoster array
  teamRoster.push(manager);
  // prompt the user to add team members
  mainMenu();
}

async function mainMenu() {
  const mainMenQs = [
    {
      type: "list",
      message: "What would like to do?",
      name: "makeTeam",
      choices: ["Add an Engineer", "Add an Intern", "Finish building team"],
    },
  ];

  const userChoice = await inquirer.prompt(mainMenQs);
  console.log(userChoice.makeTeam);

  //executes a function based on which option the user chooses
  switch (userChoice.makeTeam) {
    case "Add an Engineer":
      createEngineer();
      break;
    case "Add an Intern":
      createIntern();
      break;
    default:
      finishTeam();
      break;
  }
}

async function createEngineer() {
  // questions to establish info about the new Engineer
  const engineerQs = [
    {
      type: "input",
      message: "Name of Engineer:",
      name: "name",
    },
    {
      type: "input",
      message: "Engineer ID#:",
      name: "id",
    },
    {
      type: "input",
      message: "Engineer email:",
      name: "email",
    },
    {
      type: "input",
      message: "Engineer GitHub username:",
      name: "gitHub",
    },
  ];

  const engineerInfo = await inquirer.prompt(engineerQs);
  // new Engineer created with info from questions
  const engineer = new Engineer(
    engineerInfo.name,
    engineerInfo.id,
    engineerInfo.email,
    engineerInfo.gitHub
  );
  // log new Engineer
  console.log("Engineer has been added to team roster:", engineer);
  // new Engineer added to the teamRoster array
  teamRoster.push(engineer);
  // back to the main menu
  mainMenu();
}

async function createIntern() {
  // get info about intern
  const internQs = [
    {
      type: "input",
      message: "Name of Intern:",
      name: "name",
    },
    {
      type: "input",
      message: "Intern ID#:",
      name: "id",
    },
    {
      type: "input",
      message: "Intern email:",
      name: "email",
    },
    {
      type: "input",
      message: "Intern school of attendance:",
      name: "school",
    },
  ];

  const internInfo = await inquirer.prompt(internQs);
  // new Intern created using answers
  const intern = new Intern(
    internInfo.name,
    internInfo.id,
    internInfo.email,
    internInfo.school
  );
  // log new Intern
  console.log("Intern has been added to team roster:", intern);
  // add new Intern to the teamRoster array
  teamRoster.push(intern);
  // back to main menu
  mainMenu();
}

// function to create a file based on the user input
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your team roster is ready!");
  });
}

// user selects finish, file is created using generateHTML template
function finishTeam() {
  writeFile(teamRosterHTML, generateHTML(teamRoster), console.log(teamRoster));
}

// app is initialized here
init();
