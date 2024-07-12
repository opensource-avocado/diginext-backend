import { FollowInterface } from '../../domain/interfaces/follow.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserSchemaClass } from '../../../user/infrastructure/entities/user.schema';
import { FollowStatusesEnum } from '../../application/enums/follow-statuses.enum';
import mongoose from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'follows',
})
export class FollowSchemaClass implements FollowInterface {
  id?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserSchemaClass.name, required: true })
  follower: UserSchemaClass;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: UserSchemaClass.name, required: true })
  following: UserSchemaClass;
  @Prop({
    type: String,
    enum: FollowStatusesEnum,
    default: FollowStatusesEnum.ACCEPTED,
    required: true,
  })
  status: FollowStatusesEnum;

  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export const FollowSchema = SchemaFactory.createForClass(FollowSchemaClass);
