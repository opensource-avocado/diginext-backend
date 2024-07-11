import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSchemaClass } from './infrastructure/entities/user.schema';
import { UserService } from './application/services/user.service';
import { UserController } from './application/controllers/user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserSchemaClass.name, schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
