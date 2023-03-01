// import the Employee class
const Employee = require("./Employee");

// create a new subclass of Employee called Manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // properties inherited from Employee class
    super(name, id, email);
    // new property associated with Manager subclass
    this.officeNumber = officeNumber;
  }

  // method that logs the Manager's role when called - overwritten from Employee
    //POLYMORPHISM
  getRole() {
    console.log(`Role: Manager`);
  }
}

// exporting the Manager subclass to be used in other files
module.exports = Manager;

// GUIDELINES
// In addition to `Employee`'s properties and methods,
//`Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
