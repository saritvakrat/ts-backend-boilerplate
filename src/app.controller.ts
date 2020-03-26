import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }
    private logger = new Logger(`AppController`);

    @Get()
    getHello(): string {
        this.logger.verbose(`User got an amazing Hello world!`);
        return this.appService.getHello();
    }
}
