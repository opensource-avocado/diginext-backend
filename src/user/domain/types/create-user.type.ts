import { User } from '../entities/user';

export type CreateUserType = Omit<
  User,
  'id' | 'createdAt' | 'updatedAt' | 'isFollower' | 'isFollowing' | 'followers' | 'following'
>;
