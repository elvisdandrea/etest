import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';
import { databaseProviders } from '../database/database';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...userProvider,
    ...databaseProviders
  ]
})
export class UserModule {}
