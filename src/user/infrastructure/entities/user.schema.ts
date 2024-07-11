import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { UserInterface } from '../../domain/interfaces/user.interface';

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'users',
})
export class UserSchemaClass implements UserInterface {
  id?: string;
  @Prop({ type: String, required: true })
  username: string;
  @Prop({ type: String, unique: true, required: true })
  email: string;
  @Prop({ type: String, required: true })
  password: string;

  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(UserSchemaClass);
