import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Course extends Document {
  @Prop({
    lowercase: true,
    minlength: 3,
    required: true,
    type: String,
  })
  title: string;

  @Prop({
    lowercase: true,
    minlength: 3,
    required: false,
    type: String,
  })
  description?: string;

  @Prop({
    default: true,
    type: Boolean,
  })
  status: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
