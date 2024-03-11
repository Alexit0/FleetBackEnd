import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class LoadingDetails {
  @Prop()
  index: number;
  @Prop()
  type: string;
  @Prop()
  dateTime: string;
  @Prop()
  address: string;
  @Prop()
  comments: string;
  @Prop()
  coordinates: string;
  @Prop()
  distance: number;
}

export const LoadingDetailsSchema =
  SchemaFactory.createForClass(LoadingDetails);
