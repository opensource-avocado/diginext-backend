import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserType } from '../../domain/types/create-user.type';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO implements CreateUserType {
  @ApiProperty({
    description: 'The email of the user',
    required: true,
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'The password of the user',
    required: true,
    example: 'SecurePassword123',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ description: 'The username of the user', required: true, example: 'username' })
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}
