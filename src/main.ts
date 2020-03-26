import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as config from 'config';

dotenv.config();

async function bootstrap() {
    const serverConfig = config.get('server');
    const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
        .setTitle('Backend template API')
        .setDescription('The Backend template API description')
        .setVersion('1.0')
        .addTag('nest-js')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    const logger = new Logger('bootstrap');
    const port = process.env.PORT || serverConfig.port;

    SwaggerModule.setup('api', app, document);

    await app.listen(port);
    logger.log(`Application is listening on port ${port}`);
}
bootstrap();
