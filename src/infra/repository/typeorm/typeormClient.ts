import { databaseConfig } from '../../../config/database';
import { DataSource } from 'typeorm';
import { Employe } from './models/employe.entity';
import { Visitor } from './models/visitor.entity';
import { User } from './models/user.entity';
import { Company } from './models/company.entity';

export const dataSource = new DataSource({
    type: 'postgres',
    host: databaseConfig.host,
    port: parseInt(databaseConfig.port, 10),
    username: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.name,
    entities: [Employe, Visitor, User, Company],
    synchronize: true,
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    migrationsTableName: 'custom_migration_table',
    logging: 'all',
    uuidExtension: 'uuid-ossp',
});

dataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });
