import { injectable } from 'inversify';
import { UserRepository } from './user-repository';

@injectable()
export class App {

  constructor(
    private readonly repository: UserRepository
  ) {}

  public execute() {
    const users = this.getUsersName();
    console.log(users);
  }

  public getUsersName() {
    return this.repository.findAll().map((user) => user.name);
  }
}