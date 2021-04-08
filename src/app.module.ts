import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { UsersModule } from './users/users.module'
import { DutiesModule } from './duties/duties.module'

import config from '../config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configServices: ConfigService) => {
        const { ip, port, database, user, password } = configServices.get(
          'DATABASE_CONFIG',
        )
        return {
          uri: `mongodb://${user}:${password}@${ip}:${port}/${database}?authSource=admin`,
        }
      },
      inject: [ConfigService],
    }),
    UsersModule,
    DutiesModule,
  ],
})
export class AppModule {}
