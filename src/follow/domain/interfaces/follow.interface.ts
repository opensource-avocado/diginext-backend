import { UserInterface } from '../../../user/domain/interfaces/user.interface';
import { FollowStatusesEnum } from '../../application/enums/follow-statuses.enum';

export interface FollowInterface {
  id?: string;

  follower: UserInterface;
  following: UserInterface;
  status: FollowStatusesEnum;

  createdAt?: Date;
  updatedAt?: Date;
}
