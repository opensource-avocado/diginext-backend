import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserSchemaClass } from '../../infrastructure/entities/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../domain/entities/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserSchemaClass.name) private userModel: Model<UserSchemaClass>) {}

  async createUser(data: CreateUserDTO): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: data.email }).exec();

    if (existingUser) {
      throw new UnprocessableEntityException('duplicate user');
    }
    const salt = await bcrypt.genSalt();
    const { password, ...insensitiveData } = data;

    const object = await this.userModel.create({
      ...insensitiveData,
      password: await bcrypt.hash(password, salt),
    });
    return new User(object);
  }
}
