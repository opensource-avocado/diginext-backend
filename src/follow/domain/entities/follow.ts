import { FollowInterface } from '../interfaces/follow.interface';
import { User } from '../../../user/domain/entities/user';
import { FollowStatusesEnum } from '../../application/enums/follow-statuses.enum';
import { FollowSchemaClass } from '../../infrastructure/entities/follow.schema';

export class Follow implements FollowInterface {
  id: string;

  follower: User;
  following: User;
  status: FollowStatusesEnum;

  createdAt?: Date;
  updatedAt?: Date;

  constructor(entity: FollowSchemaClass) {
    if (entity._id) {
      this.id = entity._id.toString();
    }
    if (entity.follower) {
      this.follower = new User(entity.follower);
    }
    if (entity.following) {
      this.following = new User(entity.following);
    }
    this.status = entity.status;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
