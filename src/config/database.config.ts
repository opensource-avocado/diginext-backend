import * as env from 'dotenv';

env.config();

export default () => ({
  connectionString: process.env.MONGODB_CONNECTION_STRING ?? 'mongodb://localhost:27017',
  databaseName: process.env.BACKEND_NAME ?? 'app',
});
