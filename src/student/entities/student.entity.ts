import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({
    lowercase: true,
    minlength: 3,
    required: true,
    type: String,
  })
  firstName: string;

  @Prop({
    lowercase: true,
    minlength: 3,
    required: true,
    type: String,
  })
  lastName: string;

  @Prop({
    index: true,
    lowercase: true,
    required: true,
    type: String,
    unique: true,
  })
  email: string;

  @Prop({
    max: 99,
    min: 16,
    required: true,
    type: Number,
  })
  age: number;

  @Prop({
    index: true,
    type: String,
    unique: true,
  })
  phone: string;

  @Prop({
    required: true,
    type: Array,
  })
  courses: string[];

  @Prop({
    index: true,
    type: String,
    unique: true,
  })
  documentId: string;

  @Prop({
    default: true,
    type: Boolean,
  })
  status: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
