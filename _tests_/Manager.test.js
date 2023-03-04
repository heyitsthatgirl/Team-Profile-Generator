// the Manager subclass is being imported here
const Manager = require("../lib/Manager");

// these are the tests for the Manager subclass
describe("Manager", () => {
    // test to make sure a new instance of Manager can be created
  describe("Create a new Manager", () => {
    test("should create a new Manager using the 'new' keyword", () => {
      const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
      expect(newManager).toBeInstanceOf(Manager);
    });
    // test to make sure the properties are correctly defined in new Manager
    test("newManager should contain the properties 'name', 'id', 'email', and 'officeNumber", () => {
      const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
      expect(newManager).toEqual({
        name: "Ryan",
        id: 2,
        email: "ryan@manager.com",
        officeNumber: 127,
      });
    });
  });

  describe("methods", () => {
    // test for getName method
    test("getName should return the Manager's name", () => {
      const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
      expect(newManager.getName()).toEqual("Ryan");
    });
    // test for getId method
    test("getId should return Manager's id", () => {
      const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
      expect(newManager.getId()).toEqual(2);
    });
    // test for getEmail method
    test("getEmail should return Manager's email", () => {
      const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
      expect(newManager.getEmail()).toEqual("ryan@manager.com");
    });
    // test for getOfficeNumber method
    test("getofficeNumber should return the Manager's office number", () => {
        const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
        expect(newManager.getOfficeNumber()).toEqual(127);
    });
    // test for getRole method
    test("getRole should return 'Manager'", () => {
        const newManager = new Manager("Ryan", 2, "ryan@manager.com", 127);
        expect(newManager.getRole()).toEqual("Manager");
    });
  });
});

// all tests pass when npm run test is run from the command line