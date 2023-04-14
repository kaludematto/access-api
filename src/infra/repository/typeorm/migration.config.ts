import { dataSource } from './typeormClient';

export const migrationConfig = dataSource.initialize();
