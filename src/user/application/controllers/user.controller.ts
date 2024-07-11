import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserSerializer } from '../serializers/user.serializer';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ description: 'Create a new user' })
  @ApiCreatedResponse({
    description: 'The user has been successfully created.',
    type: UserSerializer,
  })
  async createUser(@Body() createUserDto: CreateUserDTO): Promise<UserSerializer> {
    return this.userService.createUser(createUserDto);
  }
}
