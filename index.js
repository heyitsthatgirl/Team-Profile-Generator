// importing fs and inquire
const inquirer = require("inquirer");
const fs = require("fs");
// importing class/subclasses
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateManagerCard = require("./src/generateHTML");

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

  // // creates an html file that displays the Manager's information
  //     fs.writeFile("sample.html", generateManagerCard(manager), (err) => {
  //         if(err){
  //             console.log(err)
  //         };
  //     });
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

  //   if (userChoice.makeTeam = 'Add an Engineer') {
  //     createEngineer();
  //   } else {
  //     console.log("no!");
  //   };
  //   if (userChoice == "Add an Intern") {
  //     createIntern();
  //   } else {
  //     finishTeam();
  //   };
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

function finishTeam() {
  // log the completed team
  console.log("Here is your team:", teamRoster);

}

init();
