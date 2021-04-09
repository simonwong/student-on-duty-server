import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { UsersModule } from './users/users.module'
import { DutiesModule } from './duties/duties.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configServices: ConfigService) => {
        const ip = configServices.get('DB_IP')
        const port = configServices.get('DB_PORT')
        const database = configServices.get('DB_DATABASE')
        const user = configServices.get('DB_USER')
        const password = configServices.get('DB_PASSWORD')
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
