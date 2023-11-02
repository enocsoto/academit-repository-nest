import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsString()
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  readonly password?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsEnum(['javascript', 'typescript', 'node.js'], {
    message:
      'Invalid programming language selected: javascript, typescript, node.js',
  })
  @IsOptional()
  readonly courses?: string[];
}
