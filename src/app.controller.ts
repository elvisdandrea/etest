import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test/:id')
  getHello(@Param('id') id: Number): Object {
    return this.appService.getHello();
  }

}
