import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Duty, DutyDocument } from './schemas/duty.schema'

@Injectable()
export class DutiesService {
  constructor(
    @InjectModel(Duty.name)
    private readonly dutyModel: Model<DutyDocument>,
  ) {}

  async findAll(): Promise<DutyDocument[]> {
    return this.dutyModel.find().exec()
  }
}
