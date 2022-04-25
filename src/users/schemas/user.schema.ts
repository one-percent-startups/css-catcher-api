import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'user' })
export class User {
  @Prop()
  name: String;

  @Prop()
  email: String;

  @Prop()
  password: String;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
