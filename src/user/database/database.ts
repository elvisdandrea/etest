import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Users } from '../user/entities/user.entity';

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: '192.168.100.12',
          port: 3306,
          username: 'test',
          password: 'test',
          database: 'test',
        });
        sequelize.addModels([Users]);
        await sequelize.sync();
        return sequelize;
      },
    },
  ];
