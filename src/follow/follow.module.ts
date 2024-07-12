import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowSchema, FollowSchemaClass } from './infrastructure/entities/follow.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: FollowSchemaClass.name, schema: FollowSchema }])],
})
export class FollowModule {}
