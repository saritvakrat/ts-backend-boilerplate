import { Test, TestingModule } from '@nestjs/testing';
import { MysqlDbServiceService } from '../src/services/mysql-db-service.service';

describe('MysqlDbServiceService', () => {
    let service: MysqlDbServiceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MysqlDbServiceService],
        }).compile();

        service = module.get<MysqlDbServiceService>(MysqlDbServiceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
