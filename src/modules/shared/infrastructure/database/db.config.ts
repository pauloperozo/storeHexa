import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dbType from './db.types';
import config from '../../../../config';
const { database: db } = config;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbType[db.type] || 'mysql',
  host: db.host,
  port: db.port,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [__dirname + '/entities/*.entitie{.ts,.js}'],
  synchronize: db.synchronize,
};
