// new class created
class Employee {
  // properties of Employee class  
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // method that returns the Employee's name when called
  getName() {
    return this.name;
  }

  // method that returns the Employee's id when called
  getId() {
    return this.id;
  }

  // method that returns the Employee's email when called
  getEmail() {
    return this.email;
  }

  // method that returns the Employee's role when called
  getRole() {
    return "Employee";
  }
}

// exporting the Employee class to be used in other files
module.exports = Employee;

// GUIDELINES
// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.
