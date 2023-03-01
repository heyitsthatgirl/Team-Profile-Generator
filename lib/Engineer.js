const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        console.log(`GitHub: ${this.gitHub}`);
    }

    getRole() {
        console.log(`Role: Engineer`);
    }
}

module.exports = Engineer;
// In addition to `Employee`'s properties and methods, 
//`Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`