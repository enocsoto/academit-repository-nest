import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  
  @IsString()
  @MinLength(3)
  readonly name: string;

  @IsString()
  @MinLength(3)
  readonly surname: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsString()
  @MinLength(3)
  @MaxLength(10)
  readonly phone: string;

  @IsString()
  @IsEnum(['javascript', 'typescript', 'node.js'])
  readonly courses: string[];

  @IsNumber()
  @MaxLength(10)
  readonly documentId: number;
}
