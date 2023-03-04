// the Employee class is being imported here
const Employee = require('../lib/Employee');

// these are the tests for the Employee class
describe("Employee", () => {
    // test to make sure a new instance of Employee can be created
    describe("Create an Employee", () => {
        test("should create a new Employee by using the 'new' keyword", () => {
            const newEmployee = new Employee("Hope", 1, "hope@gmail.com");
            expect(newEmployee).toBeInstanceOf(Employee);
        });
        // test to make sure the properties are defined correctly in the new Employee
        test("should create an Employee object containing a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
            const newEmployee = new Employee("Hope", 1, "hope@gmail.com");
            expect(newEmployee).toEqual({
                name: "Hope",
                id: 1,
                email: "hope@gmail.com",
            });
        });
    }); 

    describe("methods", () => {
        // test for getName method
        test("getName should return the Employee's name", () => {
            const newEmployee = new Employee("Hope", 1, "hope@gmail.com");
            expect(newEmployee.getName()).toEqual("Hope");
        });
        // test for getId method
        test("getId should return the Employee's id", () => {
            const newEmployee = new Employee("Hope", 1, "hope@gmail.com");
            expect(newEmployee.getId()).toEqual(1); 
        });
        // test for getRole method
        test("getRole should return 'Employee'", () => {
            const newEmployee = new Employee("Hope", 1, "hope@gmail.com");
            expect(newEmployee.getRole()).toEqual("Employee");
        });
    });
       
});

// all tests pass when npm run test is run from the command line