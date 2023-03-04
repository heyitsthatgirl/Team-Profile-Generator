function generateManagerCard(data) {
  return `<!DOCTYPE html>
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
  <div class="card">
    <h2>${data.getName()} </br> ${data.getRole(data)}</h2>
    <ul>
        <li>
            ${data.getId()}
        </li>
        <li>
            ${data.getEmail()}
        </li>
        <li>
            ${data.getOfficeNumber()}
        </li>
    </ul>
</div>
</section>
</body>
</html>`;
};

module.exports = generateManagerCard;
