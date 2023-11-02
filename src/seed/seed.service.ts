import { Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { CourseService } from 'src/course/course.service';
import { coursesSEED, studentsSeed } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly studentSeed: StudentService,
    private readonly courseSeed: CourseService,
  ) {}
  createStudent() {
    this.studentSeed.fillStudentWhithSeedData(studentsSeed);
  }

  createCourse() {
    this.courseSeed.fillCourseWhithSeedData(coursesSEED);
  }
}
