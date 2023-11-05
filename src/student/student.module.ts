import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './entities/student.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [ConfigModule,
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  exports: [StudentService],
})
export class StudentModule {}
