import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop()
  credits: number;

  @Prop()
  createDate: Date;

  @Prop()
  profileImg: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
