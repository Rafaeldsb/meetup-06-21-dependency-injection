import { injectable } from 'inversify';
import { users } from '../data';
import { UserRepository } from './user-repository';

@injectable()
export class MockUserRepository implements UserRepository {
  public findAll(): { id: number; name: string }[] {
    return users;
  }
}
