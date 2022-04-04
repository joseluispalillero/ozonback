import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findAll')
  findAll() {
    return this.appService.findAll();
  }
  @Get('findById/:id')
  findById(@Param('id') id) {
    return this.appService.findById(id);
  }
}
