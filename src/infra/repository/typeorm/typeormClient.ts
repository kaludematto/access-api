import { databaseConfig } from '../../../config/database';
import { DataSource } from 'typeorm';
import { Employe } from './models/employe.entity';

export const dataSource = new DataSource({
    type: 'postgres',
    host: databaseConfig.host,
    port: parseInt(databaseConfig.port, 10),
    username: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.name,
    entities: [Employe],
    synchronize: false,
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
    logging: true,
});

dataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });
