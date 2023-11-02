import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(3)
  readonly firstName: string;

  @IsString()
  @MinLength(3)
  readonly lastName: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNumber()
  @Min(16)
  @Max(99)
  @IsPositive()
  readonly age: number;

  @IsMobilePhone()
  readonly phone: string;

  @IsString()
  @IsEnum(['javascript', 'typescript', 'node.js'], {
    message:
      'Invalid programming language selected: javascript, typescript, node.js',
  })
  readonly courses: string[];

  @IsString()
  @MinLength(7)
  @MaxLength(10)
  readonly documentId: string;
}
