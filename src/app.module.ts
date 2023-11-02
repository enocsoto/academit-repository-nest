import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [StudentModule, CourseModule, AuthModule],
})
export class AppModule {}
