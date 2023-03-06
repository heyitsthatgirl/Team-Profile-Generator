// function to create each section of the html doc based on which items are present in the teamRoster array
function renderTeamHTML(teamRoster) {
  // empty array to store the HTML templates when they're created
  const teamHTML = [];

  // function to create a manager section using data from the teamRoster array
  const generateManagerCard = (manager) => {
    let managerCard = `
  <div class="card">
    <h2>${manager.getName()} </br> ${manager.getRole()}</h2>
    <ul>
        <li>
            ${manager.getId()}
        </li>
        <li>
            ${manager.getEmail()}
        </li>
    </ul>
</div>`;

    // add the manager section to the html array
    teamHTML.push(managerCard);
  };

  // function to create an engineer section using the teamRoster array
  const generateEngineerCard = (engineer) => {
    let engineerCard = ` 
    <div class="card">
        <h2>${engineer.getName()} </br> ${engineer.getRole()}</h2>
        <ul>
            <li>
                ${engineer.getId()}
            </li>
            <li>
                ${engineer.getEmail()}
            </li>
            <li>
                ${engineer.getGitHub()}
            </li>    
        </ul>
    </div>`;

    // adds the engineer section to the html array
    teamHTML.push(engineerCard);
  };

  // function to create an intern section using the teamRoster array
  const generateInternCard = (intern) => {
    let internCard = ` 
      <div class="card">
          <h2>${intern.getName()} </br> ${intern.getRole()}</h2>
          <ul>
              <li>
                  ${intern.getId()}
              </li>
              <li>
                  ${intern.getEmail()}
              </li>
              <li>
                  ${intern.getSchool()}
              </li> 
          </ul>
      </div>`;

    // adds the intern section to the html array
    teamHTML.push(internCard);
  };

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

function generateHTML(teamRoster) {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css"/>
        <title>HTML Template</title>
    </head>
    <body>
    
        <header>
            <h1>My Team</h1>
        </header>
    
    <section>

   ${renderTeamHTML(teamRoster)}

  </section>
  </body>
  </html>`;
}

module.exports = generateHTML;

//  <li>
// ${manager.getOfficeNumber()}
// </li>

// {/* <li>${engineer.getGitHub()}</li>; */}

// {/* <li>${intern.getSchool()}</li>; */}
