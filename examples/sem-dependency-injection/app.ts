import { UserRepository } from './user-repository';

export class App {
  public execute() {
    const users = this.getUsersName();
    console.log(users);
  }

  public getUsersName() {
    const repository = new UserRepository();
    return repository.findAll().map((user) => user.name);
  }
}