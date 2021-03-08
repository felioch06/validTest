import { createConnection } from 'typeorm';
import models from '../models';
import { databaseConfig } from '../config/database';

export const initializeDb = () => {
  const config = databaseConfig();

  return createConnection({
    type: config.type as any,
    database: config.database,
    username: config.username,
    password: config.password,
    host: config.host,
    port: config.port,
    synchronize: true,
    entities: models,
  });
};
