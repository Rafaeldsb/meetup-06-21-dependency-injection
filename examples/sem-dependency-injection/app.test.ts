describe("App", () => {
  beforeEach(() => {
    jest.resetModules();
  })
  it("getUsersName() should return a array of names", () => {
    jest.doMock("./user-repository", () => ({
      UserRepository: jest.fn().mockImplementation(() => ({
        findAll: () => [
          { id: 1, name: "Test1" },
          { id: 2, name: "Test2" },
        ],
      })),
    }));

    const app = new (require("./app").App)();
    expect(app.getUsersName()).toStrictEqual(["Test1", "Test2"]);
  });
});
