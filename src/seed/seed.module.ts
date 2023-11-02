import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { StudentModule } from 'src/student/student.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [StudentModule, CourseModule],
})
export class SeedModule {}
