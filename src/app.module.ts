import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FollowModule } from './follow/follow.module';
import { UserModule } from './user/user.module';
import databaseConfig from './config/database.config';
import globalConfig from './config/global.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, globalConfig],
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        uri: databaseConfig().connectionString,
        dbName: databaseConfig().databaseName,
      }),
    }),
    FollowModule,
    UserModule,
  ],
})
export class AppModule {}
