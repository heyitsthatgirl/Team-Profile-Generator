// function to create each section of the html doc based on which items are present in the teamRoster array
function renderTeamHTML(teamRoster) {
  // empty array to store the HTML templates when they're created
  const teamHTML = [];

  // function to create a manager section using data from the teamRoster array
  const generateManagerCard = (manager) => {
    let managerCard = `
  <div class="card">
    <h2>${manager.getName()} </br> <i class="fa-solid fa-person-chalkboard"></i> ${manager.getRole()}</h2>
    
        <p>
            ID#: ${manager.getId()}
        </p>
        <p>
            Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        </p>
        <p>
            Office#: ${manager.getOfficeNumber()}
        </p>
    
</div>`;

    // add the manager section to the html array
    teamHTML.push(managerCard);
  };

  // function to create an engineer section using the teamRoster array
  const generateEngineerCard = (engineer) => {
    let engineerCard = ` 
    <div class="card">
        <h2>${engineer.getName()} </br> <i class="fa-solid fa-laptop-code"></i> ${engineer.getRole()}</h2>
        
            <p>
                ID#: ${engineer.getId()}
            </p>
            <p>
                Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </p>
            <p>
                GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a>
            </p>    
        
    </div>`;

    // adds the engineer section to the html array
    teamHTML.push(engineerCard);
  };

  // function to create an intern section using the teamRoster array
  const generateInternCard = (intern) => {
    let internCard = ` 
      <div class="card">
          <h2>${intern.getName()}</br> <i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h2>
          
              <p>
                  ID#: ${intern.getId()}
              </p>
              <p>
                  Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
              </p>
              <p>
                  Attending: ${intern.getSchool()}
              </p> 
          
      </div>`;

    // adds the intern section to the html array
    teamHTML.push(internCard);
  };

  // this for statement loops through the teamRoster array and calls the function associated with each type of employee in the array
  for (let i = 0; i < teamRoster.length; i++) {
    if (teamRoster[i].getRole() === "Manager") {
      generateManagerCard(teamRoster[i]);
    }
    if (teamRoster[i].getRole() === "Engineer") {
      generateEngineerCard(teamRoster[i]);
    }
    if (teamRoster[i].getRole() === "Intern") {
      generateInternCard(teamRoster[i]);
    }
  }

  // removes separators in the html array so it can be inserted into the template in generateHTML as a string
  return teamHTML.join("");
}

// template for the html file that the created elements will be inserted into
function generateHTML(teamRoster) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Roster</title>
    </head>
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
    
    <section>

   ${renderTeamHTML(teamRoster)}

  </section>
  <script src="https://kit.fontawesome.com/61a11c1f84.js" crossorigin="anonymous"></script>
  </body>
  </html>`;
}

// generateHTML function exported to be used in the index.js file
module.exports = generateHTML;
