// importing the Employee class
const Employee = require('./Employee');

// new subclass of Employee called Engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // properties inherited from Employee class
        super(name, id, email);
        // new property associated with Engineer subclass
        this.gitHub = gitHub;
    }

    // method that logs the Engineer's GitHub username when called
    getGithub() {
        console.log(`GitHub: ${this.gitHub}`);
    }

    // method that logs the Engineer's role when called - overwritten from Employee
    //POLYMORPHISM
    getRole() {
        console.log(`Role: Engineer`);
    }
}

// exporting the Engineer subclass to be used in other files
module.exports = Engineer;

//GUIDELINES
// In addition to `Employee`'s properties and methods, 
//`Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`