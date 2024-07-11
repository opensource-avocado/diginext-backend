import { User } from '../../domain/entities/user';
import { UserInterface } from '../../domain/interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserSerializer implements UserInterface {
  constructor(data: User) {
    this.id = data.id;

    this.username = data.username;
    this.email = data.email;

    if (data.followers) {
      this.followers = data.followers.map((follower) => new UserSerializer(follower));
    }
    if (data.following) {
      this.following = data.following.map((following) => new UserSerializer(following));
    }

    this.isFollowing = data.isFollowing;
    this.isFollower = data.isFollower;

    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  @ApiProperty({
    description: 'The ID of the user',
    required: true,
    example: '6672ad918c3636594f973fbc',
  })
  id: string;

  @ApiProperty({ description: 'The username of the user', required: true, example: 'username1' })
  username: string;

  @ApiProperty({
    description: 'The email of the user',
    required: true,
    example: 'user1@example.com',
  })
  email: string;

  @Exclude()
  password: string;

  @ApiProperty({ description: 'The followers of the user', type: [UserSerializer] })
  followers?: UserSerializer[];

  @ApiProperty({ description: 'The users who the user is following', type: [UserSerializer] })
  following?: UserSerializer[];

  @ApiProperty({ description: 'Does the current user follow the user?', type: Boolean })
  isFollowing?: boolean;

  @ApiProperty({ description: 'Is the current user a follower of the user?', type: Boolean })
  isFollower?: boolean;

  @ApiProperty({ description: 'The creation date of the user', type: Date })
  createdAt?: Date;

  @ApiProperty({ description: 'The latest update date of the user', type: Date })
  updatedAt?: Date;
}
