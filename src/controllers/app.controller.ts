import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }
    private logger = new Logger(`AppController`);

    @Get()
    public getHello(): string {
        this.logger.verbose(`User got an amazing Hello world!`);
        return this.appService.getHello();
    }

    @Get('/users')
    public mockUsers(): object[] {
        this.logger.verbose(`Users list appears ${JSON.stringify(this.appService.mockUsers())}`);
        return this.appService.mockUsers();
    }
}
