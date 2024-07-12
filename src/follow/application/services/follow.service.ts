import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateFollowDto } from '../dtos/create-follow.dto';
import { FollowSchemaClass } from '../../infrastructure/entities/follow.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Follow } from '../../domain/entities/follow';
import { User } from '../../../user/domain/entities/user';

@Injectable()
export class FollowService {
  constructor(@InjectModel(FollowSchemaClass.name) private followModel: Model<FollowSchemaClass>) {}

  async createFollow(data: CreateFollowDto): Promise<Follow> {
    let existingFollow = await this.followModel.findOne({
      follower: User.toPersistenceUnpopulated(data.follower),
      following: User.toPersistenceUnpopulated(data.following),
    });

    if (existingFollow) {
      throw new UnauthorizedException('duplicate follow');
    }

    const follow = await this.followModel.create({
      follower: User.toPersistenceUnpopulated(data.follower),
      following: User.toPersistenceUnpopulated(data.follower),
      status: data.status,
    });
    return new Follow(follow);
  }
}
