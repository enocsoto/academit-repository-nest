import { IsEnum, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsEnum(['javascript', 'typescript', 'node.js'])
  readonly title: string;

  @IsString()
  readonly description: string;
}
