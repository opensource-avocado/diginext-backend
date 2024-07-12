import { Follow } from '../entities/follow';

export type CreateFollowType = Omit<Follow, 'id' | 'createdAt' | 'updatedAt'>;
