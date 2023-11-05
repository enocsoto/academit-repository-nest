import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto';
import { IStudent } from 'src/seed/interfaces';
import { Model, isValidObjectId } from 'mongoose';
import { Student } from './entities/student.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StudentService {
  private defaultLimit: number;
  private defaultOffset: number;
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
    private readonly configService: ConfigService
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit');
    this.defaultOffset = configService.get<number>('defaultOffset');
  }

  async create(createStudentDto: CreateStudentDto) {
    try {
      const student = await this.studentModel.create(createStudentDto);
      return student;
    } catch (error) {
      this.errorHandler(error);
      throw new InternalServerErrorException(
        `Can't create student in database, ${error.message}`,
      );
    }
  }

  async findAll(paginationDto:PaginationDto){
    const {limit =this.defaultLimit, offset =this.defaultOffset} = paginationDto;
    try {
      const student = await this.studentModel.find({ status: true })
      .limit(limit)
      .skip(offset)
      .select('-__v');
      if(student.length === 0) throw new NotFoundException(`the database does not contain student`);
      return student;
    } catch (error) {
      throw new InternalServerErrorException(`Dont find students on the database`);
    }
  }

  async findOne(term: string) {
    try {
      let student: Student;

      if (!isNaN(+term)) student = await this.studentModel.findOne({ term });

      //Mongo ID
      if (!student && isValidObjectId(term)) {
        student = await this.studentModel.findById(term);
        if(!student || student.status === false) 
          throw new NotFoundException( `Student ${term} the status is desactivated` );
      }
      //DocumentID
      if (!student)
        student = await this.studentModel.findOne({ documentId: term.trim() });

      //Email
      if (!student)
        student = await this.studentModel.findOne({ email: term.trim() });

      if (!student) throw new NotFoundException(`Student ${term} not found`);

      return student;
    } catch (error) {
      throw new NotFoundException(
        `Can't find student on the database, ${error.message}`,
      );
    }
  }

  async update(term: string, updateStudentDto: UpdateStudentDto) {
    try {
      const student = await this.findOne(term);
      await student.updateOne(updateStudentDto);

      return { ...student.toJSON(), ...updateStudentDto };
    } catch (error) {
      this.errorHandler(error);
      throw new BadRequestException(`Don't update student, ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const student = await this.studentModel.findOneAndUpdate({
        where: id,
        status: 'false',
      });

      if (!student) throw new Error(`Student whit ${id} does not exist`);

      return { msg: `Student status: false` };
    } catch (error) {
      throw new BadRequestException(`${error}`);
    }
  }
  fillStudentWhithSeedData(student: IStudent[]) {
  try {
    const insertSeed = this.studentModel.create(student);
    if(!insertSeed) throw new Error(`Students already exists`)
    return insertSeed;

  } catch (error) {
    throw new Error(`seed Failed: ${error}`);
  }
  }

  errorHandler(error: any) {
    if (error.code === 11000)
      throw new BadRequestException(
        `Student exists on the database ${JSON.stringify(error.keyValue)}`,
      );
  }
}
