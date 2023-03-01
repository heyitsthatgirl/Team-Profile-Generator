const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${this.school}`);
    }

    getRole() {
        console.log(`Role: Intern`);
    }
}

module.exports = Intern;

// In addition to `Employee`'s properties and methods, 
//`Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// Finally, although it’s not a requirement, consider adding validation 
//to ensure that user input is in the proper format.