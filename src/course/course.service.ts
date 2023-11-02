import { Injectable } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from './dto';
import { ICourses } from 'src/seed/interfaces';

@Injectable()
export class CourseService {
  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all course`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
  fillCourseWhithSeedData(course: ICourses[]) {
    const courses = course;
  }
}
