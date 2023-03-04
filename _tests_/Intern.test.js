// importing the Intern subclass
const Intern = require("../lib/Intern");

//tests for the Intern subclass
describe("Intern", () => {
    // test to make sure a new instance of Intern can be created
    describe("create a new Intern", () => {
        test("should create a new Intern using the 'new' keyword", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern).toBeInstanceOf(Intern);
        });
        // test to make sure the properties of the new Intern are correctly defined
        test("newIntern should contain the properties 'name', 'id', 'email', and 'school'", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern).toEqual({
                name: "Jeff",
                id: 3,
                email: "jeff@intern.com",
                school: "CPCC",
            });
        });
    });

    describe("methods", () => {
        // test for the getName method
        test("getName should return the Intern's name", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern.getName()).toEqual("Jeff");
        });
        // test for the getId method
        test("getId should return the Intern's id", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern.getId()).toEqual(3);
        });
        // test for the getEmail method
        test("getEmail should return the Intern's email address", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern.getEmail()).toEqual("jeff@intern.com");
        });
        // test for the getSchool method
        test("getSchool should return the Intern's school", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern.getSchool()).toEqual("CPCC");
        });
        // test for the getRole method
        test("getRole should return 'Intern'", () => {
            const newIntern = new Intern("Jeff", 3, "jeff@intern.com", "CPCC");
            expect(newIntern.getRole()).toEqual("Intern");
        });
    });
});

// all tests pass when npm run test is run from the command line