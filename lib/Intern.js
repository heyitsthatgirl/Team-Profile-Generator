//importing the Employee class
const Employee = require('./Employee');

// creating a new subclass of Employee called Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        // properties inherited from Employee class
        super(name, id, email);
        // new property associated with Intern subclass
        this.school = school;
    }

    // method that logs the Intern's school when called
    getSchool() {
        console.log(`School: ${this.school}`);
    }

    // method that logs the Intern's role when called - overwritten from Employee
    //POLYMORPHISM
    getRole() {
        console.log(`Role: Intern`);
    }
}

// exporting the Intern subclass to be used in other files
module.exports = Intern;

// GUIDELINES
// In addition to `Employee`'s properties and methods, 
//`Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// Finally, although it’s not a requirement, consider adding validation 
//to ensure that user input is in the proper format.