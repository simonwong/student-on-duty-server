import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Duty, DutySchema } from './schemas/duty.schema'
import { DutiesController } from './duties.controller'
import { DutiesService } from './duties.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Duty.name, schema: DutySchema }]),
  ],
  controllers: [DutiesController],
  providers: [DutiesService],
})
export class DutiesModule {}
