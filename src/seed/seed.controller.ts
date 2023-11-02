import { Controller, Post, Body } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post('/student')
  runSeedStudent() {
    return this.seedService.createStudent();
  }

  @Post('/course')
  runSeedCourse() {
    return this.seedService.createCourse();
  }
}
