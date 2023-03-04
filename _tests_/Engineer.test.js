// importing the Engineer subclass
const Engineer = require("../lib/Engineer");

// these are the tests for the Engineer subclass
describe("Engineer", () => {
    //test to make sure a new instance of Engineer can be created
    describe("create a new Engineer", () => {
        test("should create a new Engineer using the 'new' keyword", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer).toBeInstanceOf(Engineer);
        });
        // test to make sure the properties are defined correctly in the new Engineer
        test("newEngineer should contain the properties 'name', 'id', 'email', and 'gitHub'", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer).toEqual({
                name: "Hope",
                id: 1,
                email: "hope@gmail.com",
                gitHub: "heyitsthatgirl",
            });
        });
    });

    describe("methods", () => {
        // test for getName method
        test("getName should return the Engineer's name", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer.getName()).toEqual("Hope");
        });
        // test for getId method
        test("getId should return the Engineer's id", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer.getId()).toEqual(1);
        });
        // test for getEmail method
        test("getEmail should return the Engineer's email address", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer.getEmail()).toEqual("hope@gmail.com");
        });
        // test for getGitHub method
        test("getGitHub should return the Engineer's gitHub username", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer.getGithub()).toEqual("heyitsthatgirl");
        });
        // test for getRole method
        test("getRole should return 'Engineeer", () => {
            const newEngineer = new Engineer("Hope", 1, "hope@gmail.com", "heyitsthatgirl");
            expect(newEngineer.getRole()).toEqual("Engineer");
        });
    });
});

// all tests pass when npm run test is run from the command line