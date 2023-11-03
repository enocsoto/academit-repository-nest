import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './entities/student.entity';
import { CreateStudentDto, UpdateStudentDto } from './dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { IStudent } from 'src/seed/interfaces';

@Injectable()
export class StudentService {
  private defaulLimit : number;
  private defaulOffset : number;
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
    private readonly configService: ConfigService,
  ) {
    this.defaulLimit = this.configService.get<number>('DEFAULT_LIMIT');
    this.defaulOffset = this.configService.get<number>('DEFAULT_OFFSET');
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
    const {limit =this.defaulLimit, offset =this.defaulOffset} = paginationDto;
    try {
      const student = await this.studentModel.find({ status: true })
      .limit(limit)
      .skip(offset)
      .select('-__v');
      return student;
    } catch (error) {
      throw new NotFoundException(`Dont find students on the database`);
    }
  }

  async findOne(term: string) {
    try {
      let student: Student;

      if (!isNaN(+term)) student = await this.studentModel.findOne({ term });

      //Mongo ID
      if (!student && isValidObjectId(term)) {
        student = await this.studentModel.findById(term, {where: {status:true}});
      }
      //DocumentID
      if (!student)
        student = await this.studentModel.findOne({ documentId: term.trim() });

      //Email
      if (!student)
        student = await this.studentModel.findOne({ email: term.trim() });

      if (!student) 
        throw new NotFoundException(`Student ${term} not found`);

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
