jest.mock('inversify');
import { App } from './app';

describe("App", () => {
  it("getUsersName() should return a array of names", () => {
    const repository = jest.fn().mockImplementation(() => ({
      findAll: () => [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
      ],
    }));
    const app = new App(repository());
    expect(app.getUsersName()).toStrictEqual(["Test1", "Test2"]);
  });
});
