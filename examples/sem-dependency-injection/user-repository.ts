import { users } from '../data';

export class UserRepository {
  public findAll(): { id: number; name: string }[] {
    return users;
  }
}
