import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from './dto';
import { ICourses } from 'src/seed/interfaces';
import { Model, isValidObjectId } from 'mongoose';
import { Course } from './entities/course.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name)
    private readonly courseModel: Model<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    try {
      const course = await this.courseModel.create(createCourseDto);
      return course;
    } catch (error) {
      this.errorHandler(error);
      throw new InternalServerErrorException(
        `Can't create Course on database ${error.message}`,
      );
    }
  }

  async findAll() {
    try {
      const course = await this.courseModel.find({ status: true });
      return course;
    } catch (error) {
      throw new InternalServerErrorException(
        `Can't find courses on database ${error.message}`,
      );
    }
  }

  async findOne(term: string) {
    try {
      let course: Course;

      if (isValidObjectId(term))
        course = await this.courseModel.findOne({ term });

      if (!course)
        course = await this.courseModel.findOne({ title: term.trim() });

      if (!course) 
        throw new NotFoundException(`Course ${term} not found`);

      return course;
    } catch (error) {
      throw new NotFoundException(
        `Can't find course on the database ${error.message}`,
      );
    }
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    try {
      
      const course = await this.courseModel.findOne({_id: id});
      await course.updateOne(updateCourseDto);

      return {...course.toJSON(),...updateCourseDto };
    
    } catch (error) {
      this.errorHandler(error);
      throw new BadRequestException(`Don't update course, ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const course = await this.courseModel.findByIdAndUpdate({
        where: id,
        status: 'false',
      });
      if (!course) 
        throw new Error(`Course whit ${id} does not exist`);

      return { msg: `Course status: false` };
    } catch (error) {
      throw new BadRequestException(`Course ${id} does not exist`);
    }
  }

  fillCourseWhithSeedData(course: ICourses[]) {
    try {
      const courses = course;
    return `Courses Created ${courses.length}`;
    } catch (error) {
      
    }
  }

  errorHandler(error: any) {
    if (error.code === 11000)
      throw new BadRequestException(
        `Student exists on the database ${JSON.stringify(error.keyValue)}`,
      );
  }
}
