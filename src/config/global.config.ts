import * as env from 'dotenv';

env.config();

export default () => ({
  port: +process.env.BACKEND_PORT ?? 3000,
  baseUrl: process.env.BACKEND_BASE_URL ?? 'http://localhost2',
  appName: process.env.BACKEND_NAME ?? 'app',
  workingDirectory: process.cwd(),
  documentationUrlExtension: process.env.BACKEND_DOCUMENTS_URL_EXTENSION ?? 'docs',
  documentationUrl: process.env.BACKEND_DOCUMENTS_URL ?? 'http://localhost/docs',
});
