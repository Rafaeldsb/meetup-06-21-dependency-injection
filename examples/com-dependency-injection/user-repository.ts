export abstract class UserRepository {
  abstract findAll(): { id: number; name: string }[];
}
