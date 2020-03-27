import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
import config from 'config';

@Injectable()
export class MysqlDbServiceService {
    private connection;

    public static async initDBs() {
        const DB = new MysqlDbServiceService();

        await DB.init({
            host: config.DB_HOST,
            port: parseInt(config.DB_PORT),
            database: config.DB_DATABASE,
            user: config.DB_USER,
            password: config.DB_PASSWORD
        });

        return {
            DB
        };
    }

    private async init({
        host,
        port,
        database,
        user,
        password
    }: DBConnectionProps): Promise<void> {
        try {
            this.connection = await mysql.createConnection({
                host,
                port,
                database,
                user,
                password
            });

            console.log(`Database init OK for ${database} DB`);
        } catch (e) {
            console.error(`Database init error for ${database} DB!`);
            console.error(e);
            process.exit(1);
        }
    }

    public async query(queryString) {
        return this.connection.query(queryString);
    }
}

interface DBConnectionProps {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
}
