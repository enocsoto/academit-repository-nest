import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsEnum, IsString } from 'class-validator';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {

  @IsString()
  readonly description?: string;
}
