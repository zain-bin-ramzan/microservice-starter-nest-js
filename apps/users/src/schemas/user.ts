import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ isRequired: true })
  firstName: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop({ isRequired: true })
  lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
