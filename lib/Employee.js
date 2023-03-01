class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`Name: ${this.name}`);
  }

  getId() {
    console.log(`Id: ${this.id}`);
  }

  getEmail() {
    console.log(`Email: ${this.email}`);
  }

  getRole() {
    console.log(`Role: Employee`);
  }
}

module.exports = Employee;

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
