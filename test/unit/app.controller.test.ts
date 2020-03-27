import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../../src/controllers/app.controller';
import { AppService } from '../../src/services/app.service';

// TODO: add mutation testing
describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService]
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it(`should return Hello World!`, () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });

    describe('GET Users API', () => {
        it(`should return users list`, () => {
            expect(appController.mockUsers()).toBeDefined();
        });
    });

    describe('* Testing Maths', () => {
        it('should return a number of 5', () => {
            const x = 5;
            const y = 0;
            const expectedResult = 5;
            expect(x + y).toEqual(expectedResult);
            expect(typeof (x + y)).toBe('number');
        });
    });
});
