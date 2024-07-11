import { UserInterface } from '../interfaces/user.interface';
import { UserSchemaClass } from '../../infrastructure/entities/user.schema';

export class User implements UserInterface {
  id: string;

  username: string;
  email: string;
  password: string;

  followers?: User[];
  following?: User[];
  isFollowing?: boolean;
  isFollower?: boolean;

  createdAt?: Date;
  updatedAt?: Date;

  constructor(entity: UserSchemaClass) {
    if (entity._id) {
      this.id = entity._id.toString();
    }
    this.username = entity.username;
    this.email = entity.email;
    this.password = entity.password;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }

  static toPersistence(data: User): UserSchemaClass {
    const entity = new UserSchemaClass();
    if (data.id) {
      entity._id = data.id;
    }
    entity.username = data.username;
    entity.email = data.email;
    entity.password = data.password;
    return entity;
  }

  static toPersistenceUnpopulated(data: User): UserSchemaClass {
    const entity = new UserSchemaClass();
    if (data.id) {
      entity._id = data.id;
    }
    return entity;
  }

  static toPersistenceByArrayUnpopulated(data: User[]): UserSchemaClass[] {
    const entities: UserSchemaClass[] = [];
    data.map((object) => entities.push(this.toPersistenceUnpopulated(object)));
    return entities;
  }
}
