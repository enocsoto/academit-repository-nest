import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    MongooseModule.forRoot(
      process.env.DB_URI,
       { dbName: process.env.DB_NAME }
       ),
    StudentModule,
    CourseModule,
    AuthModule,
    SeedModule,
    CommonModule,
  ],
})
export class AppModule {}
