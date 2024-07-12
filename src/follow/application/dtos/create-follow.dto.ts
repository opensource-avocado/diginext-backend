import { CreateFollowType } from '../../domain/types/create-follow.type';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { User } from '../../../user/domain/entities/user';
import { FollowStatusesEnum } from '../enums/follow-statuses.enum';

export class CreateFollowDto implements CreateFollowType {
  @ApiProperty({ description: 'ID of the follower', required: true })
  @IsNotEmpty()
  follower: User;

  @ApiProperty({ description: 'ID of the user being followed', required: true })
  @IsNotEmpty()
  following: User;

  @ApiProperty({ enum: FollowStatusesEnum, example: FollowStatusesEnum.ACCEPTED, required: true })
  @IsEnum(FollowStatusesEnum)
  status: FollowStatusesEnum;
}
