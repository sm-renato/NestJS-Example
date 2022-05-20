import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'users',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['dist/src/db/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;