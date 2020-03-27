import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public getHello(): string {
        return 'Hello World!';
    }

    public mockUsers(): object[] {
        // Hard coded example data - that should be taken from DB
        return [
            { "id": 1, "firstName": "Dan", "lastName": "Brown", "email": "iamdan@gmail.com" },
            { "id": 2, "firstName": "Ron", "lastName": "Looks", "email": "iamron@gmail.com" },
            { "id": 3, "firstName": "Keren", "lastName": "Hope", "email": "iamkeren@gmail.com" },
        ];
    }
}
